const { exec } = require('child_process');
// eslint-disable-next-line const/no-extraneous-dependencies
const { Command } = require('commander');
const util = require('util');
const path = require('path');

const { expo } = require('../app.json');
const { build } = require('../eas.json');

const promisifiedExec = util.promisify(exec);

const sentryCli = `sentry-cli`; // /Users/thien/.nvm/versions/node/v16.20.2/bin/sentry-cli

const nodeBinPath = path.dirname(process.execPath);
    
// Thêm đường dẫn của node bin vào PATH hiện hành
const customEnv = {
    ...process.env,
    PATH: `${nodeBinPath}:${process.env.PATH}`
};

const uploadAndroidSourceMap = async (expoConfig, updates) => {
  const appVersion = expoConfig.version;

  const androidVersionCode = expoConfig.android.versionCode;
  const androidPackageName = expoConfig.android.package;
  const androidUpdateId = updates.find((update) => update.platform === 'android').id;

  await promisifiedExec(`mv -f dist/bundles/android*.hbc dist/bundles/index.android.bundle`).catch(e => {
    console.log("😡 mv dist/bundles/android*.hbc run with catch", e.message)
  });

  const androidCommand = `${sentryCli} \
                            releases \
                              files ${androidPackageName}@${appVersion}+${androidVersionCode} \
                                upload-sourcemaps \
                                --dist ${androidUpdateId} \
                                --rewrite \
                                dist/bundles/index.android.bundle dist/bundles/index.android.bundle.map`;

  console.log("😏 Android_Command", `\n ${androidCommand} \n`);

  await promisifiedExec(androidCommand, {env: customEnv});
};

const uploadIosSourceMap = async (expoConfig, updates) => {
  const appVersion = expoConfig.version;

  const iosBuildNumber = expoConfig.ios.buildNumber;
  const iosBundleID = expoConfig.ios.bundleIdentifier;
  const iosUpdateId = updates.find((update) => update.platform === 'ios').id;
  await promisifiedExec(`mv -f dist/bundles/ios*.hbc dist/bundles/main.jsbundle`).catch(e => {
    console.log("😡 mv dist/bundles/ios*.hbc run with catch", e.message)
  });

  const iosCommand = `${sentryCli} \
                        releases \
                          files ${iosBundleID}@${appVersion}+${iosBuildNumber} \
                            upload-sourcemaps \
                            --dist ${iosUpdateId} \
                            --rewrite \
                            dist/bundles/main.jsbundle dist/bundles/ios-*.map`;
  console.log("😱 IOS_Command", `\n ${iosCommand} \n`);

  await promisifiedExec(iosCommand, {env: customEnv});
};

const program = new Command().requiredOption('-p, --profile  [value]', 'EAS profile').action(async (options) => {
  if (!Object.keys(build).includes(options.profile)) {
    console.error('Profile must be includes in : ', Object.keys(build));
  }

  console.info("\n====================🥰 START UPLOAD SOURCE MAPS TO SENTRY 🥰====================")

  const easBuild = build[options.profile];
  const { channel, env } = easBuild;

  await promisifiedExec('tsc app.config.ts').catch(e => {
    console.log("😡 tsc app.config.ts run with catch", e.message)
  });

  const getExpoConfig = require('../app.config.js').default;
  const expoConfig = getExpoConfig({ config: expo, env });

  // console.log(JSON.stringify({expoConfig, env}, null, 2));

  const channelUpdates = await promisifiedExec(`eas update:list --branch ${channel} --non-interactive --json --limit 1`);
  if (channelUpdates.stderr) {
    console.error(channelUpdates.stderr);
  }

  const groupID = JSON.parse(channelUpdates.stdout).currentPage[0].group;
  const updates = await promisifiedExec(`eas update:view ${groupID} --json`);
  if (updates.stderr) {
    console.error(updates.stderr);
  }
  await uploadAndroidSourceMap(expoConfig, JSON.parse(updates.stdout));
  await uploadIosSourceMap(expoConfig, JSON.parse(updates.stdout));

  await promisifiedExec('rm -rf app.config.js');

  console.info("\n====================💋 END UPLOAD SOURCE MAPS TO SENTRY 💋====================")
});

program.parse();

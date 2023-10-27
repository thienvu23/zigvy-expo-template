// Override Console
let consoleHolder = {...console};

const IGNORE_LOGS = [
      "matchMedia implementation is not provided.",
     ];

function overrideConsole(isDev) {
  if (isDev) {
    const handle = (key) => (...args) => {
      const m = args[0];
      if (IGNORE_LOGS.every((msg) => !`${m}`.includes(msg))) {
        consoleHolder[key](...args);
      }
    }

    console['log'] = handle('log');
    console['warn'] = handle('warn');
  }
}

overrideConsole(__DEV__);

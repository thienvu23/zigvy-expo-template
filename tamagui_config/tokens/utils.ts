export function addFixObjKeys<A extends {[key: string]: any}, B extends string>(
  obj: A,
  {postfix, prefix}: {postfix?: string; prefix?: string},
): {
  [Key in `${keyof A extends string ? keyof A : never}${B}`]: string;
} {
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [
      `${prefix ?? ''}${k}${postfix ?? ''}`,
      v,
    ]),
  ) as any;
}

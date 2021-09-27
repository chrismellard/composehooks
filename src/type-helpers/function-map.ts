// Type representing a map of functions.
export type FunctionMap = {
  [key: string]: (...args: any) => any
}

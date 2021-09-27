export type SharedProperties<T, U> = Pick<T & U, keyof T & keyof U>;

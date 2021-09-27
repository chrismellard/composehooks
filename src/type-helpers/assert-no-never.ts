type AssertNoNeverFields<T, E> = 1 extends {
    [K in keyof T]: T[K] extends never ? 1 : 0
  }[keyof T]
  ? E
  : {}

// Assert error type E if T or any of T's fields are never.
export type AssertNoNever<T, E> = T extends never ? E : AssertNoNeverFields<T, E>;
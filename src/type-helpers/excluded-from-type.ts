import {SharedProperties} from "./shared-properties";

// Exclude from T those fields that are assignable to U.
export type ExcludedFromType<T, U> = Pick<T, Exclude<keyof T, keyof SharedProperties<T, U>>>;

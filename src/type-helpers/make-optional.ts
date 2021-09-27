import {ExcludedFromType} from "./excluded-from-type";

// Make fields optional on T that are assignable from U.
export type MakeOptional<T, U> = ExcludedFromType<T, U> & Partial<T>;

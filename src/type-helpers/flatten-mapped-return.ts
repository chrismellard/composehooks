import {FunctionMap} from './function-map';
import {UnionToIntersection} from "./union-to-intersection";

type ValuesOf<T> = T[keyof T];
type ObjectValuesOf<T> = Exclude<Extract<ValuesOf<T>, object>, Array<any> | void>;

type MappedReturn<T extends FunctionMap> = {
  [K in keyof T]: ReturnType<T[K]>
}

// Flatten the fields of a returned type from a function map to a single type.
export type FlattenMappedReturn<T extends FunctionMap> = UnionToIntersection<ObjectValuesOf<MappedReturn<T>>>;

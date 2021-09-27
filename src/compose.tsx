import {FC} from "react";
import {FunctionMap} from "./type-helpers/function-map";
import {MakeOptional} from "./type-helpers/make-optional";
import {FlattenMappedReturn} from "./type-helpers/flatten-mapped-return";
import {AssertNoNever} from "./type-helpers/assert-no-never";
import {SharedProperties} from "./type-helpers/shared-properties";

// Props type with optional props based on the return types from the specified map of hooks.
export type OptionalHookProps<T, U extends FunctionMap> = MakeOptional<T, FlattenMappedReturn<U>>;

const composeHooks = <T extends FunctionMap, U>(
  Component: FC<U>,
  hooks: T & AssertNoNever<SharedProperties<FlattenMappedReturn<T>, U>, 'incompatible hook return values detected'>
): FC<OptionalHookProps<U, T>> => {
    if (!Component) {
        throw new Error('Component must be provided to compose');
    }

    if (!hooks) {
        return Component as FC<OptionalHookProps<U, T>>;
    }

    return (props: OptionalHookProps<U, T>) => {
        // Flatten values from all hooks to a single object
        const hookProps = Object.entries(hooks).reduce((acc: {[key: string]: FlattenMappedReturn<T> }, [hookKey, hook]) => {
            let hookValue = (hook as any)();

            Object.entries(hookValue).forEach(([key, value]) => {
                console.log(typeof value);
                // const duplicate = acc[key] ? value : props[key];
                //
                // if (typeof duplicate !== 'undefined') {
                //     console.warn(`prop '${key}' exists, overriding with value: '${duplicate}'`);
                // }
                (acc[key] as any) = value;
            });

            return acc;
        }, {});

        // Safe to cast props to U, as we can be sure hookProps has provided any of the non-optional fields.
        return <Component { ...hookProps } {...props as U} />
    };
};

export default composeHooks;

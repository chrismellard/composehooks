import {FC} from "react";

export interface HooksInterface<T1, T2> {
    [key: string]: () => T1 & T2
}

const composeHooks = <T1, T2>(hooks: HooksInterface<T1, T2>) => (Component: FC<T1 & T2>) => {
    if (!Component) {
        throw new Error('Component must be provided to compose');
    }

    if (!hooks) {
        return Component;
    }

    return (props: any) => {
        // const hooksObject = typeof hooks === 'function' ? hooks(props) : hooks;
        const hooksObject = hooks;

        // Flatten values from all hooks to a single object
        const hooksProps = Object.entries(hooksObject).reduce((acc: {[key: string]: T1 | T2 }, [hookKey, hook]) => {
            let hookValue = hook();

            // if (Array.isArray(hookValue) || typeof hookValue !== 'object') {
            //     hookValue = { [hookKey]: hookValue };
            // }

            Object.entries(hookValue).forEach(([key, value]) => {
                // const duplicate = acc[key] ? value : props[key];
                //
                // if (typeof duplicate !== 'undefined') {
                //     console.warn(`prop '${key}' exists, overriding with value: '${duplicate}'`);
                // }
                acc[key] = value;
            });

            return acc;
        }, {});

        return <Component {...hooksProps} {...props} />;
    };
};

export default composeHooks;

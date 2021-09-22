import {ReactElement} from "react";

const api = {
    clearNotification: console.log
};

interface DismissProps {
    render: (id: (id: number) => void) => ReactElement;
}

const Dismiss = (props: DismissProps): ReactElement => {
    const dismiss = (id: number) => {
        api.clearNotification(id);
    };

    return props.render(dismiss);
};

Dismiss.defaultProps = {
    render: () => {}
};

export default Dismiss;

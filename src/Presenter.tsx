import {useState, FC} from "react";
import composeHooks from "./compose";

export interface FirstNameProps {
    firstName?: string
}

export interface LastNameProps {
    lastName?: string
}

export const useFirstName: () => FirstNameProps = () => {
    const [firstName, setName] = useState('default first name');
    return {firstName};
};

export const useLastName: () => LastNameProps = () => {
    const [lastName, setName] = useState('default last name');
    return {lastName};
};

// Other props (in this case `icon`) can be passed in separately
const FormPresenter: FC<FirstNameProps & LastNameProps> = ({firstName, lastName}) => (
    <div className="App">
        <h1>Hello, {firstName}!</h1>
        <h1>Hello, {lastName}!</h1>
    </div>
);

const t : FC = composeHooks({useFirstName, useLastName})(FormPresenter);

export default t;

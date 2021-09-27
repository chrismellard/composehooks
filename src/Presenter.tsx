import {useState, FC} from "react";
import composeHooks from "./compose";

export const useFirstName = () => {
    const [firstName, setName] = useState('default first name');
    return {firstName};
};

export const useLastName = () => {
  const [lastName, setName] = useState('default last name');
    return {lastName};
};

export interface FormPresenterProps {
  firstName: string,
  middleName: string,
  lastName: string,
}

// Other props (in this case `icon`) can be passed in separately
const FormPresenter: FC<FormPresenterProps> = ({firstName, middleName, lastName}) => (
    <div className="App">
      <h1>Hello, {firstName}, {middleName}, {lastName}!</h1>
    </div>
);

export default composeHooks(FormPresenter, {useFirstName, useLastName});

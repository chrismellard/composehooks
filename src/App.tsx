import React, {useState} from 'react';
import './App.css';
import Dismiss from './dismiss';
import MyButton from './MyButton';
import Presenter, {FirstNameProps, useFirstName} from './Presenter';


function App() {
    const useForm = (): FirstNameProps => {
        const [firstName, setName] = useState('');
        return {firstName};
    };
  return (
      <div className="App">
        <Dismiss
            render={(dismiss) => (
                <MyButton onClickHandler={() => dismiss(1)}>Bob</MyButton>
            )}
        />
          <Presenter firstName='asd' lastName='bob'/>
      </div>
  );
};

export default App;

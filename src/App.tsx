import React, {useState} from 'react';
import './App.css';
import Dismiss from './dismiss';
import MyButton from './MyButton';
import Presenter from './Presenter';


function App() {
  return (
      <div className="App">
        <Dismiss
            render={(dismiss) => (
                <MyButton onClickHandler={() => dismiss(1)}>Bob</MyButton>
            )}
        />
          <Presenter middleName='actual middle name' />
      </div>
  );
}

export default App;

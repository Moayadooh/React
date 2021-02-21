import { DatePicker, Switch, Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { useState } from 'react';

function App() {

  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  const [disabled, setDisabled] = useState(true);
  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <div className="App">
      <div><DatePicker /></div>
      <div><Switch disabled={disabled} defaultChecked onChange={onChange} /></div>
      <div><Button type="primary" onClick={toggle}>
        Toggle disabled
      </Button></div>
    </div>
  );
}

export default App;
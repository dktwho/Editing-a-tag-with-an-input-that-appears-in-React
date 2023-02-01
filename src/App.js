import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('text')
  const [isEdit, setIsEdit] = useState(false)

  let elem;
  if(!isEdit) {
    elem = <span onClick={() => setIsEdit(true)}>{value}</span>
  } else {
    elem = <input type="text" onChange={(e) => setValue(e.target.value)} value={value} onBlur={() => setIsEdit(false)} />
  }
  return (
    <div className="App">
      <span >{elem}</span>
    </div>
  );
}

export default App;

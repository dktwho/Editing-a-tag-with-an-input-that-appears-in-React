import React from 'react'
import { useState } from 'react'

const App2 = () => {
  const [value, setValue] = useState('text')
  const [isEdit, setIsEdit] = useState(false)

  let elem;
  if(!isEdit) {
    elem = <span>{value}<button onClick={() => setIsEdit(true)}>edit</button></span>
  } else {
    elem = <><input value={value} onChange={(e) => setValue(e.target.value)}/><button onClick={() => setIsEdit(false)}>save</button></>
  }
  return (
    <div className='App'>
      <span>{elem}</span>
    </div>
  )
}

export default App2

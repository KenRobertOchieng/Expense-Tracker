import React, {useState} from 'react'
import Table from './Table.jsx'
import Forms from './Forms.jsx'
function App() {
  const[theeInputs,settheeInputs]=useState([])
   const [searchInputs,setsearchInputs]=useState('')
  return (
    <>
    <div className='my-container'>
    <div className="text">
        <h1>Expense Tracker</h1>
        <p>You can enter your expense just down below</p>
        </div>
        <Forms theeInputs={theeInputs}
        settheeInputs={settheeInputs}
        />
        <Table theeInputs={theeInputs} settheeInputs={settheeInputs} searchInputs={searchInputs} setsearchInputs={setsearchInputs} />
    </div>
    </>

  )
}

export default App

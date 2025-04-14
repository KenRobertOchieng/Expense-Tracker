import React, {useState} from 'react'
import SearchBar from "./SearchBar"
function Table({theeInputs,searchInputs,setsearchInputs,settheeInputs}){

            const mySearch=theeInputs.filter(theeInput=>(
                theeInput.name.toLowerCase().startsWith(searchInputs.toLowerCase())
            ))
    return(
    <div className="my-table">
        <h1 style={{textDecoration:'underline'}}>My Table</h1>
        <SearchBar searchInputs={searchInputs} setsearchInputs={setsearchInputs} theeInputs={theeInputs} settheeInputs={settheeInputs}/>

        <table>
            <thead>
            <tr>
                <th>Expenses</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            {mySearch.map((theeInput)=>(
            <tr key={theeInput.id}>

                <td>{theeInput.name}</td>
                <td>{theeInput.description}</td>
                <td>{theeInput.category}</td>
                <td>{theeInput.amount}</td>
                <td>{theeInput.date}</td>
            </tr>
            ))}

            </tbody>

            </table>
    </div>
    )
}
export default Table
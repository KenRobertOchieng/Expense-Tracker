import React, {useState} from 'react'
function Forms({theeInputs,settheeInputs}){
    const [myInput1,setmyInput1]=useState('')        
    const [myInput2,setmyInput2]=useState('')
    const [myInput3,setmyInput3]=useState('')
    const [myInput4,setmyInput4]=useState('')
    const [myInput5,setmyInput5]=useState('')

    
    const myHandleClick=(event)=>{
        event.preventDefault()
        if(myInput1==='' || myInput2==='' || myInput3==='' || myInput4==='' || myInput5===''){
            alert('Ooops...check in if you have field all the input fields.Thank you👍')
            return;
        }
        settheeInputs([...theeInputs,{id:Math.floor(Math.random()*1000),name:myInput1,description:myInput2,category:myInput3,amount:myInput4,date:myInput5}])
        setmyInput1('')
        setmyInput2('')
        setmyInput3('')
        setmyInput4('')
        setmyInput5('')
    }

    const handleInputChange1=(event)=>{
        setmyInput1(event.target.value)

    }
    const handleInputChange2=(event)=>{
        setmyInput2(event.target.value)

    }
    const handleInputChange3=(event)=>{
        setmyInput3(event.target.value)

    }
    const handleInputChange4=(event)=>{
        setmyInput4(event.target.value)

    }
    const handleInputChange5=(event)=>{
        setmyInput5(event.target.value)

    }
    return(
        <>
        <form>
            <input type="text" onChange={handleInputChange1} value={myInput1} placeholder='Enter expense name'/>
            <input type="text" onChange={handleInputChange2} value={myInput2} placeholder='Enter expense description'/>
            <input type="text" onChange={handleInputChange3} value={myInput3} placeholder='Enter expense category'/>
            <input type="number" onChange={handleInputChange4} value={myInput4}  placeholder='Enter amount'/>
            <input type="date" onChange={handleInputChange5} value={myInput5}/>
            <button onClick={myHandleClick} style={{cursor:'pointer'}}>Submit</button>
        </form>
        </>
    )
}
export default Forms
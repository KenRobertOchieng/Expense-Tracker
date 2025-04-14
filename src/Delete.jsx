function Delete({searchInputs,theeInputs,settheeInputs}){

    function myClick(){
        const deletedSearch=theeInputs.find((item)=>(
            item.name.toLowerCase().startsWith(searchInputs.toLowerCase())
        ))

        if (deletedSearch) {
            const updatedData =theeInputs.filter((item) => item.id !==deletedSearch.id);
            settheeInputs(updatedData);
          }  else if(searchInputs===''){
            alert('Ooops...your input filed is empty')
          }
           else {
            alert('Oops...no matching result👎.Thank you');
          } 
    }
    return(
        <div className="my-btn">
            <button onClick={myClick}>Delete</button>
        </div>
    )
}
export default Delete
import Delete from "./Delete"
function SearchBar({searchInputs,setsearchInputs,theeInputs,settheeInputs}){

        function handletheeInputChange(e){
            setsearchInputs(e.target.value)
        }

        return(
        <div className='my-searchbar'>
                 <input onChange={handletheeInputChange} type="text" placeholder="search for expense" value={searchInputs}/>
                 <Delete searchInputs={searchInputs} theeInputs={theeInputs} settheeInputs={settheeInputs}/>
        </div>
    )
}
export default  SearchBar
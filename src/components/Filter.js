function Filter(props){
   let setCategory=props.setCategory
   let category=props.category
    function filterHandler(e){
        setCategory(e.target.textContent);
    }
    return (
        <div className="w-full flex justify-evenly text-white">
            <button onClick={filterHandler} className={`rounded-md px-3 py-1  sm:px-6 sm:py-2  bg-red-500 hover:bg-red-700 transition-all duration-200
                ${category==='To do' ? " bg-red-800" : "" }
            `}
            >To do</button>
            <button onClick={filterHandler} className={`rounded-md px-3 py-1  sm:px-6 sm:py-2  bg-red-500 hover:bg-red-700 transition-all duration-200
                ${category==='Completed' ? " bg-red-800" : "" }
            `}>Completed</button>
        </div>
    );
}
export default Filter
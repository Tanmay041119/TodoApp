import { IoCheckmark } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

function Card({ task, category, index, tasks, setTasks,completed,setCompleted }) {

  function deleteHandler(index) {
    let reducedarr = [...tasks];
    reducedarr.splice(index, 1);
    setTasks(reducedarr);
    if(category==='To do')
    localStorage.setItem('todolist', JSON.stringify(reducedarr));
  else{
    localStorage.setItem('completed', JSON.stringify(reducedarr));
  }
  }
  function clickHandler(index){
   let filteredItem={
    ...tasks[index],
   }
   let updatedCompletedarr=[...completed];
   updatedCompletedarr.push(filteredItem)
   setCompleted(updatedCompletedarr)
   let reducedarr= [...tasks];
   reducedarr.splice(index,1);
   setTasks(reducedarr)
   localStorage.setItem('todolist', JSON.stringify(reducedarr));
   localStorage.setItem('completed',JSON.stringify(updatedCompletedarr))
  }

  return (
    <div className="flex items-center justify-between space-x-2 w-[80%] p-3 min-h-[150px] overflow-y-auto mx-auto my-4 shadow-md bg-bgitem rounded-md px-[25px] py-[10px]">
    <div className="flex flex-col">
    <p className="text-[20px] sm:text-[30px] text-white">{task.title}</p>
    <p className="text-[14px] text-[rgb(161,161,161)] mt-[8px]">{task.desc}</p>
    </div>
      
      <div className="flex space-x-2">
        {category === 'To do' ? (
          <>
            <button className=" px-2 py-1 sm:px-4 sm:py-3 rounded bg-green-500 text-white" onClick={()=>clickHandler(index)}>
              <IoCheckmark />
            </button>
            <button className=" px-2 py-1 sm:px-4 sm:py-3 rounded bg-red-500 text-white" onClick={() => deleteHandler(index)}>
              <MdDelete />
            </button>
          </>
        ) : (
          <button className="px-2 py-1 sm:px-4 sm:py-3 rounded bg-red-500 text-white" onClick={() => deleteHandler(index)}>
            <MdDelete />
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;

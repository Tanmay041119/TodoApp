import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Filter from "./components/Filter";

function App() {
  let time=new Date().toLocaleTimeString();
  const [title, setTitle] = useState('');
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [category, setCategory] = useState('To do');
  const [description, setDescription] = useState('');
  const [ctime,setCtime]=useState(time);

  function inputHandler(e) {
    setTitle(e.target.value);
  }

  function descHandler(e) {
    setDescription(e.target.value);
  }
  function updateTime(){
    time=new Date().toLocaleTimeString();
    setCtime(time);
  }
  setInterval(updateTime,1000)
  function changeHandler(e) {
    e.preventDefault();
    if (title !== '' && description !== '') {
      let newTodo = {
        title: title,
        desc: description,
      };
      let updatedTodo = [...tasks];
      updatedTodo.push(newTodo);
      setTasks(updatedTodo);
      setTitle('');
      setDescription('');
      localStorage.setItem('todolist', JSON.stringify(updatedTodo));
    } else {
      if (title === '' && description === '') alert('Please Enter the title and description');
      else if (title === '') alert('Please Enter the title');
      else alert('Please Enter the description');
    }
  }

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    if (savedTodo) {
      setTasks(savedTodo);
    }
  }, []);

  useEffect(() => {
    let CompletedTodo = JSON.parse(localStorage.getItem('completed'));
    if (CompletedTodo) {
      setCompleted(CompletedTodo);
    }
  }, []);

  return (
    <div className="w-full min-h-[100vh] overflow-y-auto bg-bgback flex flex-col items-center font-sans relative">
      <h1 className="text-center font-extrabold text-[35px] text-white mb-10 p-3">My Todo</h1>
      <div className="bg-bgmid flex flex-col w-8/12 max-w-[1200px] h-[max-content] ">
        <form onSubmit={changeHandler} className="flex flex-col md:flex-row p-7 justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-col w-full md:w-[45%]">
            <p className="text-white font-semibold text-[20px] mb-3">Title:</p>
            <input type="text" placeholder="Enter the title" onChange={inputHandler} value={title} className="w-full h-8 flex items-center rounded-sm p-1" />
          </div>
          <div className="flex flex-col w-full md:w-[45%]">
            <p className="text-white font-semibold text-[20px] mb-3">Description:</p>
            <input type="text" placeholder="Enter the description" onChange={descHandler} value={description} className="w-full h-8 flex items-center rounded-sm p-1"></input>
          </div>
          <button type="submit" className="rounded-md px-4 py-2 bg-red-500 hover:bg-red-700 transition-all duration-200 md:self-end text-white">Add</button>
        </form>
        <hr className="m-6 border-slate-400"></hr>
        <Filter category={category} setCategory={setCategory} />
        <Cards tasks={tasks} setTasks={setTasks} completed={completed} setCompleted={setCompleted} category={category} />
      </div>
      <p className="text-white fixed bottom-2 right-5 sm:bottom-5 sm:right-10 text-[12px] sm:text-[16px]">Current Time :  {ctime}</p>
    </div>
  );
}

export default App;

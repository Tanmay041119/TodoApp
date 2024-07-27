import Card from "./Card";

function Cards({ tasks, setTasks, completed, setCompleted, category }) {
  return (
    <div>
      {
        category === 'To do' ? (
          
          tasks.length>0 ? ( tasks.map((task, index) => (
            <Card
              key={index}
              task={task}
              category={category}
              index={index}
              tasks={tasks}
              setTasks={setTasks}
              completed={completed}
              setCompleted={setCompleted}
            />
          ))) : (<p className=" text-center text-white font-semibold text-[20px] sm:text-[30px] mt-10 mb-10">No tasks available</p>)
         
        ) : (
          completed.length > 0 ? (completed.map((task, index) => (
            <Card
              key={index}
              task={task}
              category={category}
              index={index}
              tasks={completed}  
              setTasks={setCompleted}
              completed={completed}
              setCompleted={setCompleted}
            />
          )) ): (<p className=" text-center text-white font-semibold text-[20px] sm:text-[30px] mt-10 mb-10">No Completed Tasks</p>)
          
        )
       }
    </div>
  );
}

export default Cards;

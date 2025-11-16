import TodoList from "./TodoList.jsx";
import {useState, useRef, useEffect} from "react";

const Nav = () => {
    const [todos, setTodos] = useState(()=>{
        const storage = localStorage.getItem('todos');
        return storage ? JSON.parse(storage) : [];
    });
    const [filter, setFilter] = useState("All");
    const inputRef = useRef(null);

    const handleInput = () =>{
        setTodos([...todos, {
            id:todos.length + 1 , title: inputRef.current.value, completed: false
        }])
        inputRef.current.value = '';
    }
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos])

    const handleSubmit = (e) =>{
        e.preventDefault();
        handleInput();
    }

    const handleDelete = (id) =>{
        setTodos(todos.filter((todo)=> todo.id !== id))
    }
    const handleToggle = (id) =>{
        setTodos(todos.map(todo =>{
            return todo.id === id ? {...todo, completed: !todo.completed} : todo;
        }))
    }

        const filteredTodos = filter === 'All'
        ? todos
        : filter === 'Complete'
            ? todos.filter(todo => todo.completed === true)
            : todos.filter(todo => todo.completed === false)

  return (
      <div className="flex flex-col gap-5">
          <div className="flex gap-2" >
              <form onSubmit={handleSubmit} className="flex gap-2">
              <input type="text" required ref={inputRef} className="border border-zinc-500 bg-neutral-light p-2 rounded-sm w-lg placeholder:text-[14px]" placeholder="Enter Todo"/>
              <button className="rounded-sm bg-neutral-blue hover:bg-[#5850DD] text-white p-1 w-20" >ADD</button>
              </form>
              <div className="relative inline-block w-29 group">
                    <button type="button" className="bg-neutral-blue p-2.5  text-white rounded-md w-full text-left">
                        {filter}
                    </button>
                    <div className="w-29 scale-y-0 text-white rounded-b-md absolute  -translate-y-1 inset-shadow-zinc-300  group-hover:scale-y-100 group-focus-within:scale-y-100 origin-top gap-2 p-2 flex flex-col duration-200 bg-neutral-blue">
                        <button type="button" className="text-left hover:text-zinc-200" onClick={() => setFilter('All')}>All</button>
                        <button type="button" className="text-left hover:text-zinc-200" onClick={() => setFilter('Complete')}>Complete</button>
                        <button type="button" className="text-left hover:text-zinc-200" onClick={() => setFilter('Incomplete')}>Incomplete</button>
                    </div>
              </div>
          </div>
          <div className="">
              <TodoList title={filteredTodos} handleDelete={handleDelete} handleToggle={handleToggle}/>
          </div>
      </div>
  )
}
export default Nav;
import TodoList from "./TodoList.jsx";
import {useState, useRef, useEffect} from "react";

const Nav = () => {
    const [todos, setTodos] = useState(()=>{
        const storage = localStorage.getItem('todos');
        return storage ? JSON.parse(storage) : [];
    });
    const inputRef = useRef(null);

    const handleInput = () =>{
        setTodos([...todos, {
            id:todos.length + 1 , title: inputRef.current.value, completed: null
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
  return (
      <div className="flex flex-col gap-5">
          <div >
              <form onSubmit={handleSubmit} className="flex gap-2">
              <input type="text" required ref={inputRef} className="border border-zinc-500 bg-neutral-light p-1 rounded-sm w-lg" placeholder="Enter Todo"/>
              <button className="rounded-sm bg-neutral-blue hover:bg-[#5850DD] text-white p-1 w-20" >ADD</button>
              <button className="border">DROPDOWN</button>
              </form>
          </div>
          <div className="">
              <TodoList title={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
          </div>
      </div>
  )
}
export default Nav;
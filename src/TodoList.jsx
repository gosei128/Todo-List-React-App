import deleteLogo from './assets/trash-icon.svg';
const TodoList = ({title, handleDelete, handleToggle}) => {
   
    return (
        // wrapper of the list
        <div className="h-full flex flex-col gap-4">
            {title.map((todo)=>{
                return (
                    <div key={todo.id} className="flex justify-between p-4 rounded-lg bg-neutral-light border shadow-gray-200  shadow-lg border-zinc-400 animate-pop-in animate-pop-out">
                        <div className="flex items-center gap-2">
                        <input type="checkbox" className="size-7" checked={todo.completed || false}  onChange={() => handleToggle(todo.id)}  />
                            <p className={todo.completed ? "text-zinc-500 line-through" : ""}>{todo.title}</p> 
                        </div>
                        <div>
                             <button onClick={()=>{
                                handleDelete(todo.id)
                             }} ><img src={deleteLogo} alt="" /></button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};
export default TodoList;
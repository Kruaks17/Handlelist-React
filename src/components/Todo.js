import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {
    //Events

    //Fjerner elementer med button onClick={deleHandler}
    const deleteHandler =()=>{
        setTodos(todos.filter((el) => el.id !== todo.id)) 
    };
    // Viser fullførte i items med button onClick={completeHanlder}
    const completeHandler = () =>{
        setTodos(todos.map(item =>  {
          if (item.id === todo.id){
              return{
                  ...item, completed: !item.completed
              }
              
          }  
          return item;
        }));
    };

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" 
                width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" 
                stroke-line="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="12" r="9" />
                <path d="M9 12l2 2l4 -4" />
                </svg>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"> </i><svg xmlns="http://www.w3.org/2000/svg" 
                className="icon icon-tabler icon-tabler-trash" 
                width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" 
                stroke="#000000" fill="none" stroke-line="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
                </button>
        </div>
    );
};


export default Todo;
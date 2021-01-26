import React,{useState, useEffect} from 'react';
import './App.css';
//importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  
  // States
  const [inputText, setInputText] = useState("");
  const [todos,setTodos]= useState([]);
  const [status, setStatus]= useState ("alle");
  const [filteredTodos, setFilteredTodos]= useState([]);

  useEffect(()=>{
    getLocalTodos();
  },[]);
  //useEffect
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
}, [todos, status]);

//Funksjoner  
//Denne filtrer hvilke i listen som er fullført og ikke fullført 
const filterHandler = () => {
  switch(status) {
    case'completed':
      setFilteredTodos(todos.filter((todo) => todo.completed === true));
      break;
    case 'uncompleted': 
      setFilteredTodos(todos.filter((todo) => todo.completed === false));
      break;
    default: 
      setFilteredTodos(todos);
      break;
    }
};

  //------------------------------------------------------------------------------------
  // Lagrer arrays som blir lagt til i listen, og vil vise hvilken
  // value hvert item som blir addet. Som for eksempel om et item er true eller false.
  // -----------------------------------------------------------------------------------
  const saveLocalTodos = () =>{
      localStorage.setItem("todos",JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if(localStorage.getItem("todos" )===null){
      localStorage.getItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

return (
    <div className="App">
      <header>
        <h1>Handleliste</h1>
      </header>
      
      <Form inputText={inputText}
            todos={todos} 
            setTodos={setTodos} 
            setInputText={setInputText}
            setStatus={setStatus}
            />
      <TodoList setTodos={setTodos} 
                todos={todos} 
                filteredTodos={filteredTodos}
                 /> 
      
    </div>
  );
}

export default App;

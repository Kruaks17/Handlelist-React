import React, {useRef,useEffect} from "react";

//Henter inn data fra den andre componentene
const Form = ({setInputText, setTodos, todos, inputText, setStatus}) =>{
    const inputTextHandler = (e) =>{
        
        setInputText(e.target.value);

    };
    //Hindrer at side lastes in på nytt ved klikk av button
    //og gir array en id med et nummer opptil 1000 hver gang man 
    //adder til listen.
    const submitTodoHandler =(e)=> {
      e.preventDefault();
        setTodos([...todos,{text:inputText, completed: false,
        id: Math.random () * 1000}
        ]);
        setInputText("");
    };
    const statusHandler =(e)=>{
        setStatus(e.target.value);
    };

    const inputRef = useRef(null)

    //---------------------------------------------------
    //Fokuserer inn på inputfeltet ved in lasting av side
    //---------------------------------------------------
    useEffect(()=>{
        inputRef.current.focus()
    });
    // Elementene som synes på siden og 
    // gjøre dem mulige å bruke
    return (

       <form>
           <input value={inputText} 
                  onChange={inputTextHandler} 
                  type="text" 
                  className="todo-input"
                  setStatus={setStatus}
                  placeholder="Skriv her"
                  ref={inputRef}
                  />
            <button onClick={submitTodoHandler} 
                    className="todo-button" 
                    type="submit"><svg xmlns="http://www.w3.org/2000/svg" 
                    className="icon icon-tabler icon-tabler-square-plus" 
                    width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" 
                    stroke="#000000" fill="none" stroke-line="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                  </svg>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} 
                        name="todos" 
                        className="filter-todo">
                    
                    <option value="all">Alle</option>
                    <option value="completed">Fullført</option>
                    <option value="uncompleted">Ikke fullført</option>
                </select>
            </div>
       </form> 
    );
};

export default Form;

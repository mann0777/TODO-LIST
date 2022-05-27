import React, { useState } from "react";
import ToDoLists from "./ToDoLists";



const App = () =>{

const[inputList, setInputList] = useState("");
const [Items, setItems] = useState([]);

const itemEvent=(event)=> {
    setInputList(event.target.value);
};

const listofItems = ()=>{
    setItems((oldItems) =>{
        return[...oldItems, inputList];
    });
    setInputList("");

    
};

const deleteitems = (id) => {

    setItems((oldItems) => {
        return oldItems.filter((arrElem, index) =>{
        return index!== id;
    });
    });

};

    return(
        <>
        <div className = "main_div">
        <div className="center_div">
        <  br/>
        <h1>TODO List</h1>
        <br/>

        <input type= "text" placeholder = "Add a Item" onChange={itemEvent} value ={inputList}
        />
        <button onClick={listofItems}> + </button>

        <ol>

        {
            Items.map((itemval, index) =>{
              return <ToDoLists text ={itemval}
              key = {index}
              id = {index}
              onSelect ={deleteitems} />;
            })
        }

        </ol>




        </div>
        </div>
        


        </>
    );
}; 

export default App;
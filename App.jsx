import React, { useState } from "react";



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

    return(
        <>
        <div className = "main_div">
        <div className="center_div">
        <br/>
        <h1>TODO List</h1>
        <br/>

        <input type= "text" placeholder = "Add a Item" onChange={itemEvent} value ={inputList}
        />
        <button onClick={listofItems}> + </button>

        <ol>

        {
            Items.map((itemval) =>{
                return<li>{itemval}</li>;
            })
        }

        </ol>




        </div>
        </div>
        


        </>
    );
}; 

export default App;
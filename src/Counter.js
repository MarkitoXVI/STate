import { useState } from "react";

function Counter(){
    const [result, setResult] = useState(0);

function addOne(){
    console.log("Funkcija izsaukta");
    setResult(result + 1);
    console.log("x vērtība ir " + result);
}

function subtractOne() {
    setResult(result - 1);
  }

  

    return (
    <div>
        <button onClick={addOne}>+1</button>
        <button onClick={subtractOne}>-1</button>
        <h1>{result}</h1>
    </div>
    );
}

export default Counter;
import {useState,useEffect} from 'react'
import "../css/home.css"

export default function Home(){
  const [valor,setValor] = useState("")
  
  function add_input(number){
    setValor(valor+number)
  }
  
  function resultado(){
    setValor(eval(valor))
  }
  
  function clear_all_input(){
    setValor('')
  }
  
  function delete_one_number(){
    setValor(valor.substring(1))
  }
  
  return (
    <div className="container" >
		<div className="item">
		   <div className="input">
			  <input type="text" value={valor} disabled="disabled" onChange={e=>setValor(e.target.value)}/>
		   </div>
		   <div className="operation">
	      <div className="column" >
	          <button onClick={clear_all_input}>c</button>
	          <button onClick={()=>add_input("7")}>7</button>
	          <button onClick={()=>add_input("4")}>4</button>
	          <button onClick={()=>add_input("1")}>1</button>
	          <button onClick={()=>add_input("%")}>%</button>
	      </div>
	      <div className="column" >
        	<button onClick={()=>add_input("/")}>÷</button>
        	<button onClick={()=>add_input("8")}>8</button>
        	<button onClick={()=>add_input("5")}>5</button>
        	<button onClick={()=>add_input("2")}>2</button>
        	<button onClick={()=>add_input("0")}>0</button>
	      </div>
	      <div className="column" >
       	  <button onClick={()=>add_input("*")}>x</button>
	        <button onClick={()=>add_input("9")}>9</button>
	        <button onClick={()=>add_input("6")}>6</button>
	        <button onClick={()=>add_input("3")}>3</button>
	        <button onClick={()=>add_input(".")}>.</button>
	     </div>
	     	<div className="column" >
        	<button onClick={delete_one_number}>#</button>
	        <button onClick={()=>add_input("-")}>-</button>
        	<button onClick={()=>add_input("+")}>+</button>
	        <button id="eq" onClick={resultado}>=</button>
	      </div>
		 </div>
	</div>
</div>
  );
}
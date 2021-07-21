import React from "react";
import { evaluate } from 'mathjs'
import '../styles/Calculator.css'

function handleClick(e){
    var val = e.target.value;

    if(document.getElementById("display").innerHTML === "Err"){
        document.getElementById("display").innerHTML = "";
        document.getElementById("display").style.color = "black";
    }

    if(val === "clear"){
        document.getElementById("display").innerHTML = "";
        document.getElementById("display").style.color = "black";
    } else if(val === "="){
        try{
            var exp = document.getElementById("display").innerHTML;
            document.getElementById("display").innerHTML = evaluate(exp);
        } catch(e) {
            document.getElementById("display").innerHTML = "Err";
            document.getElementById("display").style.color = "red";
        }
    } else {
        document.getElementById("display").innerHTML += val;
    }
}


export default function Calculator() {
    return (
        <section id="calc">
            <h1 id="display"></h1>
            <div class="rows">
                <button className="short" onClick={handleClick} value="(">(</button>
                <button className="short" onClick={handleClick} value=")">)</button>
                <button className="short" onClick={handleClick} value="^">^</button>
                <button className="short" onClick={handleClick} value="clear">AC</button>
            </div>
            <div class="rows">
                <button className="short" onClick={handleClick} value="7">7</button>
                <button className="short" onClick={handleClick} value="8">8</button>
                <button className="short" onClick={handleClick} value="9">9</button>
                <button className="short" onClick={handleClick} value="/">/</button>
            </div>
            
            <div class="rows">
                <button className="short" onClick={handleClick} value="4">4</button>
                <button className="short" onClick={handleClick} value="5">5</button>
                <button className="short" onClick={handleClick} value="6">6</button>
                <button className="short" onClick={handleClick} value="*">*</button>
            </div>
            <div class="rows">
                <button className="short" onClick={handleClick} value="1">1</button>
                <button className="short" onClick={handleClick} value="2">2</button>
                <button className="short" onClick={handleClick} value="3">3</button>
                <button className="short" onClick={handleClick} value="-">-</button>
            </div>
            <div class="rows">
                <button className="short" onClick={handleClick} value="0">0</button>
                <button className="short" onClick={handleClick} value=".">.</button>
                <button id="equals" className="short" onClick={handleClick} value="=">=</button>
                <button className="short" onClick={handleClick} value="+">+</button>
            </div>
        </section>
    );
}

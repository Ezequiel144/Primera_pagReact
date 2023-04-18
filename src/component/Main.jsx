import React from "react";
import "../stylesheets/Main.css";
import {Contador} from "./Contador.jsx";
import {Boton} from "./Boton";
import { useState } from "react";

export function Main(prop){

    const [numClic,setNumClic] = useState(0);

    function driveClic(){
        setNumClic(numClic + 1);
    }

    function driveReini(){
        setNumClic(0);
    }
    return(
        <main>
            <div className="contentMain ">
                <section className="sec1">    
                    <div className="card">
                        <img src={require(`../img/${prop.img}.jpg`)} className="cardimg" alt="img"/>
                        <div className="textContent">
                            <h1 className="title">{prop.name}</h1>
                            <p className="text">
                                {prop.text}
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={require(`../img/2.jpg`)} className="cardimg" alt="img"/>
                        <div className="textContent">
                            <h1 className="title">Title</h1>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={require("../img/3.jpg")} className="cardimg" alt="img"/>
                        <div className="textContent">
                            <h1 className="title">Title</h1>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                    </div>
                </section>
                <section className="sec2">
                    <Contador cont={numClic}/>
                    <Boton
                        text="Clic"
                        condition={true}
                        functionClick={driveClic}
                        />
                    <div>
                        <Boton
                            text="Reiniciar"
                            condition={false}
                            functionClick={driveReini}
                        />
                    </div>
                </section>
            </div>
        </main>
    )
}
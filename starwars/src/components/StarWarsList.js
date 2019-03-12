import React from "react";
import "./StarWars.css"

export default function StarWarsList(props){
    return (
        <div>
           {props.SWList.map(charc =>
            <div className ='charcCard'> 
                <h2 > {charc.name}</h2>
                
                <div className = 'charDescription'> 
                <p> Born on:{charc.birth_year}</p>
                <p> Eye Color: {charc.eye_color}</p>
                </div>
            </div>
           )}
        </div>
    )
}
import React from "react"



export default function Card(props){
    return(
        
            <div className=" cardBackground " className={props.background}>
                <img className="card-img" src={props.img} />
                <h3 className="card-title">{props.title}</h3>
                <p className="card-subtitle">{props.subtitle}</p>
                <button className="card-btn">View All</button>
            </div>
        
    )
}
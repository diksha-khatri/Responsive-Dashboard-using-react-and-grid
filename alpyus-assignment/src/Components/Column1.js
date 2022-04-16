import React from "react"
import Card from "./Card"
import CardData from "./Card-data"
import HeroCard from "./Hero-card"
import TramMemebers from "./TeamMembers"
import teamMemberData from "./teamMemberData"
import TeamMemberTitle from "./TeamMemberTitle"
export default function Column1(){
    const cardElements = CardData.map( data => {
        return <Card key={data.id} img ={data.img} title={data.title} subtitle={data.subtitle} background={data.background}/>
    })
    const teammember = teamMemberData.map( data => {
        return <TramMemebers key={data.id} img={data.img} name={data.name} designation={data.designation} />
    })
    return(
        <div className="column1">
            <div className=" card">
                {cardElements}
            </div>
            <HeroCard />
            
            <div className="teamMember">
                <TeamMemberTitle />
                {teammember}
            </div>
        </div>
    )
}
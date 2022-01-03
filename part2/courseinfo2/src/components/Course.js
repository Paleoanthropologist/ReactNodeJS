import React from "react";

const Header = (props)=>{
    return(
        <>
        <h2>{props.name}</h2>
        </>
    )
}

const Content = ({parts})=>{

    return(
        <>
        <ul>
        {parts.map(part=>
            <Part key={part.id} name={part.name} exercises={part.exercises}/>
            )}
        <li>total of {parts.reduce((p,c)=>p+c.exercises,0)} exercises</li>
        </ul>
        </>
    )
}

const Part = ({name,exercises})=>{
    return(
        <>
            <li>{name} {exercises}</li>
        </>
    )
}

const Course = ({course})=>{
    return(
        <>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
        </>
    )
}

export default Course;
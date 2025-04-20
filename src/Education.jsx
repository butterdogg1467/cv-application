import { useState } from 'react'
import './App.css'

export function Education({submitted}) { 
    const [school, setSchool] = useState('')
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    function handleChange(e) {
        if (e.target.name === 'school') {
            setSchool(e.target.value)
        } else if (e.target.name === 'title') {
            setTitle(e.target.value)
        } else {
            setDate(e.target.value)
        }
    }

    if (submitted === false) {

        return (
            <> 
                <div className="education">
                <h1>Education</h1>
                <label htmlFor="school">Name of School: </label>
                <input type="text" name="school" id="school" onChange={handleChange} value={school}/>

                <label htmlFor="title">Title of Study: </label>
                <input type="text" name="title" id="title" onChange={handleChange} value={title}/>

                <label htmlFor="date">Date of Study: </label>
                <input type="date" name="date" id="date" onChange={handleChange} value={date}/>
                </div>
            </>
        )

    } else {
        
        return (
            <>
                <div className="generalinfo">
                <h1>Education</h1>
                
                <h3>Name Of School: {school}</h3>
    
                <h3>Title Of Study: {title}</h3>
    
                <h3>Date Of Study: {date}</h3>
                </div>  
            </>
        )

    }
}
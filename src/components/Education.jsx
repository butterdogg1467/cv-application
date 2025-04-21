import { useState } from 'react'
import '../styles/Styles.css'


export function Education({submitted}) { 
    const [school, setSchool] = useState('')
    const [title, setTitle] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [stillStudying, setstillStudying] = useState(false)

    function handleChange(e) {
        if (e.target.name === 'school') {
            setSchool(e.target.value)
        } else if (e.target.name === 'title') {
            setTitle(e.target.value)
        } else if (e.target.name === 'start'){
            setStart(e.target.value)
        } else {
            setEnd(e.target.value)
        }
    }

    function handleClick() {
        if (!stillStudying) {
            setstillStudying(true)
            setEnd("Currently Attending School")
        } else {
            setstillStudying(false)
            setEnd("")
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

                <label htmlFor="start">Start of Study: </label>
                <input type="date" name="start" id="start" onChange={handleChange} value={start}/>

                <label htmlFor="end">End of Study: </label>
                <input type="date" name="end" id="end" onChange={handleChange} value={end} disabled={stillStudying}/>

                <div id='stillstudyingdiv'>
                    <label htmlFor="stillstudying">Still Studying: </label>
                    <input type="checkbox" onClick={handleClick} checked={stillStudying}/>
                </div>

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
    
                <h3>Start Of Study: {start}</h3>

                <h3>End Of Study: {end}</h3>

                </div>  
            </>
        )

    }
}
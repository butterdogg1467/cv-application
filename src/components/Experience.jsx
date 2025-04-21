import { useState } from 'react'
import '../styles/Styles.css'

export function Experience({submitted}) {
    const [company, setCompany] = useState('')
    const [postitle, setPosTitle] = useState('')
    const [responsibilities, setResponsibilities] = useState('')
    const [startOfEmploy, setStartOfEmploy] = useState('')
    const [endOfEmploy, setEndOfEmploy] = useState('')
    const [stillEmployed, setStillEmployed] = useState(false)

    function handleChange(e) {
        if (e.target.name === 'compname') {
            setCompany(e.target.value)
        } else if (e.target.name === 'postitle') {
            setPosTitle(e.target.value)
        } else if (e.target.name === 'responsibilities') {
            setResponsibilities(e.target.value)
        } else if (e.target.name === 'startofeemploy') {
            setStartOfEmploy(e.target.value)
        } else {
            setEndOfEmploy(e.target.value)
        }
    }

    function handleClick() {
        if (!stillEmployed) {
            setStillEmployed(true)
            setEndOfEmploy("Currently Employed at Company")
        } else {
            setStillEmployed(false)
            setEndOfEmploy("")
        }
    }

    if (submitted === false) {

        return (
            <> 
                <div className="experience">
                    <h1>Experience</h1>
                    <label htmlFor="compname">Name of Company: </label>
                    <input type="text" name="compname" id="compname" value={company} onChange={handleChange}/>
    
                    <label htmlFor="postitle">Position Title: </label>
                    <input type="text" name="postitle" id="postitle" value={postitle} onChange={handleChange}/>
    
                    <label htmlFor="responsibilities">Job Responsibilities: </label>
                    <input type="text" name="responsibilities" id="responsibilities" value={responsibilities} onChange={handleChange}/>
    
                    <label htmlFor="startofeemploy">Start Date of Employement: </label>
                    <input type="date" name="startofeemploy" id="startofeemploy" value={startOfEmploy} onChange={handleChange}/>

                    <label htmlFor="endofeemploy">End Date of Employement: </label>
                    <input type="date" name="endofeemploy" id="endofeemploy" value={endOfEmploy} onChange={handleChange} disabled={stillEmployed}/>

                    <div id='stillemployeddiv'>
                        <label htmlFor="stillemployed">Still Employed at Company: </label>
                        <input type="checkbox" onClick={handleClick} checked={stillEmployed}/>
                    </div>  

                </div>
            </>
        )

    } else {

        return (
            <> 
                <div className="experience">
                    <h1>Experience</h1>

                    <h3>Name of Company: {company}</h3>

                    <h3>Position Title: {postitle}</h3>

                    <h3>Job Responsibilities: {responsibilities}</h3>

                    <h3>Start Date of Employement: {startOfEmploy}</h3>

                    <h3>End Date of Employement: {endOfEmploy}</h3>
                </div>
            </>
        )

    }
}
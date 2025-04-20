import { useState } from 'react'
import './App.css'

export function Experience({submitted}) {
    const [company, setCompany] = useState('')
    const [postitle, setPosTitle] = useState('')
    const [responsibilities, setResponsibilities] = useState('')
    const [dateofeemploy, setDateOfEmploy] = useState('')

    function handleChange(e) {
        if (e.target.name === 'compname') {
            setCompany(e.target.value)
        } else if (e.target.name === 'postitle') {
            setPosTitle(e.target.value)
        } else if (e.target.name === 'responsibilities') {
            setResponsibilities(e.target.value)
        } else {
            setDateOfEmploy(e.target.value)
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
    
                    <label htmlFor="dateofeemploy">Date of Employement: </label>
                    <input type="date" name="dateofeemploy" id="dateofeemploy" value={dateofeemploy} onChange={handleChange}/>
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

                    <h3>Date of Employement: {dateofeemploy}</h3>
                </div>
            </>
        )

    }
}
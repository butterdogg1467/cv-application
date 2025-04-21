import { useState } from 'react'
import '../styles/Styles.css'


export function General({submitted}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [about, setAbout] = useState('')

    function handleChange(e) {
        if (e.target.name === 'name') {
            setName(e.target.value)
        } else if (e.target.name === 'email') {
            setEmail(e.target.value)
        } else if (e.target.name === 'phone') {
            setPhone(e.target.value)
        } else {
            setAbout(e.target.value)
        }
    }

    if (submitted === false) {

        return (
            <>
                <div className="generalinfo">
                <h1>General Information</h1>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" onChange={handleChange} value={name}/>
    
                <label htmlFor="email">Email Address: </label>
                <input type="email" name="email" id="email" onChange={handleChange} value={email}/>
    
                <label htmlFor="phone">Phone Number: </label>
                <input type='tel' name="phone" id="phone" onChange={handleChange} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={phone}/>
                
                <label htmlFor="about">About Me : </label>
                <textarea name="about" id="about" onChange={handleChange} value={about}/>
                </div>  
            </>
        )

    } else {
        
        return (
            <>
                <div className="generalinfo">
                <h1>General Information</h1>
                
                <h3>Name: {name}</h3>
    
                <h3>Email: {email}</h3>
    
                <h3>Phone Number: {phone}</h3>

                <h3>About Me: {about}</h3>
                </div>  
            </>
        )

    }
}
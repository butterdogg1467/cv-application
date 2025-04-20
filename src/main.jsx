import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './nav.jsx'
import { General } from './General.jsx'
import { Education } from './Education.jsx'
import { Experience } from './Experience.jsx'
import  {useState} from 'react'

const root = createRoot(document.getElementById('root'))

function Buttons() {
  const [editOrSubmit, setEditOrSubmit] = useState('Edit')

    function switchEditOrSubmit(e) {
      if (editOrSubmit === "Submit") {
        setEditOrSubmit("Edit")
        makeRoot(false)
      } else {
        setEditOrSubmit("Submit")
        makeRoot(true)
      }
    }

    return (
      <div className="buttonscontainer">
        <button id="editOrSubmit" onClick={switchEditOrSubmit}>{editOrSubmit}</button>
      </div>
    )
}


root.render(
  <StrictMode>
    <Nav />
    <General submitted={false}/>
    <Education submitted={false}/>
    <Experience submitted={false}/>
    <Buttons />
  </StrictMode>
)

function makeRoot(submitPressed) {
  if (submitPressed === true) {
    root.render(
      <StrictMode>
        <Nav />
        <General submitted={true}/>
        <Education submitted={true}/>
        <Experience submitted={true}/>
        <Buttons />
      </StrictMode>
    )
  } else {
    root.render(
      <StrictMode>
        <Nav />
        <General submitted={false}/>
        <Education submitted={false}/>
        <Experience submitted={false}/>
        <Buttons />
      </StrictMode>
    )
  }
}

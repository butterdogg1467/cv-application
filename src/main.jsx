import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './components/Nav.jsx'
import { General } from './components/General.jsx'
import { Education } from './components/Education.jsx'
import { Experience } from './components/Experience.jsx'
import  {useState} from 'react'

const root = createRoot(document.getElementById('root'))

function Buttons() {
  const [editOrSubmit, setEditOrSubmit] = useState('Submit')

    function switchEditOrSubmit(e) {
      if (editOrSubmit === "Edit") {
        setEditOrSubmit("Submit")
        makeRoot(false)
      } else {
        setEditOrSubmit("Edit")
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

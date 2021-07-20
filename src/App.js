import React from 'react';
import './App.scss';
import photo from './images/foto.png';

const App = () => {
  return(
    <div className='container'>
      <div className='profile-container'>
        <img src={photo}/>
        <p>Felipe Augusto Souza Guimaraes</p>
        <p>Software Engineer</p>
        <ul>
          <li><a href="https://www.linkedin.com/in/fasguimaraes/">LinkedIn</a></li>
          <li><a href="https://github.com/FelipeAugusto1303/">Github</a></li>
        </ul>
      </div>
      <div className='skill-container'>

      </div>
    </div>
  )
}

export default App;
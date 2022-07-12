import './App.css';
import React from "react";
/* First Bank import */
import clap from './bank1/707-clap.wav'
import ambientKick from './bank1/ambient_kick.wav'
import ecKick from './bank1/ec-kik050.wav'
import gtrchord from './bank1/gtrchord.wav'
import openclosehh from './bank1/openclosehh.wav'
import ordinaryclosehh from './bank1/ordinary_closed_hh.wav'
import shamisenchord from './bank1/shamisen-chord.wav'
import shamisenpluck from './bank1/shamisen-pluck.wav'
import shamisentremolo from './bank1/shamisen-tremolo.wav'


function App() {
  const drumKeys = [{ key: "Q", sound: clap }, { key: "W", sound: ambientKick },
  { key: "E", sound: ecKick }, { key: "A", sound: gtrchord }, { key: "S", sound: openclosehh },
  { key: "D", sound: ordinaryclosehh }, { key: "Z", sound: shamisenchord },
  { key: "X", sound: shamisenpluck }, { key: "C", sound: shamisentremolo }]
  /* gets the file variable name
  const varToString = varObj => Object.keys(varObj)[0]
  const displayName = varToString({ clap })
  */

  function playAudio(event) {
    const audioDOM = event.target.firstElementChild;
    audioDOM.play();
  }

  const drumPads = drumKeys.map(drumpad => {
    return (
      <button className="drum-pad" key={drumpad.key}
        onClick={(event) => playAudio(event)}>
        {drumpad.key}
        <audio>
          <source src={drumpad.sound} type="audio/wav"></source>
        </audio>
      </button>
    )
  })

  return (
    <div className="container">
      <div className="button-grid">
        {drumPads}
      </div>
      <div className='controller'>
        <div className="toggler">
          <p>Power</p>
          <div className="toggler--slider">
            <div className="toggler--slider--square"></div>
          </div>
        </div>
        <div className="display">
          Close HH
        </div>
        <div className="range">
          <input type="range" name="vol" id="vol" min="0" max="100" className="slider" />
        </div>
        <div className="toggler">
          <p>Bank</p>
          <div className="toggler--slider">
            <div className="toggler--slider--square"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


import './App.css';
import React from "react";
import { bank1, bank2 } from './banks';


function App() {
  const [bank, setBank] = React.useState(bank1)
  const [soundPlayed, setSoundPlayed] = React.useState("")
  const [power, setPower] = React.useState(true);
  const [volume, setVolume] = React.useState("30");

  function playAudio(event, soundName) {
    //get the corresponding audiofile
    const audioDOM = event.target.firstElementChild;
    //Setting the volume then playing the audio
    audioDOM.load();
    audioDOM.volume = volume / 100;
    audioDOM.play();
    //Sets the display to the corresponding sound
    setSoundPlayed(soundName);
  }

  function togglePower() {
    if (power) {
      setSoundPlayed("")
    }
    setPower(prev => !prev);
  }

  function handleVolume(event) {
    const volume = event.target.value;
    setVolume(volume);
    setSoundPlayed("Volume: " + volume)
  }

  React.useEffect(() => {
    setTimeout(
      () => setSoundPlayed(""), 1000
    )
  }, [volume])

  function toggleBank() {
    if (power) {
      const key = bank.find((e) => e.soundName === soundPlayed).key
      if (bank === bank1) {
        setSoundPlayed(bank2.find((e) => e.key === key).soundName)
        setBank(bank2)
      } else {
        setSoundPlayed(bank1.find((e) => e.key === key).soundName)
        setBank(bank1)
      }
    }
  }

  //Add keybinding functionality
  React.useEffect(() => {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Q" || event.key === 'q') {
        document.getElementById("Q").click();
      }
      if (event.key === "W" || event.key === 'w') {
        document.getElementById("W").click();
      }
      if (event.key === "E" || event.key === 'e') {
        document.getElementById("E").click();
      }
      if (event.key === "A" || event.key === 'a') {
        document.getElementById("A").click();
      }
      if (event.key === "S" || event.key === 's') {
        document.getElementById("S").click();
      }
      if (event.key === "D" || event.key === 'd') {
        document.getElementById("D").click();
      }
      if (event.key === "Z" || event.key === 'z') {
        document.getElementById("Z").click();
      }
      if (event.key === "X" || event.key === 'x') {
        document.getElementById("X").click();
      }
      if (event.key === "C" || event.key === 'c') {
        document.getElementById("C").click();
      }
    })
  }, [])
  const drumPads = bank.map(drumpad => {
    return (
      <button className="drum-pad" key={drumpad.key}
        onClick={(event) => playAudio(event, drumpad.soundName)}
        disabled={!power} id={drumpad.key}>
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
          <div className={power ? "toggler--slider on" : "toggler--slider off"}
            onClick={togglePower}>
            <div className="toggler--slider--square"></div>
          </div>
        </div>
        <div className="display">
          {soundPlayed}
        </div>
        <div className="range">
          <input type="range" name="vol" id="vol" min="0" max="100" className="slider" value={volume}
            onChange={(event) => handleVolume(event)} disabled={!power}
          />
        </div>
        <div className="toggler">
          <p>Bank</p>
          <div className={bank === bank1 ? "toggler--slider off" : "toggler--slider on"}
            onClick={toggleBank} disabled={!power}>
            <div className="toggler--slider--square"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


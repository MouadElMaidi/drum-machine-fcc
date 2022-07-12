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
    const key = bank.find((e) => e.soundName === soundPlayed).key
    if(bank === bank1) {
      setSoundPlayed(bank2.find((e) => e.key === key).soundName)
      setBank(bank2)
    } else {
      setSoundPlayed(bank1.find((e) => e.key === key).soundName)
      setBank(bank1)
    }
    //bank === bank1 ? setBank(bank2) : setBank(bank1)
  }

  const drumPads = bank.map(drumpad => {
    return (
      <button className="drum-pad" key={drumpad.key}
        onClick={(event) => playAudio(event, drumpad.soundName)}
        disabled={!power}>
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
            onChange={(event) => handleVolume(event)}
          />
        </div>
        <div className="toggler">
          <p>Bank</p>
          <div className={bank === bank1 ? "toggler--slider off" : "toggler--slider on"}
            onClick={toggleBank}>
            <div className="toggler--slider--square"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


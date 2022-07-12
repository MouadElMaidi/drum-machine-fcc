import './App.css';

function App() {
  return (
    <div className="container">
      <div className="button-grid">
        <button className="drum-pad">q</button>
        <button className="drum-pad">q</button>
        <button className="drum-pad">q</button>
        <button className="drum-pad">q</button>
        <button className="drum-pad">q</button>
        <button className="drum-pad">q</button>
        <button className="drum-pad">q</button>
        <button className="drum-pad">q</button>
        <button className="drum-pad">q</button>
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
          <input type="range" name="vol" id="vol" min="0" max="100" className="slider"/>
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

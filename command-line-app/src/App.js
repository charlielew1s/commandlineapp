import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-container">
          <p className="App-name">Charlie Lewis</p>
          <div className="line-breaks">
            {[...Array(1)].map((_, index) => (
              <br key={index} />
            ))}
          </div>
          <p className="App-title">Full stack software engineer</p>
        </div>
      </header>
    </div>
  );
}

export default App;

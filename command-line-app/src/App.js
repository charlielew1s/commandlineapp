import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalHistory]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleInputSubmit = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      const command = input;
      setTerminalHistory([...terminalHistory, `> ${command}`]);
      setInput('');
      processCommand(command);
    }
  };

  const processCommand = (command) => {
    switch (command.toLowerCase()) {
      case 'help':
        const helpOutput = [
          'Commands - Description', 
          'help - Lists all commands', 
          'commands - Lists all commands',
          'clear - Clear terminal',
          'date - Prints current date and time',
          'wiki-random - Opens a random Wikipedia article',
          'languages - Programming languages Charlie knows',
          'projects - Lists Charlie\'s projects',
          'experience - Lists Charlie\'s experience',
          'education - Lists Charlie\'s education',
          'github - Lists Charlie\'s GitHub',
          'CV - Lists Charlie\'s CV',
          'email - Lists Charlie\'s email'
        ];
        setTerminalHistory(th => [...th, ...helpOutput]);
        break;
      case 'clear':
        setTerminalHistory([]);
        break;
      default:
        setTerminalHistory(th => [...th, `Unknown command: ${command}`]);
    }
  };

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
          <div className="line-breaks">
            {[...Array(1)].map((_, index) => (
              <br key={index} />
            ))}
          </div>
          <p className="App-help">Type help to list commands</p>
          <div className="line-breaks">
            {[...Array(1)].map((_, index) => (
              <br key={index} />
            ))}
          </div>
          <div className="App-terminal-output">
            {terminalHistory.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            <textarea 
              className="App-terminal-input" 
              value={input} 
              onChange={handleInputChange} 
              onKeyDown={handleInputSubmit}
              placeholder="Type your command here..."
              autoFocus
            />
            <div ref={bottomRef} /> {/* Correctly closed comment */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;



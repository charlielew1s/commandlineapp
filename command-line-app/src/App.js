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
          'help - Lists all commands', 
          'clear - Clear terminal',
          'date - Prints current date and time',
          'wiki-random - Opens a random Wikipedia article',
          'languages - Programming languages Charlie knows',
          'projects - Lists Charlie\'s projects',
          'experience - Lists Charlie\'s experience',
          'education - Lists Charlie\'s education',
          'github - Opens Charlie\'s GitHub',
          'CV - Opens Charlie\'s CV',
          'email - Lists Charlie\'s email',
          'skills - Lists Charlie\'s skills'
        ];
        setTerminalHistory(th => [...th, ...helpOutput]);
        break;
      case 'email':
        const emailOutput = [
          'charlielewis2133@gmail.com'
        ];
        setTerminalHistory(th => [...th, ...emailOutput]);
        break;
      case 'clear':
        setTerminalHistory([]);
        break;
      case 'date':
        const currentDate = new Date().toString();
        setTerminalHistory(th => [...th, currentDate]);
        break;
      case 'languages':
        const languages = [
          'Java - Intermediate',
          'React JavaScript - Intermediate',
          'Python - Intermediate',
          'SQL - Intermediate',
          'C++ - Intermediate'
        ];
        setTerminalHistory(th => [...th, ...languages]); // Spread the array
        break;
      case 'wiki-random':
        window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank');
        setTerminalHistory(th => [...th, 'Opening a random Wikipedia article...']);
        break;
      case 'cv':
        window.open('/Charles_Lewis_Updated_CV.pdf', '_blank');
        setTerminalHistory(th => [...th, 'Opening Charles Lewis CV...']);
        break;
      case 'github':
        window.open('https://github.com/charlielew1s', '_blank');
        setTerminalHistory(th => [...th, 'Opening GitHub page...']);
        break;
      case 'projects':
        const projectsOutput = [
          'Coursework - Creating a game using Java: I created a multi-level game in Java using a physics engine library provided by my university. I used the IntelliJ IDE and debugger to solve problems in my game, which enhanced my problem-solving skills. I utilised GUI technology to change levels and class inheritance to create unique levels with common features. Creating this game successfully enhanced my knowledge of important application of Object Oriented Design.',
          'Coursework in Databases: I created a database for an e-commerce site marketing products relating to Korean pop music using SQL, which introduced the real-life application of databases. One of the requirements of this project was to normalise the data, so I learned how to use multiple tables, each storing different aspects of the data. Then, I provided foreign key relationships between related tables. Laying out the data in this way afforded me the opportunity to write non-trivial SQL queries to extract data in order to answer questions that were not anticipated at the time of data entry.',
          'Data Analysis Own Project: One of my interests is Korean pop music. I used my knowledge of Python and Java to create a data analysis project analysing the correlation between the percentage of Latin Script lyrics in Korean pop music videos and the viewing figures of the videos. The aim was to determine the extent to which viewing figures are influenced by incorporating Latin Script lyrics. Firstly, I read raw data from an SQLite database file. I used Java for the data analysis and Python\'s Matplotlib module to generate a scatter plot. This project provided me with the opportunity to learn how to plot data using Python and solidified my knowledge of data processing in Java. This complemented my learning from the Java game which focused more on process control and Object Oriented Design. The two projects provided good exposure to the power and breadth of the Java programming language which will equip me to tackle diverse types of problems using either programming language in the future.',
          'Programming in C++ coursework: I developed two C++ classes that form part of a simple game, with robots moving around in a two-dimensional space. The "robot" class represents a robot moving around in the 2D space and the "game" class holds the robots that make up the game. The "robot" class contains methods to move a specific robot in question around the 2D space while the "game" class contains methods to obtain statistical information about the robots in the game, such as the number of robots and the furthest distance any robot has travelled. The "game" class also allows users to create robots in addition to selecting a specific named robot already in the game and moving it.'
        ];
        const formattedProjectsOutput = projectsOutput.flatMap((item) => 
          item.split('\n').flatMap((line, index, arr) => 
            arr.length - 1 === index ? [line] : [line, <br key={`proj-${index}`} />]
          )
        );    
        setTerminalHistory(th => [...th, ...formattedProjectsOutput]);
        break;    
        case 'experience':
          const experienceOutput = [
            'GUY CARPENTER SUMMER INTERNSHIP, 07/2023 - 08/2023\nMarsh McLennan, London, United Kingdom\n• Worked as part of the Global Marine Team at Guy Carpenter, a subsidiary \n of the multinational financial services firm Marsh McLennan.\n• Involved in a project to process data about risks facing global clients.\n• Created pivot tables, automated the process using Python.\n• Enhanced data processing efficiency from Excel spreadsheet to pivot tables.',
            'SCHOOL LIBRARY MONITOR (UNPAID), 09/2019 - 03/2020\nInternational Community School, London, United Kingdom\n• Supervised students in the library during break times.\n• Ensured appropriate behavior, fostering a conducive learning environment.\n• Developed leadership skills, taking responsibility for younger students.'
            // ... additional entries if needed ...
          ];
        
          const formattedExperienceOutput = experienceOutput.flatMap((item) => 
            item.split('\n').flatMap((line, index, arr) => 
              arr.length - 1 === index ? [line] : [line, <br key={`exp-${index}`} />]
            )
          );
        
          setTerminalHistory(th => [...th, ...formattedExperienceOutput]);
          break;
              
      case 'education':
        const educationOutput = [
          'City, University of London, London, United Kingdom, 01/2021 - Current\nBachelor of Science: Computer Science\n3 stage undergraduate programme in Computer Science - the courses are as follows:',
          'Stage 1:\n• Databases - 76.2%\n• Programming in Java - 63%\n• Mathematics for Computing - 87.6%\n• Systems Architecture - 84%\n• Operating Systems - 80.6%\n• Computer Science, Ethics and Society - 90%',
          'International Community School, London, United Kingdom, 01/2019 - 01/2021\nInternational Baccalaureate Diploma Programme\nHigher Level:\n• Music - 6/7\n• History - 6/7\n• Language and Literature (English) - 6/7\nStandard Level:\n• Environmental Systems and Societies - 7/7\n• Mathematics Applications and Interpretation - 6/7\n• Spanish ab initio - 6/7\nCore Requirements:\n• Creativity, Activity and Service hours\n• Theory of Knowledge - B\n• Extended Essay in Environmental Systems and Societies - C\nTotal points awarded: 39/45',
          'International Community School, London, United Kingdom, 01/2015 - 01/2019\nInternational Baccalaureate Middle Years Programme\n• Mathematics - 6/7\n• Language and Literature (English) - 6/7',
          'Centre for Young Musicians, London, United Kingdom, 01/2011 - 01/2021\nCello\nHad individual tutoring and played in orchestras, including those conducted by Peter Ash.',
          'Associated Board of the Royal Schools of Music, 01/2020\n• Grade 8 Cello - Merit\n• Grade 8 Piano - Pass'
        ];
        const formattedEducationOutput = educationOutput.flatMap((item) => 
          item.split('\n').flatMap((line, index, arr) => 
            arr.length - 1 === index ? [line] : [line, <br key={index} />]
          )
        );
        setTerminalHistory(th => [...th, ...formattedEducationOutput]);
        break;
      case 'skills':
        const skillsOutput = [
          'Google workspace - intermediate',
          'Java - intermediate',
          'Python - intermediate',
          'SQL - intermediate',
          'C++ - intermediate',
          'Microsoft Office Suite - intermediate',
          'React JavaScript - Intermediate'
        ];
          setTerminalHistory(th => [...th, ...skillsOutput]);
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



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
          'Coursework - Creating a game using Java: I created a multi-level game in Java',
          'using a physics engine library provided by my university. I used the IntelliJ IDE and',
          'debugger to solve problems in my game, which enhanced my problem-solving',
          'skills. I utilised GUI technology to change levels and class inheritance to create',
          'unique levels with common features. Creating this game successfully enhanced my',
          'knowledge of the important application of Object Oriented Design.\n' +
          'Coursework in Databases: I created a database for an e-commerce site marketing',
          'products relating to Korean pop music using SQL, which introduced the real-life',
          'application of databases. One of the requirements of this project was to normalise',
          'the data, so I learned how to use multiple tables, each storing different aspects of',
          'the data. Then, I provided foreign key relationships between related tables. Laying',
          'out the data in this way afforded me the opportunity to write non-trivial SQL',
          'queries to extract data in order to answer questions that were not anticipated at',
          'the time of data entry.\n' +
          'Data Analysis Own Project: One of my interests is Korean pop music. I used my',
          'knowledge of Python and Java to create a data analysis project analysing the',
          'correlation between the percentage of Latin Script lyrics in Korean pop music',
          'videos and the viewing figures of the videos. The aim was to determine the extent',
          'to which viewing figures are influenced by incorporating Latin Script lyrics. Firstly, I',
          'read raw data from an SQLite database file. I used Java for the data analysis and',
          'Python\'s Matplotlib module to generate a scatter plot. This project provided me',
          'with the opportunity to learn how to plot data using Python and solidified my',
          'knowledge of data processing in Java. This complemented my learning from the',
          'Java game which focused more on process control and Object Oriented Design.',
          'The two projects provided good exposure to the power and breadth of the Java',
          'programming language which will equip me to tackle diverse types of problems',
          'using either programming language in the future.\n' +
          'Programming in C++ coursework: I developed two C++ classes that form part of a',
          'simple game, with robots moving around in a two-dimensional space. The "robot"',
          'class represents a robot moving around in the 2D space and the "game" class holds', 
          'the robots that make up the game. The "robot" class contains methods to move a', 
          'specific robot in question around the 2D space while the "game" class contains',
          'methods to obtain statistical information about the robots in the game, such as the',
          'number of robots and the furthest distance any robot has travelled. The "game"',
          'class also allows users to create robots in addition to selecting a specific named',
          'robot already in the game and moving it.'
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
            'GUY CARPENTER SUMMER INTERNSHIP, 07/2023 - 08/2023\n' +
            'Marsh McLennan, London, United Kingdom\n' +
            'I worked as part of the Global Marine Team at Guy Carpenter, a reinsurance broker',
            'that is a subsidiary of the multinational financial services firm Marsh McLennan.',
            'During this time, I was involved in a project to process data about the risks facing',
            'global clients by creating pivot tables, automating the process using Python and',
            'Python\'s dataframe and pandas libraries. Previously, there was manual input of',
            'data using Microsoft Excel. The software I developed enabled direct transfer of the',
            'data from the Excel spreadsheet into the pivot tables, allowing different areas of',
            'the business to receive their data more quickly.\n' +
            'I facilitated the ability of the EMEA (Europe, Middle East and Africa) team to',
            'understand and programme Alteryx workflows relating to Flood Re, a flood',
            're-insurance scheme in Britain, by documenting these workflows into a step by step',
            'easy to understand guide.\n' +
            'A reference may be requested by contacting my former line manager here -',
            'francesca.terenzi@guycarp.com\n' +
            'SCHOOL LIBRARY MONITOR (UNPAID), 09/2019 - 03/2020\n' +
            'International Community School, London, United Kingdom\n' +
            'I supervised other students using the library during break times to ensure',
            'appropriate behaviour. This taught me how to take responsibility for the younger',
            'students and develop leadership skills.'
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
          'City, University of London, London, United Kingdom, 09/2021 - Current\n' +
          'Bachelor of Science: Computer Science\n' +
          '3 stage undergraduate programme in Computer Science - the courses are as follows:\n' +
          'Stage 1:\n' +
          '• Databases - 76.2%\n' +
          '• Programming in Java - 63%\n' +
          '• Mathematics for Computing - 87.6%\n' +
          '• Systems Architecture - 84%\n' +
          '• Operating Systems - 80.6%\n' +
          '• Computer Science, Ethics and Society - 90%\n' +
          'Stage 2:\n' +
          '• Introduction to Algorithms - 74.4%\n' +
          '• Data Structures and Algorithms - 57.7%\n' +
          '• Language Processors - 70.4%\n' +
          '• Computer Networks - 52.2%\n' +
          '• Object-Oriented Analysis and Design - 62.9%\n' +
          '• Professional Development in IT - 71.9%\n' +
          '• Programming in C++ - 89.1%\n' +
          'International Community School, London, United Kingdom, 08/2019 - 05/2021\n' +
          'International Baccalaureate Diploma Programme\n' +
          'Higher Level:\n' +
          '• Music - 6/7\n' +
          '• History - 6/7\n' +
          '• Language and Literature (English) - 6/7\n' +
          'Standard Level:\n' +
          '• Environmental Systems and Societies - 7/7\n' +
          '• Mathematics Applications and Interpretation - 6/7\n' +
          '• Spanish ab initio - 6/7\n' +
          'Core Requirements:\n' +
          '• Creativity, Activity and Service hours\n' +
          '• Theory of Knowledge - B\n' +
          '• Extended Essay in Environmental Systems and Societies - C\n' +
          'Total points awarded: 39/45\n' +
          'International Community School, London, United Kingdom, 01/2015 - 06/2019\n' +
          'International Baccalaureate Middle Years Programme\n' +
          '• Mathematics - 6/7\n' +
          '• Language and Literature (English) - 6/7\n' +
          'Centre for Young Musicians, London, United Kingdom, 09/2011 - 05/2020\n' +
          'Cello\n' +
          'Had individual tutoring and played in orchestras. For many years, I played in',
          'orchestras conducted by the world class renowned conductor and composer',
          'Peter Ash who is best known for his opera "The Golden Ticket" based on Roald',
          'Dahl\'s "Charlie and the Chocolate Factory" - Ash also has conducted the Royal',
          'Philharmonic Orchestra, London Sinfonietta and many other orchestras. Ash was in',
          '2006 awarded the Bartók Prize by the Hungarian Cultural Centre.\n' +
          'Associated Board of the Royal Schools of Music\n' +
          '• Grade 8 Cello - Merit\n' +
          'Associated Board of the Royal Schools of Music\n' +
          '• Grade 8 Piano - Pass\n' 
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
          '• Google workspace - intermediate',
          '• Java - intermediate',
          '• Python - intermediate',
          '• SQL - intermediate',
          '• C++ - intermediate',
          '• Microsoft Office Suite - intermediate',
          '• React JavaScript - Intermediate'
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



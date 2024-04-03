import React, { useState } from "react";
import "./App.css";
import plant1 from "./images/plant.png";
import plant2 from "./images/plant2.png";
import plant3 from "./images/plant3.png";
import QueryBox from "./components/QueryBox";

const plantImages = [plant1, plant2, plant3];

function App() {
  const [entries, setEntries] = useState<{ text: string; date: string }[]>([]);
  const [currentEntry, setCurrentEntry] = useState("");
  // State to hold the plant images and their positions
  const [plantPositions, setPlantPositions] = useState<{ src: string; top: number; left: number }[]>([]);

  const handleEntryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentEntry(event.target.value);
  };

  const submitEntry = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!currentEntry.trim()) return;
    
    const newEntry = {
      text: currentEntry,
      date: new Date().toLocaleDateString()
    };
    setEntries([...entries, newEntry]);
  
    // Select a random image
    const randomImage = plantImages[Math.floor(Math.random() * plantImages.length)];
    const newPlantPosition = {
      src: randomImage,
      top: Math.random() * (window.innerHeight - 100),
      left: Math.random() * (window.innerWidth - 100),
    };
    setPlantPositions([...plantPositions, newPlantPosition]);
  
    setCurrentEntry("");
  };
  

  return (
    <div>
      <QueryBox />
      <br />
      <textarea
        placeholder="Enter your journaling response here"
        rows={10}
        cols={150}
        style={{ color: "green" }}
        value={currentEntry}
        onChange={handleEntryChange}
      />
      <br />
      <button onClick={submitEntry}>Submit Entry</button>
      <div>
        <h2>Journal History</h2>
        {entries.map((entry, index) => (
          <p key={index}>{`${entry.date}: ${entry.text}`}</p>
        ))}
      </div>
      {plantPositions.map((plant, index) => (
        <img
          key={index}
          src={plant.src}
          alt="Plant"
          style={{
            position: 'absolute',
            top: `${plant.top}px`,
            left: `${plant.left}px`,
            width: '100px', 
          }}
        />
      ))}
    </div>
  );
}

export default App;

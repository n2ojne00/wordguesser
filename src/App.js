import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [word, setWord] = useState('');

  useEffect(() => {
    // Fetch a word from the RESTful API when the component mounts
    axios.get('YOUR_API_ENDPOINT')
      .then(response => {
        const fetchedWord = response.data.word; // Adjust based on your API response structure
        setWord(fetchedWord);
      })
      .catch(error => console.error('Error fetching word:', error));
  }, []);

  const handleButton = () => {
    console.log("klikattu");
  };

  return (
    <div className='wordguesser'>
      <h1>Guess the word</h1>
      <div className='content'>
        <div className='board'>
          <span className='square_bg'></span>
        </div>
        <p className='scrambled_word'>{word}</p>
        <div className='fields'>
          <input type='text' />
          <button type='button' onClick={handleButton}>ENTER</button>
        </div>
      </div>
    </div>
  );
}

export default App;

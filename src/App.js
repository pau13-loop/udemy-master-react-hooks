import { useState } from 'react';
import Joke from './Joke';
import Stories from './Stories';
import Tasks from './Tasks';
import Gallery from './Gallery';

function App() {
  const [userQuery, setUserQuery] = useState('');

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      searchQuery();
    }
  }

  const updateUserQuery = event => {
    console.log('userQuery: ', userQuery);

    setUserQuery(event.target.value);
  }

  return (
    <div className="App">
      <h1>Hello Pau!</h1>
      <div className='form'>
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={searchQuery}
        >
          Search
        </button>
      </div>

      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <Gallery />
      <hr />
      <Stories />
    </div>
  );
}

export default App;

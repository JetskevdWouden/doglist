import React from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';

class App extends React.Component {
  render() {
    return (
     <div className="App">
        <header className="App-header">
          <main>
            <DogsListContainer />
          </main>
        </header>
     </div>
    );
  }
}

export default App;

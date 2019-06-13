import React from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import {Route} from 'react-router-dom'
import DogBreedImages from './components/DogBreedImages';

class App extends React.Component {
  render() {
    return (
     <div className="App">
        <header className="App-header">
          <main>
            <Route exact path="/" component={DogsListContainer} />
            <Route path="/dog-breeds/:breed" component={DogBreedImages} />
          </main>
        </header>
     </div>
    );
  }
}

export default App;

import Navbar from './components/Navbar';
import Home from './components/Home';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import PageFour from './components/PageFour';

import {Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />  
          <Route exact path="/one" component={PageOne} />
          <Route exact path='/two' component={PageTwo} />
          <Route exact path='/three' component={PageThree} />
          <Route exact path="/four" component={PageFour} />
        </Switch>
      </main>
    </div>
  );
}

export default App;

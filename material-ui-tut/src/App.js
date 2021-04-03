import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Typographies from './components/Typographies'
import Buttons from './components/Buttons'
import Icons from './components/Icons'
import MakeStyles from './components/MakeStyles'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/typographies">
          <Typographies />
        </Route>
        <Route path="/buttons">
          <Buttons />
        </Route>
        <Route path="/icons">
          <Icons />
        </Route>
        <Route path="/makeStyles">
          <MakeStyles />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

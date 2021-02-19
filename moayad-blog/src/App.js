import Navbar from './Navbar';
import Home from './Home';
import List from './Other/Lists';
import Hook from './Other/HookStates';
import Fetching from './Other/FetchJson';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Fetching />
      </div>
    </div>
  );
}

export default App;
import Navbar from './Navbar';
import Home from './Home';
import List from './Other/Lists';
import Hook from './Other/HookStates';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="content">
        {/* <Home /> */}
        <Hook/>
      </div>
    </div>
  );
}

export default App;
import './App.css';
import Avatar from "./Avatar/Avatar";

function App() {
  const URL='https://earthsky.org/upl/2018/06/ocean-apr27-2020-Cidy-Chai-North-Pacific-scaled-e1591491800783.jpeg';
  return (
    <div className="App">
     <Avatar url={URL}/>
    </div>
  );
}

export default App;

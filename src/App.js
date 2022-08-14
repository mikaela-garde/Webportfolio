import { Outlet } from 'react-router-dom';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Outlet/>
      <div className='footer'>
          <p>Website developed and designed by Mikaela Gärde</p>
      </div>
    </div>
  );
}

export default App;

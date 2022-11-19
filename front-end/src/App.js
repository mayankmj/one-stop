import logo from './logo.svg';
import './App.css';

import Login from './components/account/Login'// dont need to write jsx as it is by default
function App() {
  return (
    <div style={{marginTop: 64}}>
      <Login />
    </div>
  );
}

export default App;

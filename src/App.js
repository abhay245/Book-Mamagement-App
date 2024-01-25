import './App.css';
import {Route,Routes} from 'react-router-dom';
import Login from './pages/Login.js'
import Account from './components/account/Account.js';
import Error from './pages/Error.js'
import Landing from './pages/Landing.js'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
  );
}

export default App;

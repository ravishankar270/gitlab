import './App.css';
  import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import HeaderComponent from './components/Header/HeaderComponent';
import LoginPage from './Pages/Login/LoginPage';
import IssuePage from './Pages/Issue/IssuePage';
import { Provider, useSelector } from 'react-redux';
import Protected from './Utilities/Protected';
import { useEffect } from 'react';

function App() {
  const token=localStorage.getItem('token')
  const auth=useSelector(state=>state.auth)
  return (
    <Router>
           <div className="App">
            
           <Routes>
                 <Route exact path='/' element={
                  <Protected auth={auth} tok={token}>
                    <HeaderComponent> < IssuePage /></HeaderComponent>
                 
                 </Protected>
                 }></Route>
                 <Route exact path='/login' element={
                  
                 <LoginPage auth={auth}/>
                 }></Route>
                 <Route exact path='/issue' element={<IssuePage />}></Route>
          </Routes>
          </div>
       </Router>

  );
}

export default App;

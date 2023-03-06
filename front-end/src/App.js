import './App.css';
// import Registration from './components/registration/registration';
import Userlogin from './login/userlogin';
import Home from './Home/Home';
// import Booking from './booking/booking';
import { BrowserRouter as Router, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div >
        <div className='main'>
          
        </div>
          <Route exact path='/' component={Userlogin} /> 
          <Route exact path='/Home/Home' component={Home} /> 
      </div>
    </Router>
  );
}

export default App;

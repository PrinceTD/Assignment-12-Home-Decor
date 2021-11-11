import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './componets/Home/Home';
import About from './componets/Page/About/About';
import Contact from './componets/Page/Contact/Contact';
import Login from './componets/Page/Login/Login';
import PrivetRoute from './componets/Page/Login/PrivetRoute/PrivetRoute';
import Register from './componets/Page/Register/Register';
import Service from './componets/Page/Service/Service';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivetRoute path="/contact">
              <Contact></Contact>
            </PrivetRoute>
            <PrivetRoute path="/service">
              <Service></Service>
            </PrivetRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;

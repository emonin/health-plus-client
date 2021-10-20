import './App.css';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRouter/PrivateRoute';
import Doctors from './components/Doctors/Doctors';

function App() {
  return (
    <div className="main-section">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route path="/Doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

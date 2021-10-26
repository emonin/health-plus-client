import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
import Interventional from './components/Interventional/Interventional';
import Medicine from './components/Medicine/Medicine';
import Hepatology from './components/Hepatology/Hepatology';
import Gastroenterology from './components/Gastroenterology/Gastroenterology';
import Colorectal from './components/Colorectal/Colorectal';
import Hepatobiliary from './components/Hepatobiliary/Hepatobiliary';
import Nephrology from './components/Nephrology/Nephrology';
import Neurology from './components/Neurology/Neurology';
import Oncology from './components/Oncology/Oncology';
import Ophthalmology from './components/Ophthalmology/Ophthalmology';
import Ent from './components/Ent/Ent';
import ICU from './components/ICU/ICU';
import Vaccination from './components/Vaccination/Vaccination';
import Hematology from './components/Hematology/Hematology';
import Rheumatology from './components/Rheumatology/Rheumatology';

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
            <Route path="/services">
              <Services></Services>
            </Route>
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

            {/* 
              --------------------
              Servises PrivetRoute 
              --------------------
            */}
            <PrivateRoute path="/interventional">
              <Interventional />
            </PrivateRoute>
            <PrivateRoute path="/medicine">
              <Medicine />
            </PrivateRoute>
            <PrivateRoute path="/hepatology">
              <Hepatology />
            </PrivateRoute>
            <PrivateRoute path="/gastroenterology">
              <Gastroenterology />
            </PrivateRoute>
            <PrivateRoute path="/colorectal">
              <Colorectal />
            </PrivateRoute>
            <PrivateRoute path="/hepatobiliary">
              <Hepatobiliary />
            </PrivateRoute>
            <PrivateRoute path="/nephrology">
              <Nephrology />
            </PrivateRoute>
            <PrivateRoute path="/neurology">
              <Neurology />
            </PrivateRoute>
            <PrivateRoute path="/oncology">
              <Oncology />
            </PrivateRoute>
            <PrivateRoute path="/ophthalmology">
              <Ophthalmology />
            </PrivateRoute>
            <PrivateRoute path="/ent">
              <Ent />
            </PrivateRoute>
            <PrivateRoute path="/icu">
              <ICU />
            </PrivateRoute>
            <PrivateRoute path="/vaccination">
              <Vaccination />
            </PrivateRoute>
            <PrivateRoute path="/hematology">
              <Hematology />
            </PrivateRoute>
            <PrivateRoute path="/rheumatology">
              <Rheumatology />
            </PrivateRoute>
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

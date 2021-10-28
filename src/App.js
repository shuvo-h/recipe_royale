import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import ExperienceDetails from './Components/ExperienceDetails/ExperienceDetails';
import SearchTerritory from './Components/SearchTerritory/SearchTerritory';
import Login from './Components/Admin/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Registration from './Components/Admin/Login/Registration';
import TouristList from './Components/TouristList/TouristList';
import Footer from './Components/Footer/Footer';
import Mapbox from './Components/Footer/MapBox/Mapbox';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route path="/registration">
                <Registration></Registration>
            </Route>
            <Route path="/mapbox">
                <Mapbox></Mapbox>
            </Route>
            <PrivateRoute path="/tourexperience/detalis/:id">
                <ExperienceDetails></ExperienceDetails>
            </PrivateRoute>
            <PrivateRoute path="/tourist-list">
                <TouristList></TouristList>
            </PrivateRoute>
            <Route path="/territoryFind/:searchTxt">
              <SearchTerritory></SearchTerritory>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/">
                <Home></Home>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

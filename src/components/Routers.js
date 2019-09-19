import Header from "./Header";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Sports from "./Sports";
import Casino from "./Casino";
import Player from "./Player";
import FavoritePlayers from "./FavoritePlayers";
import {setUserLogged} from "../redux/actions";
import {connect} from "react-redux";

class Routers extends React.Component {
    getPage = () => {
        if(!this.props.userData.userLogged) {
            return (
                <div>
                    <Header/>
                    <Route path="/" exact component={HomeLayout} />
                    <Route path="/sports/" component={SportsLayout} />
                    <Route path="/casino/" component={CasinoLayout} />
                    <Route path="/favoriteplayers/" component={FavoritePlayersLayout} />
                    <Route path="/player/:player_name" component={PlayerLayout}/>
                </div>
            );
        }
        else {
            return (
                <div>
                  <Route path="/*"  component={LoginLayout} />
                </div>
            );
        }
    };

    render = () =>
        <Router>
            {this.getPage()}
        </Router>
}

const LoginLayout = props =>
    <Login {...props}/>

const HomeLayout = props =>
    <Home {...props}/>

const SportsLayout = props =>
    <Sports {...props}/>

const CasinoLayout = props =>
    <Casino {...props}/>

const PlayerLayout = props => {
    return <Player {...props} />
};
const FavoritePlayersLayout = props => {
    return <FavoritePlayers {...props} />
};

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setUserLogged: (value) => dispatch(setUserLogged(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routers);

import Header from "./Header";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import FunctionalSportsPage from "./FunctionalSportsPage";
import Casino from "./Casino";
import Player from "./Player";
import FavoritePlayers from "./FavoritePlayers";
import {setUserLogged} from "../redux/actions";
import {connect} from "react-redux";
import BootstrapTrainingHomePage from "./BootstrapTrainingHomePage";
import PromotionsPage from "./PromotionsPage";

const Routers = props => {

    const getPage = () => {
        if(!props.userData.userLogged) {
            return (
                <>
                    <Header/>
                    <Route path="/" exact component={HomeLayout} />
                    <Route path="/sports/" component={SportsLayout} />
                    <Route path="/casino/" component={CasinoLayout} />
                    <Route path="/favoritePlayers/" component={FavoritePlayersLayout} />
                    <Route path="/player/:player_name" component={PlayerLayout}/>
                    <Route path="/promotionsPage/" component={PromotionsLayout}/>
                </>
            );
        }
        else {
            return (
                <>
                  <Route path="/*"  component={LoginLayout} />
                </>
            );
        }
    };

    return  <Router>
            {getPage()}
        </Router>
};

const LoginLayout = props =>
    <Login {...props}/>;

const HomeLayout = props =>
    <BootstrapTrainingHomePage {...props}/>;

const SportsLayout = props =>
    <FunctionalSportsPage {...props}/>;

const CasinoLayout = props =>
    <Casino {...props}/>;

const PlayerLayout = props =>
    <Player {...props} />;

const FavoritePlayersLayout = props =>
    <FavoritePlayers {...props} />;

const PromotionsLayout = props =>
    <PromotionsPage {...props}/>;

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

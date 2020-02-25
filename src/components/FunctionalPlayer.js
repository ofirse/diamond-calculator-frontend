import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Card, CardBody, CardTitle} from "reactstrap";
import PlayerData from "./PlayerData";
import {getPlayerStats} from "../redux/actions";

const FunctionalPlayer = props => {

    const dispatch = useDispatch();
    const playerData = useSelector(state => state.playerData);

    useEffect(() => {
        dispatch(getPlayerStats(props.playerName));

        return () => {
            //equivalent to componentDidUnmount
        }
    }, [dispatch, props.playerName]);

    return  <div className="container mt-5">
        <Card>
            <CardTitle>Player Information</CardTitle>
            <CardBody>
                <PlayerData playerData={playerData}/>
            </CardBody>
        </Card>
    </div>

};

export default FunctionalPlayer
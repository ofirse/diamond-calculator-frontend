import React, {useState} from 'react';
import { Card, CardBody, CardTitle} from 'reactstrap';
import FavoritesContainer from "../container/FavoritesContainer";
import FavoriteTeamsContainer from "../container/FavoriteTeamsContainer";
import FunctionalCountriesList from "./FunctionaCountriesList";

const FunctionalSportsPage = props => {

    const [cardTitle] = useState("Favorite Players");

    return <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4 mb-3">
                        <Card>
                            <CardTitle>{cardTitle}</CardTitle>
                            <CardBody>
                                <FavoritesContainer/>
                            </CardBody>
                        </Card>
                        <Card className="mt-3">
                            <CardTitle>Favorite Teams</CardTitle>
                            <CardBody>
                                <FavoriteTeamsContainer/>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-sm-8 mt-3 mt-md-0">
                        <Card>
                            <CardTitle className="mb-0">Competitions</CardTitle>
                            <FunctionalCountriesList/>
                        </Card>
                    </div>
                </div>
            </div>
        </>
};

export default FunctionalSportsPage
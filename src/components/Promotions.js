import React from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';

const Promotions = props => {

    return <>
        <h3><strong>PROMOTIONS</strong></h3>
        <div className="row mt-3">
            <Card className="bg-transparent border-0 shadow-none col-sm">
                <CardTitle className="mb-0 bg-light text-black">NBA PROMOTION WITH 100% UP TO 50€ FOR YOU!</CardTitle>
                <CardBody>
                    NBA sports betting awaits you, and so does your 100% up to 50€ deposit bonus!
                </CardBody>
            </Card>
            <Card className="bg-transparent border-0 shadow-none col-sm">
                <CardTitle className="mb-0 bg-light text-black">500 € CASINO WELCOME BONUS!</CardTitle>
                <CardBody>
                    Start your 18bet casino trip with a whopping 500 € bonus! If you are making your first steps with 18bet casino now,
                    we would like to give you a perfect start with a huge bonus your first deposit!
                </CardBody>
            </Card>
            <Card className="bg-transparent border-0 shadow-none col-sm">
                <CardTitle className="mb-0 bg-light text-black">GRAB A SHARE OF 200€ IN THIS SPOOKTACULAR TOURNAMENT!</CardTitle>
                <CardBody>
                    The Halloween spirit hovers around and you also feel it, right? It only leaves cold chills behind him. Well, not only that actually...
                </CardBody>
            </Card>
            <Card className="bg-transparent border-0 shadow-none col-sm">
                <CardTitle className="mb-0 bg-light text-black">REQUEST YOUR PRIVATE SPORTS BONUS</CardTitle>
                <CardBody>
                    You want a sports bonus? Do not hesitate to contact us and request your own personal one!
                </CardBody>
            </Card>
        </div>
    </>
};

export default Promotions
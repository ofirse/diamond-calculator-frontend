import React from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';

const Promotion = props => {
    return <div className="row mb-5">
        <i className={props.myIcon + " mr-3"} id="promotion-icon"/>
            <Card className="promotion-card col">
                <CardTitle className="mb-0 text-black">
                    {props.promotiontitle}
                </CardTitle>
                <CardBody>{props.promotionBody}</CardBody>
            </Card>
        </div>
};

export default Promotion
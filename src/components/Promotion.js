import React from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';

const Promotion = props => {

    return <>
            <Card className="bg-transparent border-0 shadow-none col-sm">
                <CardTitle className="mb-0 bg-light text-black">{props.promotiontitle}</CardTitle>
                <CardBody>{props.promotionBody}</CardBody>
            </Card>
        </>
};

export default Promotion
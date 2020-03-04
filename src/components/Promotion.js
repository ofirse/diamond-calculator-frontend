import React from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';

const Promotion = props => {
// font-awesome not working
    return <>
            <Card className="bg-transparent border-0 shadow-none col-sm my-4 w-75">
                <CardTitle className="mb-0 text-black">
                    <i className={props.myIcon}/>
                    {props.promotiontitle}
                </CardTitle>
                <CardBody className="">{props.promotionBody}</CardBody>

            </Card>
        </>
};

export default Promotion
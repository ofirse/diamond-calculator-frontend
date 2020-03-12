import React from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';

const Promotion = props => {
    return <div className="promotion d-flex">
        <div className="promotion-icon d-flex justify-content-center">
            <i className={props.myIcon}/>
        </div>
        <div className="promotion-card px-3">
            <div className="promotion-title">
                {props.promotiontitle}
            </div>
            <div className="promotion-body">{props.promotionBody}</div>
        </div>
    </div>
};

export default Promotion
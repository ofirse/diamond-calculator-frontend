import React from 'react';

const PromotionCard = props => {
    return <div className="promotion-item">
        <div className="promotion-img">
            <img className="img-fluid" src={props.promotionImg} alt='' />
        </div>
        <div className="promotion-card p-3">
            <div className="promotion-page-title">
                {props.promotiontitle}
            </div>
            <div className="promotion-card-body">{props.promotionBody}</div>
        </div>
    </div>
};

export default PromotionCard
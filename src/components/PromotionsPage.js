import React from 'react';
import PromotionCard from "./PromotionCard";

const PromotionsPage = props => {

    return <div className="container bg-grey p-2 my-5">
        <div className="row">
            <div className="col-md-6">
                <PromotionCard promotionImg="https://cdn.delasport.com/media/images/promotions/434/en_EN/big_image.jpg"
                               promotiontitle="125% Welcome Casino Bonus"
                               promotionBody="Get off to a flying start in Babibet Casino! Claim your 125% Welcome Casino Bonus and get up to €500 in bonus cash! All the games you like and love will be at your disposal."/>
            </div>
            <div className="col-md-6">
                <PromotionCard promotionImg="https://cdn.delasport.com/media/images/promotions/431/en_EN/big_image.jpg"
                               promotiontitle="100% up to 100€ Welcome Bonus"
                               promotionBody="Get an explosive start in sports betting thanks to our amazing Welcome Bonus offer. Claim 100% extra cash up to 100€ and start making your winning picks right now!"/>
            </div>
            <div className="col-md-6">
                <PromotionCard promotionImg="https://cdn.delasport.com/media/images/promotions/435/en_EN/big_image.jpg"
                               promotiontitle="3 in 1 Super Casino Reload Package"
                               promotionBody="Are you in for more great casino action? You got it! Get a huge cash boost with each of your next three deposits, grab up to €900 in bonus cash, and get back to spinning and winning!"/>
            </div>
            <div className="col-md-6">
                <PromotionCard promotionImg="https://cdn.delasport.com/media/images/promotions/433/en_EN/big_image.jpg"
                               promotiontitle="GRAB YOUR 25€ FREE BET!"
                               promotionBody="Here's your chance to ensure a good time with a 25€ free bet at babibet!"/>
            </div>
            <div className="col-md-6">
                <PromotionCard promotionImg="https://cdn.delasport.com/media/images/promotions/432/en_EN/big_image.jpg"
                               promotiontitle="BOOST YOUR BALANCE WITH OUR 50% UP TO 50€ RELOAD BONUS"
                               promotionBody="We've got a 50% up to 50€ reload bonus to give you that competitive edge and ensure a good time at Babibet!"/>
            </div>
        </div>
    </div>
};

export default PromotionsPage
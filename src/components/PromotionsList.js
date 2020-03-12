import React from 'react';
import Promotion from "./Promotion";

const PromotionsList = props => {

    return <div className="promotions-list">
        <div className="container">
            <div className="row">
                <div className="col">
                    <hr className="promotion-line"/>
                    <div className="h3">Promotions</div>
                </div>
            </div>
            <div className="promotions-container row">
                <div className="col-sm">
                    <Promotion myIcon="fa fa-basketball-ball fa-3x " promotiontitle="NBA PROMOTION WITH 100% UP TO 50€ FOR YOU!" promotionBody="NBA sports betting awaits you, and so does your 100% up to 50€ deposit bonus!"/>
                </div>
                <div className="col-sm">
                    <Promotion  myIcon="fa fa-ghost fa-3x " promotiontitle="GRAB A SHARE OF 200€ IN THIS SPOOKTACULAR TOURNAMENT!" promotionBody="The Halloween spirit hovers around and you also feel it, right? It only leaves cold chills behind him. Well, not only that actually..."/>
                </div>
                <div className="col-sm">
                    <Promotion  myIcon="fa fa-coins fa-3x " promotiontitle="BOOST YOUR BALANCE WITH OUR 50% UP TO 50€ RELOAD BONUS" promotionBody="We've got a 50% up to 50€ reload bonus to give you that competitive edge and ensure a good time at Babibet!"/>
                </div>
            </div>
            <div className="promotions-container row">
                <div className="col-sm">
                    <Promotion myIcon="fa fa-dice fa-3x " promotiontitle="500 € CASINO WELCOME BONUS!" promotionBody="Start your 18bet casino trip with a whopping 500 € bonus! If you are making your first steps with 18bet casino now, we would like to give you a perfect start with a huge bonus your first deposit!"/>
                </div>
                <div className="col-sm">
                    <Promotion myIcon="fa fa-futbol fa-3x " promotiontitle="REQUEST YOUR PRIVATE SPORTS BONUS" promotionBody="You want a sports bonus? Do not hesitate to contact us and request your own personal one!"/>
                </div>
                <div className="col-sm">
                    <Promotion myIcon="fa fa-door-open fa-3x " promotiontitle="100% up to 100€ Welcome Bonus" promotionBody="Get an explosive start in sports betting thanks to our amazing Welcome Bonus offer. Claim 100% extra cash up to 100€ and start making your winning picks right now!"/>
                </div>
            </div>
        </div>
    </div>
};

export default PromotionsList
import React from 'react';
import Promotion from "./Promotion";

const PromotionsList = props => {

    return <div id="promotions-list">
        <h3><strong>PROMOTIONS</strong></h3>
        <div id="promotions" className="row mt-3">
            <div className="col-sm">
                <Promotion myIcon="fa fa-basketball-ball mr-2" promotiontitle="NBA PROMOTION WITH 100% UP TO 50€ FOR YOU!" promotionBody="NBA sports betting awaits you, and so does your 100% up to 50€ deposit bonus!"/>
                <Promotion myIcon="fa fa-coins" promotiontitle="500 € CASINO WELCOME BONUS!" promotionBody="Start your 18bet casino trip with a whopping 500 € bonus! If you are making your first steps with 18bet casino now, we would like to give you a perfect start with a huge bonus your first deposit!"/>
            </div>
            <div className="col-sm">
               <Promotion  myIcon="fa fa-coins" promotiontitle="GRAB A SHARE OF 200€ IN THIS SPOOKTACULAR TOURNAMENT!" promotionBody="The Halloween spirit hovers around and you also feel it, right? It only leaves cold chills behind him. Well, not only that actually..."/>
               <Promotion promotiontitle="REQUEST YOUR PRIVATE SPORTS BONUS" promotionBody="You want a sports bonus? Do not hesitate to contact us and request your own personal one!"/>
            </div>
        </div>
    </div>
};

export default PromotionsList
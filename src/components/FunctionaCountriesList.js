import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCountries} from "../redux/actions";
import Country from "./common/Country";

const FunctionalCountriesList = props => {

    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries);
    const [isLoading, setIsLoading] = useState(true);

    const getCountriesList = () => {
        const countriesList = countries.map((country, index) =>
            <Country key={index}
                     countryName={country.country_name}
                     countryId={country.country_id}/>
        );
        return countriesList;
    };
    dispatch(getCountries());

    useEffect(() => {
        console.log('component did mount')
        return () => {
            //equivalent to componentDidUnmount
        }
    });

    return <div className={isLoading ? 'view-loader' : ''}>
        {getCountriesList()}
    </div>
};



export default FunctionalCountriesList
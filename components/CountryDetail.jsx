import React, { useContext, useEffect, useState } from "react";
import "./CountryDetails.css";
import { useLocation, useParams } from "react-router-dom";
import CountryShimmer from "./CountryShimmer";
import { ThemeContext } from "../contexts/ThemeContext";

export default function CountryDetail() {
  const params = useParams();
  const countryName = params.country;
  const [isDark] = useContext(ThemeContext)

  const [notFound, setNotFound] = useState(false);
  const [data, setData] = useState(null);
  const { state } = useLocation();

  function updateCountryData(data) {
    setData({
      flag: data.flags.svg,
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population.toLocaleString("en-IN"),
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      tld: data.tld,
      currencies: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(", "),
      lang: Object.values(data.languages || {}).join(", "),
      borders: [],
    });
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }
    const fetchData = fetch(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    )
      .then((res) => res.json())
      .then(([data]) => updateCountryData(data))
      .catch(() => {
        setNotFound(true);
      });
  }, []);

  if (notFound) {
    return <h1>Page not found</h1>;
  }
  return (
    <main className={`${isDark && 'dark'} `}>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        {data === null ? (<CountryShimmer />) : (
          <div className="country-details">
          <img src={data.flag} alt="" />
          <div className="details-text-container">
            <h1>{data.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {data.nativeName || data.name}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>Population: {data.population}</b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {data.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {data.subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {data.capital?.join(', ')}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {data.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {data.currencies}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {data.lang}</b>
                <span className="languages"></span>
              </p>
            </div>
            {/* <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
            </div> */}
          </div>
        </div>
        )}
        
      </div>
    </main>
  );
}

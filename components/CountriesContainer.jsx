import React, { useEffect, useState } from "react";
import CountriesCard from "./CountriesCard";
import ShimmerCard from "./ShimmerCard.jsx";
import { useLocation } from "react-router-dom";

export default function CountriesContainer({ query }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  
  return (
    <>
      {!data.length ? (
        <ShimmerCard />
      ) : (
        <div className="countries-container">
          {data
            .filter((country) =>
              country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
            )
            .map((country) => {
              return (
                <CountriesCard
                  key={country.name.common}
                  name={country.name.common}
                  flag={country.flags.svg}
                  population={country.population.toLocaleString("en-IN")}
                  region={country.region}
                  capital={country.capital?.[0]}
                  useData={country}
                />
              );
            })}
        </div>
      )}
    </>
  );
}

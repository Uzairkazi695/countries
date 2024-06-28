import React from "react";
import { Link } from 'react-router-dom'

export default function CountriesCard({name,flag,population,region,capital,useData}) {
    
  return (
    <Link className="country-card" to={name} state= {useData}>
      <img src={flag} style={{maxHeight:'166px', width:'100%', objectFit:'cover'}} alt={name + ' flag'}/>
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region: </b>
            {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </Link>
  );
}

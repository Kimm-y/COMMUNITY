import React, { useState } from 'react';
import useFetch from "../../hooks/useFetch";

function Learn() {
  const url = 'https://charityapi.p.rapidapi.com/organizations/474262060';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '12e91dd645msh11887abd2554d28p13b1c4jsn09394f8547e0',
		'X-RapidAPI-Host': 'charityapi.p.rapidapi.com'
	}
};

const data = useFetch(url, options);
console.log(data)
  return (
	<div className="card-section">
	{data.results.map((item) => {
	  return (
		<div key={item.id} className="card">
		  <div className="card-image">
			<img src={item.images[0]} />
		  </div>
	  
	</div>
        );
	})}
  </div>
);
};

export default Learn


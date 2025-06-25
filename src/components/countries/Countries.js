import React, { useEffect, useState } from "react";
import List from "./List";
import Search from "../Search";
import { getCountries } from "../../api/countriesApi";

const Countries = () => {
	const [countries, setCountries] = useState();
	const [query, setQuery] = useState("");

	useEffect(() => {
		const fetchCountries = async () => {
			const response = await getCountries();
			setCountries(response);
		};
		fetchCountries();
	}, []);

	const results = countries?.filter((item) =>
		item.name.toLowerCase().startsWith(query.toLocaleLowerCase())
	);

	return (
		<div className="App">
			<Search onSearch={(e) => setQuery(e.target.value)} />
			<List countries={results} />
		</div>
	);
};

export default Countries;

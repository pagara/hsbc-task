import React from "react";

const List = ({ countries = [] }) => {
	debugger;
	return (
		<div>
			<h2>Countries List</h2>
			<ul>
				{countries.map((country, index) => (
					<li key={index}>{country.name}</li>
				))}
			</ul>
		</div>
	);
};

export default List;

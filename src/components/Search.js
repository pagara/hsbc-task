import React from "react";

const Search = ({ onSearch }) => {
	return (
		<div>
			<input
				type="text"
				placeholder="Search..."
				onChange={onSearch}
			/>
		</div>
	);
};

export default Search;

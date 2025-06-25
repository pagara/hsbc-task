const url = "http://localhost:3001/api/countries";

export async function getCountries() {
	debugger;
	try {
		const response = await fetch(url, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		const countries = data.list.map((country) => ({
      id: country.id,
			name: country.name,
		}));
		return countries;
	} catch (error) {
		console.error("Failed to fetch countries:", error);
		throw error;
	}
}

// import express from "express";
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const app = express();

app.use(cors());
const PORT = process.env.PORT || 3001;
const link =
	"https://urldefense.com/v3/__https:/samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b6907d289e10d714a6e88b30761fae22__;!!LSAcJDlP!zmqabl-Okcqls589ZG0KYBq_jXuP9EUX-Z5PpZapo4DFes_nCBnYxg0LdUlxPqdq81MUdLX2DkFJYUoP7X2FAwg92RcocKv0fw$";

// Function to fetch data from external endpoint
async function fetchExternalData(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
}

// New endpoint to fetch external data
app.get("/api/countries", async (req, res) => {
	try {
		const url = req.query.url || link; // Use provided URL or default link
		const data = await fetchExternalData(url);
		res.json(data);
	} catch (error) {
		res.status(500).json({ error: "Failed to fetch external data" });
	}
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});

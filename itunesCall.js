const fetch = require("node-fetch");

const getAllData = async (table) => {
    console.log(table)//=> should be podcast to start
    try {
		const response = await fetch(`https://itunes.apple.com/search?term=${table}`, {
			"method": "GET",
		})
		const resolved = await response.json()
		return resolved
	}
	catch (e) {
		console.log(e);
	}
}

module.exports = getAllData



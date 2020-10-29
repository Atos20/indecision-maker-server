const fetch = require("node-fetch");

const getAllData = async (activity) => {
    try {
		const response = await fetch(`https://itunes.apple.com/search?term=${activity}`, {
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



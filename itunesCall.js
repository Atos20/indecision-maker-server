const fetch = require("node-fetch");

const getData = async (activity) => {
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

const getAllData = async (activity) => {
    const data = await getData(activity)
    return data
  }

module.exports = getAllData



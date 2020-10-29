const fetch = require("node-fetch");

const getPodcastData = async () => {
    try {
		const response = await fetch(`https://itunes.apple.com/search?term=$podcast`, {
			"method": "GET",
		})
		const resolved = await response.json()
		return resolved
	}
	catch (e) {
		console.log(e);
	}
}

const getAllPodcasts = async () => {
    const data = await getPodcastData()
    return data
  }

module.exports = getAllPodcasts



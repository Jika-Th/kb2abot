const axios = require('axios');

module.exports = async (message, reply, bot) => {
	if (message.senderID != bot) {
		const res = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURI(message.body)}&lc=vi`);
		reply(res.data.success)
	}
};

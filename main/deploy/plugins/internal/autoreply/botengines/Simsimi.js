const axios = require('axios');

module.exports = async (message, reply, fca) => {
	if (message.senderID != fca.getCurrentUserID()) {
		const res = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURI(message.body)}&lc=vi`);
		reply(res.data.success)
	}
};

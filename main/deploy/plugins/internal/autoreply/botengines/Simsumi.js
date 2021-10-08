const axios = require('axios');

module.exports = async (message, reply, bot) => {
	if (message.senderID != bot) {
		const res = await axios({
			url: `https://simsumi.herokuapp.com/api?text=${encodeURI(message.body)}`,
			method: 'GET'
		});
		reply(res.data.success)
	}
};

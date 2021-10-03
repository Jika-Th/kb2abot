const { random, round } = kb2abot.helpers;
//const setting = require("../setting.json");
const axios = require("axios");

module.exports = {
	
	name: "đi làm gái ngành :))",
	keywords:["slut"],
	description: "đào mỏ đào mỏ time",
	guide: "",
	hookType: "*",
	childs: [],

	permission: {
		'*': '*'
	},
	datastoreDesign: {
		account: {
			global: {
				xu: {},
				cooldown: {
					slut: {}
				}
			},
			local: {}
		},
		thread: {
			global: {},
			local: {}
		}
	},
	
	async onLoad() {
	},
	async onMessage(message, reply) {
		const storage = this.storage.account.global;

		if (!storage.xu) { storage.xu = {} };

		if (!storage.cooldown) { storage.cooldown = {} };

		if (!storage.cooldown.slut) { storage.cooldown.slut = {} };

		if (!storage.xu[message.senderID]) { storage.xu[message.senderID] = 0 };

		if (!storage.cooldown.slut[message.senderID]) { storage.cooldown.slut[message.senderID] = 0 }
	},

	async onCall(message, reply) {
		let setting = this.storage.account.global.citSetting;
		if (setting.run.slut != true) {
			return reply("plugin này đã bị tắt")
		}else {
			const storage = this.storage.account.global;
			let slut = storage.cooldown.slut;

			function rep (msg) {
				fca.sendMessage(msg, message.threadID, message.messageID)
			};

			const time = new Date;
			const res = await axios.get(`https://raw.githubusercontent.com/Citnut/Citnut/main/KB2ABotECOConfig.json`)

			const data = res.data;
			if (time.getTime() < slut[message.senderID] + (data.cooldown.slut * 1000)) {
				let cooldown = (slut[message.senderID] + (data.cooldown.slut * 1000)) - time.getTime();
				rep(`vui lòng đợi ${round((cooldown/1000), 0)} giây để tiếp tục`)
			}else {
				slut[message.senderID] = time.getTime();
				let payout = round(random(data.slut.min, data.slut.max), 0);
				storage.xu[message.senderID] += payout;
				rep(`| +${payout} 💵 | ví của bạn có: ${storage.xu[message.senderID]} 💵`)
			}
		}
	}
}

const { random, round } = kb2abot.helpers;
//const setting = require("../setting.json");
const axios = require("axios");

module.exports = {
	
	name: "kiếm tiền",
	keywords:["work"],
	description: "bạn cần rất nhiều xu để tiêu xài đó",
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
					work: {}
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

		if (!storage.cooldown.work) { storage.cooldown.work = {} };

		if (!storage.xu[message.senderID]) { storage.xu[message.senderID] = 0 };

		if (!storage.cooldown.work[message.senderID]) { storage.cooldown.work[message.senderID] = 0 }
	},

	async onCall(message, reply) {
		let setting = this.storage.account.global.citSetting;
		if (setting.run.work != true) {
			return reply("plugin này đã bị tắt")
		}else {
			const storage = this.storage.account.global;
			let work = storage.cooldown.work;

			function rep (msg) {
				fca.sendMessage(msg, message.threadID, message.messageID)
			};

			const time = new Date;
			const res = await axios.get(`https://raw.githubusercontent.com/Citnut/Citnut/main/KB2ABotECOConfig.json`)

			const data = res.data;
			if (time.getTime() < work[message.senderID] + (data.cooldown.work * 1000)) {
				let cooldown = (work[message.senderID] + (data.cooldown.work * 1000)) - time.getTime();
				rep(`vui lòng đợi ${round((cooldown/1000), 0)} giây để tiếp tục`)
			}else {
				work[message.senderID] = time.getTime();
				let payout = round(random(data.work.min, data.work.max), 0);
				storage.xu[message.senderID] += payout;
				rep(`| +${payout} 💵 | ví của bạn có: ${storage.xu[message.senderID]} 💵`)
			}
		}
	}
}

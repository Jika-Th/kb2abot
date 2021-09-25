const { getFile } = kb2abot.helpers;
module.exports = {
	keywords: ["oibanoi", "obo"],

	name: 'ôi bạn ơi',

	description: 'plugin do Trương Đăng Dương cùng Citnut làm đó',

	guide: '',

	childs: [],

	permission: {
		'*': '*'
	},

	datastoreDesign: {
		account: {
			global: {},
			local: {}
		},
		thread: {
			global: {},
			local: {}
		}
	},

	async onLoad() {},

	hookType: '*',

	async onMessage(message, reply) {
		let setting = this.storage.account.global.citSetting;
		if (setting.autorun != true) {
		}else if (message.body.toLowerCase().includes("bạn ơi")) {
			fca.sendMessage({
				body: "ôi bạn ơi...",
				attachment: getFile("./main/deploy/plugins/citnut/data/noprefix/oibanoi.mp4")
			}, message.threadID, message.messageID)
		}
	},

	async onCall(message, reply) {
		let setting = this.storage.account.global.citSetting;
		if (setting.run.oibanoi != true) {
			fca.sendMessage("plugin này đã bị tắt", message.threadID, message.messageID)
		}else {
			fca.sendMessage({
				body: "ôi bạn ơi...",
				attachment: getFile("./main/deploy/plugins/citnut/data/noprefix/oibanoi.mp4")
			}, message.threadID, message.messageID)
		};
	}
};

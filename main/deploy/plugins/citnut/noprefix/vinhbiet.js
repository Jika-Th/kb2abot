const { getFile } = kb2abot.helpers;
module.exports = {
	keywords: ["bye", "vĩnhbiệt"],

	name: 'xin... vĩnh biệt cụ',

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
		}else if (message.body.toLowerCase().includes("vĩnh biệt")) {
			fca.sendMessage({
				body: "xin... vĩnh biệt cụ",
				attachment: getFile("./main/deploy/plugins/citnut/data/noprefix/xinvinhbietcu.mp4")
			}, message.threadID, message.messageID)
		}
	},

	async onCall(message, reply) {
		let setting = this.storage.account.global.citSetting;
		if (setting.run.bye != true) {
			fca.sendMessage("plugin này đã bị tắt", message.threadID, message.messageID)
		}else {
			fca.sendMessage({
				body: "xin... vĩnh biệt cụ",
				attachment: getFile("./main/deploy/plugins/citnut/data/noprefix/xinvinhbietcu.mp4")
			}, message.threadID, message.messageID)
		};
	}
};

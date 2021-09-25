const { getFile } = kb2abot.helpers;
module.exports = {
	keywords: ["blh", "banlanhat"],

	name: 'vâng bạn là nhất',

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
		}else if (message.body.toLowerCase().includes("bạn là nhất")) {
			fca.sendMessage({
				body: "vâng bạn là nhất?",
				attachment: getFile("./main/deploy/plugins/citnut/data/noprefix/banlanhat.mp4")
			}, message.threadID, message.messageID)
		}
	},

	async onCall(message, reply) {
		let setting = this.storage.account.global.citSetting;
		if (setting.run.banlanhat != true) {
			fca.sendMessage("plugin này đã bị tắt", message.threadID, message.messageID)
		}else {
			fca.sendMessage({
				body: "vâng bạn là nhất",
				attachment: getFile("./main/deploy/plugins/citnut/data/noprefix/banlanhat.mp4")
			}, message.threadID, message.messageID)
		};
	}
};

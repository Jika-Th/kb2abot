const { getFile } = kb2abot.helpers;
let attachment = getFile("./main/deploy/plugins/citnut/data/noprefix/NHD.jpg");

module.exports = {
	keywords: ["kohieu", "khonghieu"],

	name: 'ko hiểu sao?',

	description: 'một lệnh cực cute',

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

	hookType: 'non-command',

	async onMessage(message, reply) {
		let setting = this.storage.account.global.citSetting;
		if (setting.autorun != true || message.senderID == this.storage.account.global.console.bot.id) {
		}else if (message.body.toLowerCase().inculdes("ko hiểu") || message.body.toLowerCase().inculdes("không hiểu")) {
			if (message.type == "message_reply" && message.messageReply.body == "bạn không hiểu thật hỏ...") return;
			reply({body: "bạn không hiểu thật hỏ...",attachment})
		}
	},

	async onCall(message, reply) {
		let setting = this.storage.account.global.citSetting;
		if (setting.run.kohieu != true) {
			reply("plugin này đã bị tắt")
		}else {reply({body: "bạn không hiểu thật hỏ...",attachment})};
	}
};

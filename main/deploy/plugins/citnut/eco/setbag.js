const {  parseArgs, parseValue } = kb2abot.helpers;
//const setting = require("../setting.json");
const axios = require("axios");

module.exports = {
	name: "set item hoặc xu",

	keywords: ["set"],

	description: "đặt số dư cho người dùng",

	guide: "<--xu|--item> <số xu|item_id> <mentions|me>",

	
	hookType: "*",

	childs: [],

	permission: {
		'*': ['100048509610460', '100007723935647']
	},
	datastoreDesign: {
		account: {
			global: {
				xu: {},
				trade_data: {
					bag: {}
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
		if (!storage.xu[message.senderID]) { storage.xu[message.senderID] = 0 };
		if (!storage.trade_data) { storage.trade_data = {} };
		if (!storage.trade_data[message.senderID]) { storage.trade_data[message.senderID] = {} };
		if (!storage.trade_data.bag) { storage.trade_data.bag = {} };
		if (!storage.trade_data[message.senderID].bag) { storage.trade_data[message.senderID].bag = {} };
		if (!storage.trade_data[message.senderID].bag["id5414"]) { storage.trade_data[message.senderID].bag["id5414"] = 0 };
		if (!storage.trade_data[message.senderID].bag["id13212"]) { storage.trade_data[message.senderID].bag["id13212"] = 0 };
		if (!storage.trade_data[message.senderID].bag["id13411"]) { storage.trade_data[message.senderID].bag["id13411"] = 0 };
		if (!storage.trade_data[message.senderID].bag["id4011"]) { storage.trade_data[message.senderID].bag["id4011"] = 0 };
		if (!storage.trade_data[message.senderID].bag["id4012"]) { storage.trade_data[message.senderID].bag["id4012"] = 0 };
		if (!storage.trade_data[message.senderID].bag["id4013"]) { storage.trade_data[message.senderID].bag["id4013"] = 0 };
		if (!storage.trade_data[message.senderID].bag["id1111"]) { storage.trade_data[message.senderID].bag["id1111"] = 0 };
		if (!storage.trade_data[message.senderID].bag["id1112"]) { storage.trade_data[message.senderID].bag["id1112"] = 0 };
		if (!storage.trade_data[message.senderID].bag["id1113"]) { storage.trade_data[message.senderID].bag["id1113"] = 0 };
		if (!storage.trade_data[message.senderID].bag["id7131"]) { storage.trade_data[message.senderID].bag["id7131"] = 0 };
	},

	async onCall(message, reply) {
		let setting = this.storage.account.global.citSetting;
		if (setting.run.setbag != true) {
			return reply("plugin này đã bị tắt")
		}else {
			const storage = this.storage.account.global;
			const uid = Object.keys(message.mentions);
			const uname = Object.values(message.mentions);
			const id = uid[0];
			const name = uname[0];

			const args = parseArgs(message.body, "א");
			const setxu = parseValue(args, ["xu", "x"]);
			const congxu = parseValue(args, ["congxu", "cx"]);
			const item1 = parseValue(args, ["item", "i"]);
			const item2 = parseValue(args, ["item*2", "i*2"]);
			const item3 = parseValue(args, ["item*3", "i*3"]);
			const item4 = parseValue(args, ["item*4", "i*4"]);
			const item5 = parseValue(args, ["item*5", "i*5"]);
			const item6 = parseValue(args, ["item*6", "i*6"]);
			const item7 = parseValue(args, ["item*7", "i*7"]);
			const item8 = parseValue(args, ["item*8", "i*8"]);
			const item9 = parseValue(args, ["item*9", "i*9"]);
			const item10 = parseValue(args, ["item*10", "i*10"]);

			let res = await axios.get("https://raw.githubusercontent.com/Citnut/Citnut/main/KB2Abotdata-pluginTrade.json");
			let data = res.data;

			async function set(item, soluong) {
				if (storage.trade_data[message.senderID].bag[`id${item}`] == undefined) {
					fca.sendMessage(`item id này không tồn tại`, message.threadID, message.messageID)
				}else if (message.body.includes("me") == true) {
					storage.trade_data[message.senderID].bag[`id${item}`] += soluong;
					fca.sendMessage(`bạn đã được thêm ${data[`id${item}`].item} *${soluong} vào túi đồ`, message.threadID, message.messageID)
				}else if (id != undefined) {
					storage.trade_data[id].bag[`id${item}`] += soluong;
					fca.sendMessage({
						body: `${name} đã được thêm ${data[`id${item}`].item} *${soluong} vào túi đồ`,
						mentions: [{
							tag: name,
							id: id
						}]
					}, message.threadID, message.messageID)
				}else {
					fca.sendMessage(`bạn chưa tag mentions`, message.threadID, message.messageID)
				}
			};

			if (!storage.xu[id]) { storage.xu[id] = 0 };
			if (item1) { set(item1, 1) }else
			if (item2) { set(item2, 2) }else
			if (item3) { set(item3, 3) }else
			if (item4) { set(item4, 4) }else
			if (item5) { set(item5, 5) }else
			if (item6) { set(item6, 6) }else
			if (item7) { set(item7, 7) }else
			if (item8) { set(item8, 8) }else
			if (item9) { set(item9, 9) }else
			if (item10) { set(item10, 10) }else
			if (setxu) {
				if (typeof setxu == "number") {
					if (message.body.includes("me") == true) {
						storage.xu[message.senderID] = setxu;
						fca.sendMessage(`ví của bạn đã được đặt số dư thành ${storage.xu[message.senderID]} 💵`, message.threadID, message.messageID)
					}else if (id != undefined) {
						storage.xu[id] = setxu;
						fca.sendMessage({
							body: `ví của ${name} đã được đặt số dư thành ${storage.xu[id]} 💵`,
							mentions: [{
								tag: name,
								id: id
							}]
						}, message.threadID, message.messageID)
					}else {
						fca.sendMessage(`bạn chưa tag mentions`, message.threadID, message.messageID)
					}
				}else {
					fca.sendMessage(`số dư không chính xác`, message.threadID, message.messageID)
				}
			}else if (congxu) {
				if (typeof congxu == "number") {
					if (message.body.includes("me") == true) {
						storage.xu[message.senderID] += congxu;
						fca.sendMessage(`ví của bạn đã được cộng thêm ${congxu} 💵`, message.threadID, message.messageID)
					}else if (id != undefined) {
						storage.xu[id] += congxu;
						fca.sendMessage({
							body: `ví của ${name} đã được cộng thêm ${congxu} 💵`,
							mentions: [{
								tag: name,
								id: id
							}]
						}, message.threadID, message.messageID)
					}else {
						fca.sendMessage(`bạn chưa tag mentions`, message.threadID, message.messageID)
					}
				}else {
					fca.sendMessage(`số dư không chính xác`, message.threadID, message.messageID)
				}
			}
		}
	}
}

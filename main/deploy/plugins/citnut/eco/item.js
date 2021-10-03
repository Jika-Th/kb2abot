const { random, round, getParam } = kb2abot.helpers;
//const setting = require("../setting.json");
const axios = require("axios");

module.exports = {
	name: "lmao",
	keywords:["item", "i"],
	description: "thông tin chi tiết của các item",
	guide: "<item_id>",
	
	hookType: "*",
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
	async onLoad() {
	},
	async onMessage(message, reply) {
	},
	async onCall(message, reply) {
		let setting = this.storage.account.global.citSetting;
		if (setting.run.item != true) {
			return reply("plugin này đã bị tắt")
		}else {
			const input = getParam(message.body);
			const prefix = this.storage.thread.global.prefix;

			async function item(id) {
				const res = await axios.get("https://raw.githubusercontent.com/Citnut/Citnut/main/KB2Abotdata-pluginTrade.json");
				let name = res.data[`id${id}`].item;
				let price = res.data[`id${id}`].price;
				let req = _func = m = dame = db = "";
				let msg = `thông tin item:\n`;

				if (res.data[`id${id}`].req == "id 13212") {
					req = res.data[`id13212`].item
				}else if (res.data[`id${id}`].req == "id 5414") {
					req = res.data[`id5414`].item
				}else { req = "không" };

				if (res.data[`id${id}`].func == "-vHP") {
					_func = "gây sát thương lên nạn nhân";
					dame = `tối thiểu ${res.data[`id${id}`].eff["output"].min}, tối đa ${res.data[`id${id}`].eff["output"].max}`
				}else if (res.data[`id${id}`].func == "+mHP") {
					_func = "hồi phục cho bản thân";
					m = res.data[`id${id}`].eff["output"]
				}else if (res.data[`id${id}`].func == "-d") {
					_func = "chống đạn";
					m = res.data[`id${id}`].eff["input"];
					db = res.data[`id${id}`].eff["limit"]
				}else if (res.data[`id${id}`].func == "use") {
					_func = "use"
				};

				if (_func == "gây sát thương lên nạn nhân") {
					msg += ` + tên: ${name}\n`;
					msg += ` + giá bán: ${price} 💵\n`;
					msg += ` + sử dụng: ${req}\n`;
					msg += ` + sát thương: ${dame}`
				};
				if (_func == "hồi phục cho bản thân") {
					msg += ` + tên: ${name}\n`;
					msg += ` + giá bán: ${price} 💵\n`;
					msg += ` + tác dụng: hồi phục ${m}HP <3`
				};
				if (_func == "chống đạn") {
					msg += ` + tên: ${name}\n`;
					msg += ` + giá bán: ${price} 💵\n`;
					msg += ` + độ bền tối đa: ${db}\n`;
					msg += ` + tác dụng: miễn giảm ${m} sát thương`
				};
				if (_func == "use") {
					msg += ` + tên: ${name}\n`;
					msg += ` + giá bán: ${price} 💵\n`;
					msg += ` + tác dụng: nạp đạn cho ${req}`
				};
				reply(msg)

			};
			if (input == "") { reply(`để xem chi tiết về item nào đó sử dụng: ${prefix}item <item_id>`)
			}else if (input == "5414") { item(5414) 
			}else if (input == "13212") { item(13212) 
			}else if (input == "13411") { item(13411)
			}else if (input == "4011") { item(4011)
			}else if (input == "4012") { item(4012)
			}else if (input == "4013") { item(4013)
			}else if (input == "1111") { item(1111)
			}else if (input == "1112") { item(1112)
			}else if (input == "1113") { item(1113)
			}else if (input == "7131") { item(7131)
			}
		}
	}
}

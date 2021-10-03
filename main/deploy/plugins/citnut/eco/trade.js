const { random, round, parseArgs, parseValue, getParam } = kb2abot.helpers;
//const setting = require("../setting.json");
const axios = require("axios");

module.exports = {
	name: "giao dịch",
	keywords:["trade", "tr"],
	description: "các tùy chọn: buy | sell | store | bag",
	guide: "--buy <item_id> hoặc --sell <item_id>",
	
	hookType: "*",
	childs: [],

	permission: {
		'*': '*'
	},
	datastoreDesign: {
		account: {
			global: {
				xu: {},
				trade_data: {
					bag: {}
				},
				use: {
					equip: {}
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
		if (!storage.use[message.senderID].equip["do_ben_ao1"]) { storage.use[message.senderID].equip["do_ben_ao1"] = 0 };
		if (!storage.use[message.senderID].equip["do_ben_mu1"]) { storage.use[message.senderID].equip["do_ben_mu1"] = 0 };
		if (!storage.use[message.senderID].equip["do_ben_ao2"]) { storage.use[message.senderID].equip["do_ben_ao2"] = 0 };
		if (!storage.use[message.senderID].equip["do_ben_mu2"]) { storage.use[message.senderID].equip["do_ben_mu2"] = 0 };
		if (!storage.use[message.senderID].equip["do_ben_ao3"]) { storage.use[message.senderID].equip["do_ben_ao3"] = 0 };
		if (!storage.use[message.senderID].equip["do_ben_mu3"]) { storage.use[message.senderID].equip["do_ben_mu3"] = 0 };

		if (!storage.use) { storage.use = {} };
		if (!storage.use[message.senderID]) { storage.use[message.senderID] = {} };
		if (!storage.use.equip) { storage.use.equip = {} };
		if (!storage.use[message.senderID].equip) { storage.use[message.senderID].equip = {} }
	},
	async onCall(message, reply) {
		let setting = this.storage.account.global.citSetting;
		if (setting.run.trade != true) {
			return reply("plugin này đã bị tắt")
		}else {
			let bag = this.storage.account.global.trade_data[message.senderID].bag;
			let xu = this.storage.account.global.xu;
			let use = this.storage.account.global.use;

			const args = parseArgs(message.body, "א");
			const buy_item = parseValue(args, ["buy", "b"]);
			const sell_item = parseValue(args, ["sell", "s"]);

			let res = await axios.get("https://raw.githubusercontent.com/Citnut/Citnut/main/KB2Abotdata-pluginTrade.json");
			let data = res.data;
			let a = data.id5414;
			let b = data.id13212;
			let c = data.id13411;
			let d1 = data.id4011;
			let d2 = data.id4012;
			let d3 = data.id4013;
			let e1 = data.id1111;
			let e2 = data.id1112;
			let e3 = data.id1113;
			let f = data.id7131;

			async function rep(msg) { fca.sendMessage(msg, message.threadID, message.messageID) };
			async function check_amor(amor, _db_) {
				if (bag[`id${amor}`] <= 0) { 
					use[message.senderID].equip[_db_] = 0
				}
			};

			if (buy_item) {
				check_amor(4011, "do_ben_ao1");
				check_amor(4012, "do_ben_ao2");
				check_amor(4013, "do_ben_ao3");
				check_amor(1111, "do_ben_mu1");
				check_amor(1112, "do_ben_mu2");
				check_amor(1113, "do_ben_mu3");
				switch(buy_item) {
					case 5414:
					if (xu[message.senderID] > a.price) {
						xu[message.senderID] -= (a.price);
						bag["id5414"] += a.amount;
						rep(`bạn đã mua ${a.item} * ${a.amount}`)
					}else {	rep(`bạn không đủ tiền, số tiền còn thiếu: ${a.price -= xu[message.senderID]} 💵`) }
					break;
					case 13212:
					if (xu[message.senderID] > b.price) {
						xu[message.senderID] -= (b.price);
						bag["id13212"] += b.amount;
						rep(`bạn đã mua ${b.item} * ${b.amount}`)
					}else { rep(`bạn không đủ tiền, số tiền còn thiếu: ${b.price -= xu[message.senderID]} 💵`) }
					break;
					case 13411:
					if (xu[message.senderID] > c.price) {
						xu[message.senderID] -= (c.price);
						bag["id13411"] += c.amount;
						rep(`bạn đã mua ${c.item} * ${c.amount}`)
					}else { rep(`bạn không đủ tiền, số tiền còn thiếu: ${c.price -= xu[message.senderID]} 💵`) }
					break;
					case 4011:
					if (bag["id4011"] >= 1) {
						rep(`bạn không thể sở hữu nhiều hơn 1 cái`)
					}else if (xu[message.senderID] > d1.price) {
						xu[message.senderID] -= (d1.price);
						bag["id4011"] += d1.amount;
						use[message.senderID].equip["do_ben_ao1"] = d1["eff"].limit;
						rep(`bạn đã mua ${d1.item} * ${d1.amount}`)
					}else { rep(`bạn không đủ tiền, số tiền còn thiếu: ${d1.price -= xu[message.senderID]} 💵`) }
					break;
					case 4012:
					if (bag["id4012"] >= 1) {
						rep(`bạn không thể sở hữu nhiều hơn 1 cái`)
					}else if (xu[message.senderID] > d2.price) {
						xu[message.senderID] -= (d2.price);
						bag["id4012"] += d2.amount;
						use[message.senderID].equip["do_ben_ao2"] = d2["eff"].limit;
						rep(`bạn đã mua ${d2.item} * ${d2.amount}`)
					}else { rep(`bạn không đủ tiền, số tiền còn thiếu: ${d2.price -= xu[message.senderID]} 💵`) }
					break;
					case 4013:
					if (bag["id4013"] >= 1) {
						rep(`bạn không thể sở hữu nhiều hơn 1 cái`)
					}else if (xu[message.senderID] > d3.price) {
						xu[message.senderID] -= (d3.price);
						bag["id4013"] += d3.amount;
						use[message.senderID].equip["do_ben_ao3"] = d3["eff"].limit;
						rep(`bạn đã mua ${d3.item} * ${d3.amount}`)
					}else { rep(`bạn không đủ tiền, số tiền còn thiếu: ${d3.price -= xu[message.senderID]} 💵`) }
					break;
					case 1111:
					if (bag["id1111"] >= 1) {
						rep(`bạn không thể sở hữu nhiều hơn 1 cái`)
					}else if (xu[message.senderID] > e1.price) {
						xu[message.senderID] -= (e1.price);
						bag["id1111"] += e1.amount;
						use[message.senderID].equip["do_ben_mu1"] = e1["eff"].limit;
						rep(`bạn đã mua ${e1.item} * ${e1.amount}`)
					}else { rep(`bạn không đủ tiền, số tiền còn thiếu: ${e1.price -= xu[message.senderID]} 💵`) }
					break;
					case 1112:
					if (bag["id1112"] >= 1) {
						rep(`bạn không thể sở hữu nhiều hơn 1 cái`)
					}else if (xu[message.senderID] > e2.price) {
						xu[message.senderID] -= (e2.price);
						bag["id1112"] += e2.amount;
						use[message.senderID].equip["do_ben_mu2"] = e2["eff"].limit;
						rep(`bạn đã mua ${e2.item} * ${e2.amount}`)
					}else { rep(`bạn không đủ tiền, số tiền còn thiếu: ${e2.price -= xu[message.senderID]} 💵`) }
					break;
					case 1113:
					if (bag["id1113"] >= 1) {
						rep(`bạn không thể sở hữu nhiều hơn 1 cái`)
					}else if (xu[message.senderID] > e3.price) {
						xu[message.senderID] -= (e3.price);
						bag["id1113"] += e3.amount;
						use[message.senderID].equip["do_ben_mu3"] = e3["eff"].limit;
						rep(`bạn đã mua ${e3.item} * ${e3.amount}`)
					}else { rep(`bạn không đủ tiền, số tiền còn thiếu: ${e3.price -= xu[message.senderID]} 💵`) }
					break;
					case 7131:
					if (xu[message.senderID] > f.price) {
						xu[message.senderID] -= (f.price);
						bag["id7131"] += f.amount;
						rep(`bạn đã mua ${f.item} * ${f.amount}`)
					}else { rep(`bạn không đủ tiền, số tiền còn thiếu: ${f.price -= xu[message.senderID]} 💵`) }
					break;
					default:
					break	
				}
			};
			if (sell_item) {
				check_amor(4011, "do_ben_ao1");
				check_amor(4012, "do_ben_ao2");
				check_amor(4013, "do_ben_ao3");
				check_amor(1111, "do_ben_mu1");
				check_amor(1112, "do_ben_mu2");
				check_amor(1113, "do_ben_mu3");
				switch(sell_item) {
					case 5414:
						if (bag["id5414"] > 0) {
							xu[message.senderID] += round(random(a.sell.min, a.sell.max), 0);
							bag["id5414"] -= (a.amount);
							rep(`bạn đã bán ${a.item} * ${a.amount}`)
						}else { rep(`bạn chưa sở hữu vật phẩm này, hãy mua nó trước`) }
					break;
					case 13212:
						if (bag["id13212"] > 0) {
							xu[message.senderID] += round(random(b.sell.min, b.sell.max), 0);
							bag["id13212"] -= (b.amount);
							rep(`bạn đã bán ${b.item} * ${b.amount}`)
						}else { rep(`bạn chưa sở hữu vật phẩm này, hãy mua nó trước`) }
					break;
					case 13411:
						if (bag["id13411"] > 0) {
							xu[message.senderID] += round(random(c.sell.min, c.sell.max), 0);
							bag["id13411"] -= (c.amount);
							rep(`bạn đã bán ${c.item} * ${c.amount}`)
						}else { rep(`bạn chưa sở hữu vật phẩm này, hãy mua nó trước`) }
					break;
					case 4011:
						if (bag["id4011"] > 0) {
							xu[message.senderID] += round(random(d1.sell.min, d1.sell.max), 0);
							bag["id4011"] -= (d1.amount);
							rep(`bạn đã bán ${d1.item} * ${d1.amount}`)
						}else { rep(`bạn chưa sở hữu vật phẩm này, hãy mua nó trước`) }
					break;
					case 4012:
						if (bag["id4012"] > 0) {
							xu[message.senderID] += round(random(d2.sell.min, d2.sell.max), 0);
							bag["id4012"] -= (d2.amount);
							rep(`bạn đã bán ${d2.item} * ${d2.amount}`)
						}else { rep(`bạn chưa sở hữu vật phẩm này, hãy mua nó trước`) }
					break;
					case 4013:
						if (bag["id4013"] > 0) {
							xu[message.senderID] += round(random(d3.sell.min, d3.sell.max), 0);
							bag["id4013"] -= (d3.amount);
							rep(`bạn đã bán ${d3.item} * ${d3.amount}`)
						}else { rep(`bạn chưa sở hữu vật phẩm này, hãy mua nó trước`) }
					break;
					case 1111:
						if (bag["id1111"] > 0) {
							xu[message.senderID] += round(random(e1.sell.min, e1.sell.max), 0);
							bag["id1111"] -= (e1.amount);
							rep(`bạn đã bán ${e1.item} * ${e1.amount}`)
						}else { rep(`bạn chưa sở hữu vật phẩm này, hãy mua nó trước`) }
					break;
					case 1112:
						if (bag["id1112"] > 0) {
							xu[message.senderID] += round(random(e2.sell.min, e2.sell.max), 0);
							bag["id1112"] -= (e2.amount);
							rep(`bạn đã bán ${e2.item} * ${e2.amount}`)
						}else { rep(`bạn chưa sở hữu vật phẩm này, hãy mua nó trước`) }
					break;
					case 1113:
						if (bag["id1113"] > 0) {
							xu[message.senderID] += round(random(e3.sell.min, e3.sell.max), 0);
							bag["id1113"] -= (e3.amount);
							rep(`bạn đã bán ${e3.item} * ${e3.amount}`)
						}else { rep(`bạn chưa sở hữu vật phẩm này, hãy mua nó trước`) }
					break;
					case 7131:
						if (bag["id7131"] > 0) {
							xu[message.senderID] += round(random(f.sell.min, f.sell.max), 0);
							bag["id7131"] -= (f.amount);
							rep(`bạn đã bán ${f.item} * ${f.amount}`)
						}else { rep(`bạn chưa sở hữu vật phẩm này, hãy mua nó trước`) }
					break;
					default:
					break
				}
			};
			if (getParam(message.body) == "bag") {
				check_amor(4011, "do_ben_ao1");
				check_amor(4012, "do_ben_ao2");
				check_amor(4013, "do_ben_ao3");
				check_amor(1111, "do_ben_mu1");
				check_amor(1112, "do_ben_mu2");
				check_amor(1113, "do_ben_mu3");
					let msg = `túi đồ của bạn có ${xu[message.senderID]} 💵\n`;

					if (bag["id5414"] > 0) { msg += `${data.id5414.item} * ${bag["id5414"]}\n` };
					if (bag["id13212"] > 0) { msg += `${data.id13212.item} * ${bag["id13212"]} 🧰\n` };
					if (bag["id13411"] > 0) { msg += `${data.id13411.item} * ${bag["id13411"]}\n` };
					if (bag["id4011"] > 0) { msg += `${data.id4011.item} độ bền ${use[message.senderID].equip["do_ben_ao1"]}/${d1["eff"].limit}\n` };
					if (bag["id4012"] > 0) { msg += `${data.id4012.item} độ bền ${use[message.senderID].equip["do_ben_ao2"]}/${d2["eff"].limit}\n` };
					if (bag["id4013"] > 0) { msg += `${data.id4013.item} độ bền ${use[message.senderID].equip["do_ben_ao3"]}/${d3["eff"].limit}\n` }
					if (bag["id1111"] > 0) { msg += `${data.id1111.item} độ bền ${use[message.senderID].equip["do_ben_mu1"]}/${e1["eff"].limit}\n` };
					if (bag["id1112"] > 0) { msg += `${data.id1112.item} độ bền ${use[message.senderID].equip["do_ben_mu2"]}/${e2["eff"].limit}\n` };
					if (bag["id1113"] > 0) { msg += `${data.id1113.item} độ bền ${use[message.senderID].equip["do_ben_mu3"]}/${e3["eff"].limit}\n` };
					if (bag["id7131"] > 0) { msg += `${data.id7131.item} * ${bag["id7131"]}` }

					rep(msg)
			};
			if (getParam(message.body) == "store" || getParam(message.body) == "shop") {
				check_amor(4011, "do_ben_ao1");
				check_amor(4012, "do_ben_ao2");
				check_amor(4013, "do_ben_ao3");
				check_amor(1111, "do_ben_mu1");
				check_amor(1112, "do_ben_mu2");
				check_amor(1113, "do_ben_mu3");
				let msg = `===STORE ⭐===\n`;
					msg += `id 5414 (${data.id5414.item}) giá ${data.id5414.price} 💵\n`;
					msg += `id 13212 (${data.id13212.item}) giá ${data.id13212.price} 💵\n`;
					msg += `id 13411 (${data.id13411.item}) giá ${data.id13411.price} 💵\n`;
					msg += `id 4011 (${data.id4011.item}) giá ${data.id4011.price} 💵\n`;
					msg += `id 4012 (${data.id4012.item}) giá ${data.id4012.price} 💵\n`;
					msg += `id 4013 (${data.id4013.item}) giá ${data.id4013.price} 💵\n`;
					msg += `id 1111 (${data.id1111.item}) giá ${data.id1111.price} 💵\n`;
					msg += `id 1112 (${data.id1112.item}) giá ${data.id1112.price} 💵\n`;
					msg += `id 1113 (${data.id1113.item}) giá ${data.id1113.price} 💵\n`;
					msg += `id 7131 (${data.id7131.item}) giá ${data.id7131.price} 💵`;
				rep(msg)
			}
		}
	}
}

const { random, round, parseArgs, parseValue, getParam } = kb2abot.helpers;
//const setting = require("../setting.json");
const axios = require("axios");

module.exports = {
	
	name: "sử dụng vật phẩm trong túi đồ",
	keywords:["slot", "s"],
	description: "các tùy chọn: help | e ",
	guide: "<--number> <mention>",
	
	hookType: "*",
	childs: [],

	permission: {
		'*': '*'
	},
	datastoreDesign: {
		account: {
			global: {
				use: {
					slot: {},
					equip: {},
					amor: {}
				},
				trade_data: {
					bag: {}
				}
			},
			local: {}
		},
		thread: {
			global: {},
			local: {
				HP: {},
				respawn: {}
			}
		}
	},
	async onLoad() {
	},
	async onMessage(message, reply) {
		const storage = this.storage.account.global;
		const thread = this.storage.thread.local;
		const time = new Date;
		if (!storage.use) { storage.use = {} };
		if (!storage.use[message.senderID]) { storage.use[message.senderID] = {} };
		if (!storage.use.slot) { storage.use.slot = {} };
		if (!storage.use.equip) { storage.use.equip = {} };
		if (!storage.use[message.senderID].slot) { storage.use[message.senderID].slot = {} };
		if (!storage.use[message.senderID].slot[1]) { storage.use[message.senderID].slot[1] = "trống" };
		if (!storage.use[message.senderID].slot[2]) { storage.use[message.senderID].slot[2] = "trống" };
		if (!storage.use[message.senderID].slot[3]) { storage.use[message.senderID].slot[3] = "trống" };
		if (!storage.use[message.senderID].slot[4]) { storage.use[message.senderID].slot[4] = "trống" };
		if (!storage.use[message.senderID].equip) { storage.use[message.senderID].equip = {} };
		if (!storage.use[message.senderID].equip["ao"]) { storage.use[message.senderID].equip["ao"] = "chưa có" };
		if (!storage.use[message.senderID].equip["mu"]) { storage.use[message.senderID].equip["mu"] = "chưa có" };
		if (!storage.use.amor) { storage.use.amor = {} };
		if (!storage.use[message.senderID].amor) { storage.use[message.senderID].amor = {} };
		if (!storage.use[message.senderID].amor["ao"]) { storage.use[message.senderID].amor["ao"] = 0 };
		if (!storage.use[message.senderID].amor["mu"]) { storage.use[message.senderID].amor["mu"] = 0 };
		if (storage.use[message.senderID].equip["do_ben_ao1"] < 0) { storage.use[message.senderID].equip["do_ben_ao1"] = 0 };
		if (storage.use[message.senderID].equip["do_ben_mu1"] < 0) { storage.use[message.senderID].equip["do_ben_mu1"] = 0 };
		if (storage.use[message.senderID].equip["do_ben_ao2"] < 0) { storage.use[message.senderID].equip["do_ben_ao2"] = 0 };
		if (storage.use[message.senderID].equip["do_ben_mu2"] < 0) { storage.use[message.senderID].equip["do_ben_mu2"] = 0 };
		if (storage.use[message.senderID].equip["do_ben_ao3"] < 0) { storage.use[message.senderID].equip["do_ben_ao3"] = 0 };
		if (storage.use[message.senderID].equip["do_ben_mu3"] < 0) { storage.use[message.senderID].equip["do_ben_mu3"] = 0 };
		if (storage.use[message.senderID].truyna) { storage.use[message.senderID].truyna = 0 };
		//if (!storage.use[message.senderID].victim) { storage.use[message.senderID].victim = {} };
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

		if (!thread.HP) { thread.HP = {} };
		if (!thread.respawn) { thread.respawn = {} };
		if (!thread.respawn[message.senderID]) { thread.respawn[message.senderID] = 0 };
		if (!storage.respawn_cooldown) { storage.respawn_cooldown = 600 };
		if (!storage.recuperatecooldown) { storage.recuperatecooldown = {} };
		if (!storage.recuperatecooldown[message.senderID]) { storage.recuperatecooldown[message.senderID] = 0 };
		if (storage.respawn_cooldown != 600) { storage.respawn_cooldown = 600 };
		if (thread.HP[message.senderID] < 0) { thread.HP[message.senderID] = 0 };
		if (thread.HP[message.senderID] > 100) { thread.HP[message.senderID] = 100 };
		if (thread.HP[message.senderID] == null) { thread.HP[message.senderID] = 100 };
			
		async function respawn(target) {
			if (time.getTime() > thread.respawn[target] + (storage.respawn_cooldown * 1000) && thread.HP[target] <= 0) {
				fca.getUserInfo(target, (err, ret) => {
					let prop = Object.keys(ret);
					if (ret.hasOwnProperty(prop) && ret[prop].name) {
						let name = ret[prop].name
						thread.respawn[target] = 0;
						thread.HP[target] = 100;
						reply({
							body: `${name}, bạn đã được ra viện`,
							mentions: [{
								tag: name,
								id: target
							}]
						}, message.threadID)
					}
				})
			}
		};respawn(message.senderID) 
	},
	async onCall(message, reply) {
		let setting = this.storage.account.global.citSetting;
		if (setting.run.slot != true) {
			return reply("plugin này đã bị tắt")
		}else {
			const storage = this.storage.account.global;
			const thread = this.storage.thread.local;
			const time = new Date;
			const bandages_cd = 5000;
			const injections_cd = 7000;

			let input = getParam(message.body);
			let res = await axios.get("https://raw.githubusercontent.com/Citnut/Citnut/main/KB2Abotdata-pluginTrade.json");
			let item1 = res.data.id5414;
			let item2 = res.data.id13212;
			let item3 = res.data.id13411;
			let item4 = { "1": res.data.id4011, "2": res.data.id4012, "3": res.data.id4013 };
			let item5 = { "1": res.data.id1111, "2": res.data.id1112, "3": res.data.id1113 };
			let item6 = res.data.id7131;

			async function rep(msg) { fca.sendMessage(msg, message.threadID, message.messageID) };
			async function check_amor(amor, _db_) {
				if (storage.trade_data.bag[`id${amor}`] <= 0) { 
					storage.use[message.senderID].equip[_db_] = 0
				}
			};
			async function check(num_slot) {
				switch (storage.use[message.senderID].slot[num_slot]) {
					case item1.item: if (storage.trade_data[message.senderID].bag["id5414"] <= 0) { storage.use[message.senderID].slot[num_slot] = "trống" } break;
					case item2.item: if (storage.trade_data[message.senderID].bag["id13212"] <= 0) { storage.use[message.senderID].slot[num_slot] = "trống" } break;
					case item3.item: if (storage.trade_data[message.senderID].bag["id13411"] <= 0) { storage.use[message.senderID].slot[num_slot] = "trống" } break;
					case item4["1"].item: if (storage.trade_data[message.senderID].bag["id4011"] <= 0) { storage.use[message.senderID].slot[num_slot] = "trống" } break;
					case item4["2"].item: if (storage.trade_data[message.senderID].bag["id4012"] <= 0) { storage.use[message.senderID].slot[num_slot] = "trống" } break;
					case item4["3"].item: if (storage.trade_data[message.senderID].bag["id4013"] <= 0) { storage.use[message.senderID].slot[num_slot] = "trống" } break;
					case item5["1"].item: if (storage.trade_data[message.senderID].bag["id1111"] <= 0) { storage.use[message.senderID].slot[num_slot] = "trống" } break;
					case item5["2"].item: if (storage.trade_data[message.senderID].bag["id1112"] <= 0) { storage.use[message.senderID].slot[num_slot] = "trống" } break;
					case item5["3"].item: if (storage.trade_data[message.senderID].bag["id1113"] <= 0) { storage.use[message.senderID].slot[num_slot] = "trống" } break;
					case item6.item: if (storage.trade_data[message.senderID].bag["id7131"] <= 0) { storage.use[message.senderID].slot[num_slot] = "trống" } break;
					default: break
				}
			};
			async function run(lmao) {
				check_amor(4011, "do_ben_ao1");
				check_amor(4012, "do_ben_ao2");
				check_amor(4013, "do_ben_ao3");
				check_amor(1111, "do_ben_mu1");
				check_amor(1112, "do_ben_mu2");
				check_amor(1113, "do_ben_mu3");
				let uid = Object.keys(message.mentions);
				let victim = uid[0];
				//console.log(victim);
				check(1); check(2); check(3); check(4);/*
				if (time.getTime() < storage.recuperatecooldown[message.senderID] + bandages_cd) {
					let recuperate_bandages_cd = (storage.recuperatecooldown[message.senderID] + bandages_cd) - time.getTime()
				};
				if (time.getTime() < storage.recuperatecooldown[message.senderID] + injections_cd) {
					let recuperate_injections_cd = (storage.recuperatecooldown[message.senderID] + injections_cd) - time.getTime()
				};*/
				if (victim != undefined) {
					fca.getUserInfo(victim, (err, ret) => {
						//let prop = Object.keys(ret);
						for (let prop in ret) {
						if (ret.hasOwnProperty(prop) && ret[prop].name) {
							let name = ret[prop].name;
							//if (!storage.use[message.senderID].victim[victim]) { storage.use[message.senderID].victim[victim] = 0 };
							let end = [
							`👮 cảnh sát đã phát hiện thi thể của ${name} với nhiều vết đạn trên người`,
							`📺 chương trình thời sự xin được phép bắt đầu với những tin nóng trong ngày, một vụ xả súng đẫm máu đã diễn ra ở Nhật Bản ⛩ với nhiều người thiệt mạng và trong đó có ${name}`,
							`hôm nay một thi thể với nhiều vết đạn trên cơ thể trôi dạt bờ sông Hồng và được những người dân đang câu cá phát hiện và vớt lên`,
							`👮 cảnh sát đã phát hiện thi thể của ${name} trong thùng rác với nhiều vết đạn trên người`,
							`chúng tôi xin chia buồn cùng gia đình của cảnh sát viên ${name}, người đã bị bắn chết trong lúc làm nhiệm vụ chống khủng bố`,
							`một nhóm khủng bố đã liên tục xả xúng trong siêu thị gây ra quang cảnh hỗn loạn nặng nề và nhiều người đã thiệt mạng trong đó có ${name}`,
							`${name} đã bị bắn chết ☠️`
							];/*
							if (time.getTime() < thread.respawn[message.senderID] + (storage.respawn_cooldown * 1000)) {
								let cooldown = (thread.respawn[message.senderID] + (storage.respawn_cooldown * 1000)) - time.getTime()
							};*/
							if (lmao == item1.item) {
								if (thread.HP[message.senderID] <= 0) {
									let cooldown = (thread.respawn[message.senderID] + (storage.respawn_cooldown * 1000)) - time.getTime();
									rep(`bạn sẽ ra viện sau ${round((cooldown/60000), 1)} phút`)
								}else if (thread.HP[victim] <= 0) {
									thread.HP[victim] = 0;
									rep(`☠️ nạn nhân này đã tử trận ☠️`)
								}else if (storage.trade_data[message.senderID].bag["id13212"] <= 0) {
									rep(`bạn không có ${item2.item}`)
								}else if (storage.trade_data[message.senderID].bag["id5414"] > 0) {
									storage.trade_data[message.senderID].bag["id13212"] -= item1["eff"].input;
									//let dame = round(random(item1["eff"].output["min"], item1["eff"].output["max"]), 0);
									//fire(victim);
									//storage.use[message.senderID].victim[victim] += 1;
									let d = 0;
									let dame = round(random(item1["eff"].output["min"], item1["eff"].output["max"]), 0);
									//console.log(`real: ${dame}`)
									if (storage.use[victim].amor["ao"] == item4["1"]["eff"].input) {
										d += storage.use[victim].amor["ao"];
										storage.use[victim].equip["do_ben_ao1"] -= item4["1"]["eff"].input;
										if (storage.use[victim].equip["do_ben_ao1"] <= 0) {
											storage.use[victim].equip["ao"] = "chưa có";
											storage.use[victim].amor["ao"] = 0;
											storage.trade_data[victim].bag["id4011"] = 0;
											fca.sendMessage({ body: `${item4["1"].item} của ${name} đã bị hỏng`, mentions: [{ tag: name, id: c }] })
										}
									};
									if (storage.use[victim].amor["ao"] == item4["2"]["eff"].input) {
										d += storage.use[victim].amor["ao"];
										storage.use[victim].equip["do_ben_ao2"] -= item4["2"]["eff"].input;
										if (storage.use[victim].equip["do_ben_ao2"] <= 0) {
											storage.use[victim].equip["ao"] = "chưa có";
											storage.use[victim].amor["ao"] = 0;
											storage.trade_data[victim].bag["id4012"] = 0;
											fca.sendMessage({ body: `${item4["2"].item} của ${name} đã bị hỏng`, mentions: [{ tag: name, id: c }] })
										}
									};
									if (storage.use[victim].amor["ao"] == item4["3"]["eff"].input) {
										d += storage.use[victim].amor["ao"];
										storage.use[victim].equip["do_ben_ao3"] -= item4["3"]["eff"].input;
										if (storage.use[victim].equip["do_ben_ao3"] <= 0) {
											storage.use[victim].equip["ao"] = "chưa có";
											storage.use[victim].amor["ao"] = 0;
											storage.trade_data[victim].bag["id4013"] = 0;
											fca.sendMessage({ body: `${item4["3"].item} của ${name} đã bị hỏng`, mentions: [{ tag: name, id: c }] })
										}
									};
									if (storage.use[victim].amor["mu"] == item5["1"]["eff"].input) {
										d += storage.use[victim].amor["mu"];
										storage.use[victim].equip["do_ben_mu1"] -= item5["1"]["eff"].input;
										if (storage.use[victim].equip["do_ben_mu1"] <= 0) {
											storage.use[victim].equip["mu"] = "chưa có";
											storage.trade_data[victim].bag["id1111"] = 0;
											storage.use[victim].amor["mu"] = 0;
											fca.sendMessage({ body: `${item5["1"].item} của ${name} đã bị hỏng`, mentions: [{ tag: name, id: c }] })
										}
									};
									if (storage.use[victim].amor["mu"] == item5["2"]["eff"].input) {
										d += storage.use[victim].amor["mu"];
										storage.use[victim].equip["do_ben_mu2"] -= item5["2"]["eff"].input;
										if (storage.use[victim].equip["do_ben_mu2"] <= 0) {
											storage.use[victim].equip["mu"] = "chưa có";
											storage.use[victim].amor["mu"] = 0;
											storage.trade_data[victim].bag["id1112"] = 0;
											fca.sendMessage({ body: `${item5["2"].item} của ${name} đã bị hỏng`, mentions: [{ tag: name, id: c }] })
										}
									};
									if (storage.use[victim].amor["mu"] == item5["3"]["eff"].input) {
										d += storage.use[victim].amor["mu"];
										storage.use[victim].equip["do_ben_mu3"] -= item5["3"]["eff"].input;
										if (storage.use[victim].equip["do_ben_mu3"] <= 0) {
											storage.use[victim].equip["mu"] = "chưa có";
											storage.use[victim].amor["mu"] = 0;
											storage.trade_data[victim].bag["id1113"] = 0;
											fca.sendMessage({ body: `${item5["3"].item} của ${name} đã bị hỏng`, mentions: [{ tag: name, id: c }] })
										}
									};

									dame -= d;
									//console.log(dame);
									thread.HP[victim] -= dame;
									if (thread.HP[victim] <= 0) {
										thread.respawn[victim] = time.getTime();
										thread.HP[victim] = 0;
										rep(`${end[round(random(0, 6), 0)]}`);
										storage.use[message.senderID].truyna += 1
										//storage.use[message.senderID].victim[victim] = 0
									}
								}else { rep(`bạn không có ${item1.item}`) }
							}else {  }
						}else { rep(`đã sảy ra lỗi`) }
					}})
				}else if (lmao == item3.item) {
					if (time.getTime() < storage.recuperatecooldown[message.senderID] + bandages_cd) {
						let recuperate_bandages_cd = (storage.recuperatecooldown[message.senderID] + bandages_cd) - time.getTime();
						rep(`vui lòng đợi ${round(recuperate_bandages_cd/1000, 0)} giây`)
					}else if (storage.trade_data[message.senderID].bag["id13411"] <= 0) {
						rep(`bạn không có ${item3.item}`)
					}else if (thread.HP[message.senderID] == 100) {
						rep(`HP đã đầy không thể sử dụng ${item3.item}`)
					}else if (thread.HP[message.senderID] <= 0) {
						rep(`bạn không thể sử dụng ${item3.item} khi đang cấp cứu`)
					}else {
						(storage.trade_data[message.senderID].bag["id13411"] -= item3["eff"].input);
						thread.HP[message.senderID] += item3["eff"].output;
						storage.recuperatecooldown[message.senderID] = time.getTime();
						rep(`bạn đã quấn băng và hồi phục`)
					}
				}else if (lmao == item6.item) {
					if (time.getTime() < storage.recuperatecooldown[message.senderID] + injections_cd) {
						let recuperate_injections_cd = (storage.recuperatecooldown[message.senderID] + injections_cd) - time.getTime();
						rep(`vui lòng đợi ${round(recuperate_injections_cd/1000, 0)} giây`)
					}else if (storage.trade_data[message.senderID].bag["id7131"] <= 0) {
						rep(`bạn không có ${item6.item}`)
					}else if (thread.HP[message.senderID] == 100) {
						rep(`HP đã đầy không thể sử dụng ${item6.item}`)
					}else if (thread.HP[message.senderID] <= 0) {
						rep(`bạn không thể sử dụng ${item6.item} khi đang cấp cứu`)
					}else {
						(storage.trade_data[message.senderID].bag["id7131"] -= item6["eff"].input);
						thread.HP[message.senderID] += item6["eff"].output;
						storage.recuperatecooldown[message.senderID] = time.getTime();
						rep(`bạn đã sử dụng ${item6.item}`)
					}
				}
			};
			async function setSlot(_slot, _num_slot) {
				switch (_num_slot) {
				case 5414:
					if (storage.trade_data[message.senderID].bag["id5414"] <= 0) { rep(`bạn không có ${item1.item} trong túi đồ`) }
					else
					storage.use[message.senderID].slot[_slot] = item1.item;
					rep(`đã đặt ${item1.item} vào slot ${_slot}`)
				break;
				case 13212:
				if (storage.trade_data[message.senderID].bag["id13212"] <= 0) { rep(`bạn không có ${item2.item} trong túi đồ`) }
					else
					storage.use[message.senderID].slot[_slot] = item2.item;
					rep(`đã đặt ${item2.item} vào slot ${_slot}`)
				break;
				case 13411:
				if (storage.trade_data[message.senderID].bag["id13411"] <= 0) { rep(`bạn không có ${item3.item} trong túi đồ`) }
					else
					storage.use[message.senderID].slot[_slot] = item3.item;
					rep(`đã đặt ${item3.item} vào slot ${_slot}`)
				break;
				case 4011:
				if (storage.trade_data[message.senderID].bag["id4011"] <= 0) { rep(`bạn không có ${item4["1"].item} trong túi đồ`) }
					else
					storage.use[message.senderID].slot[_slot] = item4["1"].item;
					rep(`đã đặt ${item4["1"].item} vào slot ${_slot}`)
				break;
				case 4012:
				if (storage.trade_data[message.senderID].bag["id4012"] <= 0) { rep(`bạn không có ${item4["2"].item} trong túi đồ`) }
					else
					storage.use[message.senderID].slot[_slot] = item4["2"].item;
					rep(`đã đặt ${item4["2"].item} vào slot ${_slot}`)
				break;
				case 4013:
				if (storage.trade_data[message.senderID].bag["id4013"] <= 0) { rep(`bạn không có ${item4["3"].item} trong túi đồ`) }
					else
					storage.use[message.senderID].slot[_slot] = item4["3"].item;
					rep(`đã đặt ${item4["3"].item} vào slot ${_slot}`)
				break;
				case 1111:
				if (storage.trade_data[message.senderID].bag["id1111"] <= 0) { rep(`bạn không có ${item5["1"].item} trong túi đồ`) }
					else
					storage.use[message.senderID].slot[_slot] = item5["1"].item;
					rep(`đã đặt ${item5["1"].item} vào slot ${_slot}`)
				break;
				case 1112:
				if (storage.trade_data[message.senderID].bag["id1112"] <= 0) { rep(`bạn không có ${item5["2"].item} trong túi đồ`) }
					else
					storage.use[message.senderID].slot[_slot] = item5["2"].item;
					rep(`đã đặt ${item5["2"].item} vào slot ${_slot}`)
				break;
				case 1113:
				if (storage.trade_data[message.senderID].bag["id1113"] <= 0) { rep(`bạn không có ${item5["3"].item} trong túi đồ`) }
					else
					storage.use[message.senderID].slot[_slot] = item5["3"].item;
					rep(`đã đặt ${item5["3"].item} vào slot ${_slot}`)
				break;
				case 7131:
				if (storage.trade_data[message.senderID].bag["id7131"] <= 0) { rep(`bạn không có ${item6.item} trong túi đồ`) }
					else
					storage.use[message.senderID].slot[_slot] = item6.item;
					rep(`đã đặt ${item6.item} vào slot ${_slot}`)
				break;
				default:
					check(1); check(2); check(3); check(4);
					check_amor(4011, "do_ben_ao1");
					check_amor(4012, "do_ben_ao2");
					check_amor(4013, "do_ben_ao3");
					check_amor(1111, "do_ben_mu1");
					check_amor(1112, "do_ben_mu2");
					check_amor(1113, "do_ben_mu3");
			 		if (storage.use[message.senderID].slot[_slot] == item1.item) { run(item1.item) }else
					if (storage.use[message.senderID].slot[_slot] == item2.item) { run(item1.item) }else
					if (storage.use[message.senderID].slot[_slot] == item3.item) { run(item3.item) }else
					if (storage.use[message.senderID].slot[_slot] == item4["1"].item) { run(item4["1"].item) }else
					if (storage.use[message.senderID].slot[_slot] == item4["2"].item) { run(item4["2"].item) }else
					if (storage.use[message.senderID].slot[_slot] == item4["3"].item) { run(item4["3"].item) }else
					if (storage.use[message.senderID].slot[_slot] == item5["1"].item) { run(item5["1"].item) }else
					if (storage.use[message.senderID].slot[_slot] == item5["2"].item) { run(item5["2"].item) }else
					if (storage.use[message.senderID].slot[_slot] == item5["3"].item) { run(item5["3"].item) }else
					if (storage.use[message.senderID].slot[_slot] == item6.item) { run(item6.item) }else
					{ rep(`slot ${_slot} không có vật phẩm nào`) };
				break
				}
			};
			
			async function _equip(_equip_item) {
				switch (_equip_item) {
					case 4011: 
						if (storage.trade_data[message.senderID].bag["id4011"] <= 0) {
							rep(`bạn chưa sở hữu ${item4["1"].item}`)
						}else if (storage.use[message.senderID].equip["do_ben_ao1"] <= 0) {
							rep(`bạn đã trang bị ${item4["1"].item}`);
							storage.use[message.senderID].equip["ao"] = item4["1"].item;
							storage.use[message.senderID].equip["do_ben_ao1"] = item4["1"]["eff"].limit;
							storage.use[message.senderID].amor["ao"] = item4["1"]["eff"].input
						}else {
							rep(`bạn đã trang bị ${item4["1"].item}`);
							storage.use[message.senderID].equip["ao"] = item4["1"].item;
							storage.use[message.senderID].amor["ao"] = item4["1"]["eff"].input
						}
					break;
					case 4012: 
						if (storage.trade_data[message.senderID].bag["id4012"] <= 0) {
							rep(`bạn chưa sở hữu ${item4["2"].item}`)
						}else if (storage.use[message.senderID].equip["do_ben_ao2"] <= 0) {
							rep(`bạn đã trang bị ${item4["2"].item}`);
							storage.use[message.senderID].equip["ao"] = item4["2"].item;
							storage.use[message.senderID].equip["do_ben_ao2"] = item4["2"]["eff"].limit;
							storage.use[message.senderID].amor["ao"] = item4["2"]["eff"].input
						}else {
							rep(`bạn đã trang bị ${item4["2"].item}`);
							storage.use[message.senderID].equip["ao"] = item4["2"].item;
							storage.use[message.senderID].amor["ao"] = item4["2"]["eff"].input
						}
					break;
					case 4013: 
						if (storage.trade_data[message.senderID].bag["id4013"] <= 0) {
							rep(`bạn chưa sở hữu ${item4["3"].item}`)
						}else if (storage.use[message.senderID].equip["do_ben_ao3"] <= 0) {
							rep(`bạn đã trang bị ${item4["3"].item}`);
							storage.use[message.senderID].equip["ao"] = item4["3"].item;
							storage.use[message.senderID].equip["do_ben_ao3"] = item4["3"]["eff"].limit;
							storage.use[message.senderID].amor["ao"] = item4["3"]["eff"].input
						}else {
							rep(`bạn đã trang bị ${item4["3"].item}`);
							storage.use[message.senderID].equip["ao"] = item4["3"].item;
							storage.use[message.senderID].amor["ao"] = item4["3"]["eff"].input
						}
					break;
					case 1111: 
						if (storage.trade_data[message.senderID].bag["id1111"] <= 0) {
							rep(`bạn chưa sở hữu ${item5["1"].item}`)
						}else if (storage.use[message.senderID].equip["do_ben_mu1"] <= 0) {
							rep(`bạn đã trang bị ${item5["1"].item}`);
							storage.use[message.senderID].equip["mu"] = item5["1"].item;
							storage.use[message.senderID].equip["do_ben_mu1"] = item5["1"]["eff"].limit;
							storage.use[message.senderID].amor["mu"] = item5["1"]["eff"].input
						}else {
							rep(`bạn đã trang bị ${item5["1"].item}`);
							storage.use[message.senderID].equip["mu"] = item5["1"].item;
							storage.use[message.senderID].amor["mu"] = item5["1"]["eff"].input
						}
					break;
					case 1112: 
						if (storage.trade_data[message.senderID].bag["id1112"] <= 0) {
							rep(`bạn chưa sở hữu ${item5["2"].item}`)
						}else if (storage.use[message.senderID].equip["do_ben_mu2"] <= 0) {
							rep(`bạn đã trang bị ${item5["2"].item}`);
							storage.use[message.senderID].equip["mu"] = item5["2"].item;
							storage.use[message.senderID].equip["do_ben_mu2"] = item5["2"]["eff"].limit;
							storage.use[message.senderID].amor["mu"] = item5["2"]["eff"].input
						}else {
							rep(`bạn đã trang bị ${item5["2"].item}`);
							storage.use[message.senderID].equip["mu"] = item5["2"].item;
							storage.use[message.senderID].amor["mu"] = item5["2"]["eff"].input
						}
					break;
					case 1113: 
						if (storage.trade_data[message.senderID].bag["id1113"] <= 0) {
							rep(`bạn chưa sở hữu ${item5["3"].item}`)
						}else if (storage.use[message.senderID].equip["do_ben_mu3"] <= 0) {
							rep(`bạn đã trang bị ${item5["3"].item}`);
							storage.use[message.senderID].equip["mu"] = item5["3"].item;
							storage.use[message.senderID].equip["do_ben_mu3"] = item5["3"]["eff"].limit;
							storage.use[message.senderID].amor["mu"] = item5["3"]["eff"].input
						}else {
							rep(`bạn đã trang bị ${item5["3"].item}`);
							storage.use[message.senderID].equip["mu"] = item5["3"].item;
							storage.use[message.senderID].amor["mu"] = item5["3"]["eff"].input
						}
					break;
					default:
					break;
					check_amor(4011, "do_ben_ao1");
					check_amor(4012, "do_ben_ao2");
					check_amor(4013, "do_ben_ao3");
					check_amor(1111, "do_ben_mu1");
					check_amor(1112, "do_ben_mu2");
					check_amor(1113, "do_ben_mu3");
				}
			};

			const args = parseArgs(message.body, "א");
			const slot1 = parseValue(args, ["1", "1"]);
			const slot2 = parseValue(args, ["2", "2"]);
			const slot3 = parseValue(args, ["3", "3"]);
			const slot4 = parseValue(args, ["4", "4"]);
			const equip = parseValue(args, ["equip", "eq"]);

			if (slot1) { setSlot(1, slot1) }else
			if (slot2) { setSlot(2, slot2) }else
			if (slot3) { setSlot(3, slot3) }else
			if (slot4) { setSlot(4, slot4) }else
			if (equip) { _equip(equip) }else 
			if (input == "help") {
			check_amor(4011, "do_ben_ao1");
			check_amor(4012, "do_ben_ao2");
			check_amor(4013, "do_ben_ao3");
			check_amor(1111, "do_ben_mu1");
			check_amor(1112, "do_ben_mu2");
			check_amor(1113, "do_ben_mu3");
			let msg = `hướng dẫn:\n`;
				msg += `mỗi người sẽ có 4 slot\n`;
				msg += `để đặt item vào slot: slot <--number> <item_id>\n`;
				msg += `để sử dụng item ở slot đó: slot <--number> <tag_victim> hoặc slot <--number>\n`;
				msg += `để mặc (áo/mũ) giáp: slot --equip <item_id>\n`
				msg += `<--number> là số của slot đó, <item_id> xem ở trade store, <tag_victim> tag một nạn nhân xấu số`;
			rep(msg)
			}else if (input == "e") {
				check_amor(4011, "do_ben_ao1");
				check_amor(4012, "do_ben_ao2");
				check_amor(4013, "do_ben_ao3");
				check_amor(1111, "do_ben_mu1");
				check_amor(1112, "do_ben_mu2");
				check_amor(1113, "do_ben_mu3");
				let msg = `${thread.HP[message.senderID]}/100 HP <3\n`;
				if (storage.use[message.senderID].slot[1] != "trống") {
					msg += `slot 1: ${storage.use[message.senderID].slot[1]}\n`
				};
				if (storage.use[message.senderID].slot[2] != "trống") {
					msg += `slot 2: ${storage.use[message.senderID].slot[2]}\n`
				};
				if (storage.use[message.senderID].slot[3] != "trống") {
					msg += `slot 3: ${storage.use[message.senderID].slot[3]}\n`
				};
				if (storage.use[message.senderID].slot[4] != "trống") {
					msg += `slot 1: ${storage.use[message.senderID].slot[4]}\n`
				};
				if (thread.HP[message.senderID] <= 0) {
					let cooldown = (thread.respawn[message.senderID] + (storage.respawn_cooldown * 1000)) - time.getTime();
					msg += `bạn sẽ ra viện sau ${round((cooldown/60000), 1)} phút\n`
				};
				if (storage.use[message.senderID].equip["ao"] == item4["1"].item) { 
					msg += `+ ${item4["1"].item} độ bền ${storage.use[message.senderID].equip["do_ben_ao1"]}/${item4["1"]["eff"].limit}\n` 
				}else if (storage.use[message.senderID].equip["ao"] == item4["2"].item) {
					msg += `+ ${item4["2"].item} độ bền ${storage.use[message.senderID].equip["do_ben_ao2"]}/${item4["2"]["eff"].limit}\n` 
				}else if (storage.use[message.senderID].equip["ao"] == item4["3"].item) {
					msg += `+ ${item4["3"].item} độ bền ${storage.use[message.senderID].equip["do_ben_ao3"]}/${item4["3"]["eff"].limit}\n` 
				};
				if (storage.use[message.senderID].equip["mu"] == item5["1"].item) { 
					msg += `+ ${item5["1"].item} độ bền ${storage.use[message.senderID].equip["do_ben_mu1"]}/${item5["1"]["eff"].limit}\n` 
				}else if (storage.use[message.senderID].equip["mu"] == item5["2"].item) { 
					msg += `+ ${item5["2"].item} độ bền ${storage.use[message.senderID].equip["do_ben_mu2"]}/${item5["2"]["eff"].limit}\n` 
				}else if (storage.use[message.senderID].equip["mu"] == item5["3"].item) { 
					msg += `+ ${item5["3"].item} độ bền ${storage.use[message.senderID].equip["do_ben_mu3"]}/${item5["3"]["eff"].limit}\n` 
				};
				rep(msg)
			}
		}
	}
}
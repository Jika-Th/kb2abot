//const { /*get helper functions or somthing idk :|*/ } = kb2abot.helpers[''];
const pidusage = require("pidusage");
const axios = require('axios');
const moment = require("moment-timezone");
const fetch = require("node-fetch");
const streamBuffers = require("stream-buffers");
const { adname, arr } = require("./func.js");
const mainpack = require("../../../../package.json");

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
};

module.exports = {
	keywords: ['upt', 'uptime'],
	name: 'uptime',
	description: 'Citnut :3',

	guide: '',
	childs: [],
	permission: {
		'*': '*'
	},
	datastoreDesign: {
		account: {
			global: {},
			local: {},
		},
		thread: {
			global: {},
			local: {},
		},
	},
	async onLoad() {},

	hookType: 'none',
	async onMessage(message, reply) {},

	async onCall(message, reply) {
		let gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss"),
			prefix = this.storage.thread.global.prefix,
			time = process.uptime(),
			hours = Math.floor(time / (60 * 60)),
			minutes = Math.floor((time % (60 * 60)) / 60),
			seconds = Math.floor(time % 60),
			timeStart = Date.now(),
			res = await axios.get('https://api.vinhbeat.ga/gai.php'),
			cpuuu = await pidusage(process.pid);

		try {
			let r = await fetch(res.data.data),
				buf = await r.buffer(),
				img = new streamBuffers.ReadableStreamBuffer({frequency: 10, chunkSize: 1024}),
				talk = arr[Math.floor(Math.random() * parseInt(arr.length))];
				img.path = "wibu.jpg", img.put(buf), img.stop();
			fca.sendMessage({
				body: `Hiện tại đang là: ${gio} và bot của ${adname} đã hoạt động được ${hours} giờ ${minutes} phút ${seconds} giây.\n🐳Bot: ${mainpack.name}\n🐳Prefix: ${prefix}\n🐳Version: ${mainpack.version}\n🐳Cpu đang sử dụng: ${cpuuu.cpu.toFixed(1)}\n🐳Ram đang sử dụng: ${byte2mb(cpuuu.memory)}\n🐳Ping: ${Date.now() - timeStart}ms\n💬💬💬\n${talk}`,
				attachment: img
			}, message.threadID, message.messageID)
		}catch (e) {
			reply(`đã xảy ra lỗi`);
			console.newLogger.error(e)
		}
	}
}
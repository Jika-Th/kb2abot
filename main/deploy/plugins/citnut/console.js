const { getUserInfo, getThreadInfo } = kb2abot.helpers.fca;
const { getParam } = kb2abot.helpers;
const colors = require("colors");
////edit here////
const mytheme = "mirai";
/* theme is kb2a, c3c, mirai or custom */
////edit here////
module.exports = {
	name: ":3",
	keywords:["log"],
	description: "đây là plugin dùng để thông báo dữ liệu tới log",
	guide: "",
	hookType: "*",
	childs: [],
	permission: {
		'*': 'SUPER_ADMINS'
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
	async onMessage(message, reply) {
		let theme = this.storage.account.global.consoleTheme;
		let prefix = this.storage.thread.global.prefix;
		let uinfo = await getUserInfo(message.senderID);
		let binfo = await getThreadInfo(message.threadID);
		let name = uinfo[`${message.senderID}`].name;
		let thread = binfo.name;
		let box = (message.senderID == message.threadID) ? "DMed: " : `messaged in thread ${message.threadID}: `;
		let boxk = (message.senderID == message.threadID) ? "DMed: " : `đã gửi tin nhắn đến ${thread} nội dung: `;

		if (!theme || theme != mytheme) {
			theme = mytheme
		};

		async function att () {
			let str = "";
		    for (let n in message.attachments) {
		        let type = message.attachments[n].type;
		        type = type[0].toLocaleUpperCase() + type.substr(1);
		        str += "\r\n  <";
		        str += type;
		        str += " ";
		        switch (message.attachments[n].type) {
		      	    case "audio":
		           	case "video":
		                let dr = new Date(message.attachments[n].duration);
		                str += dr;
		                str += " ";
		                if (message.attachments[n].type == "audio") break;
		            case "photo":
		            case "animated_image":
		            case "sticker":
		                str += message.attachments[n].width;
		                str += "x";
		                str += message.attachments[n].height;
		                str += " ";
		        };
		        str += "| ";
		        str += message.attachments[n].url;
		        str += ">";
		    };
		    return str
		};
		if (theme == "kb2a") {
			let kb = " ";
			if (message.attachments[0]) { kb = " < tệp đính kèm >" };
			switch (message.type) {
				case "message":
					if (message.body.startsWith(`${prefix}`)) {
						console.newLogger.done(`${name} đã sử dụng lệnh tại ${thread} nội dung: ${message.body}`)
					}else {
						console.newLogger.done(`${name} ${boxk}${message.body}${kb}`)
					}
				break;
				case "event":
	        try {
	          if (message.logMessageType == "log:subscribe") {
	          	let botID = fca.getCurrentUserID();
	            for (let n in message.logMessageData.addedParticipants) {
	            	if (message.logMessageData.addedParticipants[n].userFbId == botID) {
	            		console.newLogger.done(`${message.author} đã thêm Bot vào ${thread}`);
	            		break;
	             	}
	            }
	         	}
	        } catch (ex) {
	        	console.newLogger.error(ex);
	        }
	      break;
	        case "message_reaction":
	         	console.newLogger.done(`Reaction received: ${message}`);
	      break;
	      case "message_unsend":
		      console.newLogger.done(`${name} đã xóa một tin nhắn tại ${thread}. (${message.messageID})`);
		    break;
		    case "message_reply":
		    	let rinfo = await getUserInfo(message.messageReply.senderID);
		    	let rname = rinfo[`${message.messageReply.senderID}`].name; 	
		      console.newLogger.done(`${name} đã trả lời ${rname} tại ${thread}: ${message.body}${kb}`)
		    break;
		    default:
		    break
			}
		}else if (theme == "c3c") {
			let atta = " ";
			if (message.attachments[0]) {
				atta = await att()
			};
			switch (message.type) {
				case "message":
					if (message.body.startsWith(`${prefix}`)) {
						console.log(`${message.senderID}(${name}) issued command in ${message.threadID}(${thread}): ${message.body}`.green)
					}else {
						console.log(`${message.senderID}(${name}) ${box}${message.body}${atta}`.green)
					}
				break;
				case "event":
	        try {
	          if (message.logMessageType == "log:subscribe") {
	          	let botID = fca.getCurrentUserID();
	            for (let n in message.logMessageData.addedParticipants) {
	            	if (message.logMessageData.addedParticipants[n].userFbId == botID) {
	            		console.log(`${message.author} added Bot to ${message.threadID}(${thread})`.green);
	            		break;
	             	}
	            }
	         	}
	        } catch (ex) {
	        	console.newLogger.error(ex);
	        }
	      break;
	        case "message_reaction":
	         	console.log(`Reaction received: ${message}`.green);
	      break;
	      case "message_unsend":
		      console.log(`${message.senderID}(${name}) deleted a message in ${message.threadID}(${thread}). (${message.messageID})`.green);
		    break;
		    case "message_reply":            	
		      console.log(`${message.senderID}(${name}) replied to ${message.messageReply.senderID} at ${message.threadID}: ${message.body}${atta}`.green)
		    break;
		    default:
		    break
			}
		}else if (theme == "mirai") {
			if (message.attachments[0]) {
				if (message.isGroup) {
					console.log(`BOX: `.green + `${thread}`.magenta + `|`.red + `${name}`.yellow + `|`.red + `${message.body}`);
					console.log(`BOX: `.green + `${thread}`.magenta + `|`.red + `${name}`.yellow + `|`.red + `đã gửi một tệp đính kèm`)
				}else {
					uinfo = await getUserInfo(message.threadID);
					name = uinfo[`${message.threadID}`].name;
					console.log(`BOX: `.green + `${name}`.magenta + `|`.red + `${name}`.yellow + `|`.red + `${message.body}`);
					console.log(`BOX: `.green + `${name}`.magenta + `|`.red + `${name}`.yellow + `|`.red + `đã gửi một tệp đính kèm`)
				}
			}else {
				if (message.isGroup) {
					console.log(`BOX: `.green + `${thread}`.magenta + `|`.red + `${name}`.yellow + `|`.red + `${message.body}`)
				}else {
					uinfo = await getUserInfo(message.threadID);
					name = uinfo[`${message.threadID}`].name;
					console.log(`BOX: `.green + `${name}`.magenta + `|`.red + `${name}`.yellow + `|`.red + `${message.body}`)
				}
			}
		}else {
			/* your custom theme here */
			console.log(`${name}: ${message.body}`)
		}
	},
	async onCall(message, reply) {
		reply(`===⭐CITNUT⭐===\nbạn đang sử dụng giao diện ${mytheme}\n~~~\nbạn có thể thay đổi giao diện trong tệp console.js\n===KB2ABOT===`)
	}
}
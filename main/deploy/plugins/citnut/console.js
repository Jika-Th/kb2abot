module.exports = {
	name: ":3",
	// tên thân thiện của plugin (để hiển thị trong danh sách câu lệnh)
	keywords:["log"],
	// Là các từ khóa để gọi plugin logmsg (có thể có nhiều cái)

	description: "đây là plugin dùng để thông báo dữ liệu tới log",
	// Là nội dung của plugin (dùng để hiển thị trong hướng dẫn chi tiết)

	guide: "",
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
		//let now = new Date();
		// Được gọi ngay sau khi load xong plugin
		// Chủ yếu dùng để log thôi không quan trọng
		// (Hoặc cũng có thể chuẩn bị các async function bằng await)
	},


	async onMessage(message, reply) {
		// Được gọi mỗi khi có message nhắn tới (kể cả khi dùng lệnh)
		// Chủ yếu dùng để làm mấy plugin kiểu gián điệp hoặc game
		// Xử lí mọi tin nhắn mà không cần prefix

		fca.getUserInfo(message.senderID, (err, ret) => {
			for (let prop in ret) {
				if (ret.hasOwnProperty(prop) && ret[prop].name) {
					if (message.body) {
						console.newLogger.done(`${message.senderID}(${ret[prop].name}) send a message to ${message.threadID} content: ${message.body}`);
					}
				}
			}
		})	
	},

	async onCall(message, reply) {
		return reply(`plugin này chỉ để log ra console thôi ngoài ra không có chức năng nào nữa cả @.@`)
		// Được gọi khi có member xài lệnh của mình
		// Là cốt lõi của plugin không có phần này thì có nghĩa sẽ không có chuyện
		// gì xảy ra khi gọi plugin (để hideFromHelp true nữa là plugin như batman)
	}
}

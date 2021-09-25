const {getInstructor} = kb2abot.helpers;
const childs = [
	'img/gainua',
	'img/boy',
	'img/girl',
	'img/cosplay',
	'img/fox',
	'img/jimmy',
	'more/tinhtam',
	'more/adminbot',
	'more/adduser',
	'more/cadao',
	'more/uid',
	'more/calendar',
	'more/voice',
	'more/trungthu',
	'more/tet',
	'more/tetthieunhi',
	'more/cathangtu',
	'eco/item',
	'eco/setbag',
	'eco/slot',
	'eco/trade',
	'eco/work',
	'eco/slut',
	'eco/crime',
	'console',
	'func',
	'noprefix/thathinh',
	'noprefix/aothatday',
	'noprefix/botngu',
	'noprefix/concainit',
	'noprefix/dongu',
	'noprefix/vinhbiet',
	'noprefix/happybirthd',
	'noprefix/vovanhoa',
	'noprefix/trieu',
	'noprefix/hao',
	'noprefix/banlanhat',
	'noprefix/he',
	'noprefix/thunglung',
	'noprefix/uwu'
];

module.exports = {
	keywords: ['ℂ𝕀𝕋ℕ𝕌𝕋', 'CITNUT', 'citnut'],

	name: 'Citnut plugins',

	description: 'Official Citnut plugins',

	guide: '',

	childs,

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

	hookType: 'none',

	async onMessage(message, reply) {
	},

	async onCall(message, reply) {
		reply(getInstructor('CITNUT ⭐', childs));
	}
};

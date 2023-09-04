export default ({ error, pageName, status }) => ({
	address: 'г. Москва, ул. Милашенкова, д.10',
	appData: {
		page: {
			error,
			pageName,
			status
		}
	},
	caption: 'Управление по развитию новых экономических форм производства',
	description: 'Проект про судебные дела',
	links: [
		{
			title: 'Главная',
			url: '#!'
		},
		{
			title: 'Наша команда',
			url: '#!'
		},
		{
			title: 'Контакты',
			url: '#!'
		}
	],
	pixelperfect: JSON.stringify({ breakpoints: [320], ext: 'webp' }),
	projectName: 'Lawyers',
	question: 'Есть вопросы? Мы онлайн',
	socialLinks: [
		{
			id: 'telegram',
			title: 'Мы в Телеграме',
			url: '#!'
		},
		{
			id: 'whats-app',
			title: 'Мы в Whats app',
			url: '#!'
		}
	],
	tel: {
		title: '+7 (495) 639-15-63',
		url: 'tel:+74956391563'
	},
	webSite: 'urist.mos.help@yandex.ru'
});

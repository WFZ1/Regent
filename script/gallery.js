$(document).ready(function() {	
	var div = $('<div>').css({
		height: "224px",
		position: "relative",
		left: "190px",
		'margin': "31px 0 23px"
	});

	// Предыдущая картинка
	var imgL = $('<div>').css({
		width: "161px",
		height: "186px",
		'background-image': "url(images/photo1.jpg)",
		'border-radius': "5px",
		opacity: 0.5,
		position: "absolute",
		top: "29px",
		left: "30px"
	});

	// Выбранная картинка
	var img = $('<div>').css({
		width: "184px",
		height: "224px",
		'background-image': "url(images/photo2.jpg)",
		'background-repeat': "no-repeat",
		'border-radius': "5px",
		position: "absolute",
		left: "100px",
		'z-index': 1
	});

	// Следующая картинка
	var imgR = $('<div>').css({
		width: "132px",
		height: "186px",
		'background-image': "url(images/photo3.jpg)",
		'border-radius': "5px",
		opacity: 0.5,
		position: "absolute",
		top: "29px",
		left: "221px"
	});

	var back = $("<img>").attr("src", "images/nextL.png").css({
		position: "absolute",
		top: "112px",
		left: 0,
		cursor: "pointer"
	});
	var next = $("<img>").attr("src", "images/nextR.png").css({
		position: "absolute",
		top: "112px",
		left: "379px",
		cursor: "pointer"
	});

	$(div).append(back, imgL, img, imgR, next);

	var author = $('<span>').text('Даниил Авдеев').css({
		display: "block",
		'font-weight': "bold",
		'font-size': "18.52px",
		color: "#1a1a1a",
		'text-align': "center",
		margin: "0 0 20px"
	});
	var comment = $('<p>').text('Если вдруг кому то нужна помощь в юридических вопросах, в частности, в трудовых взаимоотношениях, рекомендую обращаться в адвокатское бюро REGENT   Специалист компании составлял трудовые договоры для нашей компании, принимал непосредственное участие в решении трудовых споров. Прекрасные знания законодательства, огромный опыт работы, все это характеризует компанию только с самой лучшей стороны. Еще и еще раз спасибо за помощь!!!').css({
		'font-size': "14.81px",
		color: "#1a1a1a",
		'text-align': "center",
		padding: "0 152px",
		margin: 0
	});

	$('#gallery').append(div, author, comment);
	var images = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'];

	$(next).click(function() {
		var backgImg = $(img).css('background-image');
		var reg = backgImg.match(/photo[0-9]\.jpg/);

		if (reg == images[1]) {
			$(imgL).css('background-image', "url(images/" + images[2] + ")");
			$(img).css('background-image', "url(images/" + images[0] + ")");
			$(imgR).css('background-image', "url(images/" + images[1] + ")");
			$(author).text('Чешко Ирина');
			$(comment).text('С юридической компанией сотрудничаю давно. Уже вот третий раз помогает мне с разными проблемами: был вопрос с оспариванием наследства, писали исковое заявление по защите прав потребителей, ходили в суд по поводу кредита на автомобиль и выиграли. Я лично плохо понимаю юридическую сферу, но прийдя в эту компанию мне все по полочкам разложили, рассказали что и как надо делать. Всем советую!');
		}
		else if (reg == images[0]) {
			$(imgL).css('background-image', "url(images/" + images[1] + ")");
			$(img).css('background-image', "url(images/" + images[2] + ")");
			$(imgR).css('background-image', "url(images/" + images[0] + ")");
			$(author).text('Запорожец Анна');
			$(comment).text('Обратилась в данную фирму. Был вопрос о расторжении брака, заключили договор, консультировал меня Михаил, все толково и доступно, претензий нет. Подали в суд, через неделю перезвонили, что заседание назначено на конец октября. Это по моему не совсем нормально, хотя говорят, что все дело исключительно в загрузке конкретного судьи. В целом впечатление хорошее, офис в порядке, чистоте, ремонт, сотрудники что я видела молодёжь,+- 30 лет.');
		}
		else if (reg == images[2]) {
			$(imgL).css('background-image', "url(images/" + images[0] + ")");
			$(img).css('background-image', "url(images/" + images[1] + ")");
			$(imgR).css('background-image', "url(images/" + images[2] + ")");
			$(author).text('Даниил Авдеев');
			$(comment).text('Если вдруг кому то нужна помощь в юридических вопросах, в частности, в трудовых взаимоотношениях, рекомендую обращаться в адвокатское бюро REGENT   Специалист компании составлял трудовые договоры для нашей компании, принимал непосредственное участие в решении трудовых споров. Прекрасные знания законодательства, огромный опыт работы, все это характеризует компанию только с самой лучшей стороны. Еще и еще раз спасибо за помощь!!!');
		}
	});

	$(back).click(function() {
		var backgImg = $(img).css('background-image');
		var reg = backgImg.match(/photo[0-9]\.jpg/);

		if (reg == images[1]) {
			$(imgL).css('background-image', "url(images/" + images[1] + ")");
			$(img).css('background-image', "url(images/" + images[2] + ")");
			$(imgR).css('background-image', "url(images/" + images[0] + ")");
			$(author).text('Запорожец Анна');
			$(comment).text('Обратилась в данную фирму. Был вопрос о расторжении брака, заключили договор, консультировал меня Михаил, все толково и доступно, претензий нет. Подали в суд, через неделю перезвонили, что заседание назначено на конец октября. Это по моему не совсем нормально, хотя говорят, что все дело исключительно в загрузке конкретного судьи. В целом впечатление хорошее, офис в порядке, чистоте, ремонт, сотрудники что я видела молодёжь,+- 30 лет.');
		}
		else if (reg == images[2]) {
			$(imgL).css('background-image', "url(images/" + images[2] + ")");
			$(img).css('background-image', "url(images/" + images[0] + ")");
			$(imgR).css('background-image', "url(images/" + images[1] + ")");
			$(author).text('Чешко Ирина');
			$(comment).text('С юридической компанией сотрудничаю давно. Уже вот третий раз помогает мне с разными проблемами: был вопрос с оспариванием наследства, писали исковое заявление по защите прав потребителей, ходили в суд по поводу кредита на автомобиль и выиграли. Я лично плохо понимаю юридическую сферу, но прийдя в эту компанию мне все по полочкам разложили, рассказали что и как надо делать. Всем советую!');
		}
		else if (reg == images[0]) {
			$(imgL).css('background-image', "url(images/" + images[0] + ")");
			$(img).css('background-image', "url(images/" + images[1] + ")");
			$(imgR).css('background-image', "url(images/" + images[2] + ")");
			$(author).text('Даниил Авдеев');
			$(comment).text('Если вдруг кому то нужна помощь в юридических вопросах, в частности, в трудовых взаимоотношениях, рекомендую обращаться в адвокатское бюро REGENT   Специалист компании составлял трудовые договоры для нашей компании, принимал непосредственное участие в решении трудовых споров. Прекрасные знания законодательства, огромный опыт работы, все это характеризует компанию только с самой лучшей стороны. Еще и еще раз спасибо за помощь!!!');
		}
	});
});
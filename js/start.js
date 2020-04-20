'use strict';


window.renderStatistics = function (ctx, names, times) {
  var dataCloud = {
    startX: 100,
    startY: 10,
    widthRect: 420,
    heightRect: 270,
    lenghtShadow: 10,
    margin: 40,

    colorRect: ['rgba(0, 0, 0, 0.7)', 'rgb(256, 256, 256)'],
    text: ['Ура вы победили!', 'Список результатов: ']
  };

  drawRect(dataCloud.startX + dataCloud.lenghtShadow, dataCloud.startY + dataCloud.lenghtShadow, dataCloud.widthRect, dataCloud.heightRect, dataCloud.colorRect[0]);
  drawRect(dataCloud.startX, dataCloud.startY, dataCloud.widthRect, dataCloud.heightRect, dataCloud.colorRect[1]);
  writeText(dataCloud.text);
  drawHistogram(times, names);

	//Рисуем прямоугольник
	function drawRect(axisX, axisY, width, height, fillColor) {
		ctx.fillStyle = fillColor;
		ctx.fillRect(axisX, axisY, width, height);
	}

	//Выводим текст на облаке
	function writetext(textArray) {
		ctx.fillStyle = '#000';
		ctx.font = '16px PT Mono';

		for (var i = 0; i < textArray.length; i++) {
			ctx.fillText(textArray[i], dataCloud.startX + dataCloud.margin, dataCloud.startY + (i + 1) * 25);
		}
	}

	//Рисуем гистограмму
	function drawHistogram(arryTimes, arrayNames) {

		var dataHistogram = {
			barWidth: 40,
			indent: 90,
			indentName: 20,
			indentTime: 10,
			histogramHeight: 150,
			paddingTop: 60
		};

		var step = dataHistogram.histogramHeight / (getMaxValue(times) - 0);
	}
};

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

};

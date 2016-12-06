(function() {
  'use strict';

  const renderCars = function(cars) {
    const $ul = $('ul');

    for (const car of cars) {
      const content = `${car.make} ${car.model} ${car.color} ${car.price}`;
      const $li = $('<li>').text(content);

      $ul.append($li);
    }
  };

  const data = JSON.parse(localStorage.getItem('cars'));

  if (data) {
    renderCars(data);
  }
  else {
    const $xhr = $.ajax({
      method: 'get',
      url: 'https://api.myjson.com/bins/4703f',
      dataType: 'json'
    });

    $xhr.done((data) => {
      localStorage.setItem('cars', JSON.stringify(data));

      renderCars(data);
    });
  }
})();

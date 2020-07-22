let calculateEngravingPrice = function(message, pricePerWord) {
    let total = '';
    let arr = message.split(' ');
    total = `${arr.length}` * pricePerWord;
    return total;
    } 


    console.log(
      calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        10,
      ),
    ); // 80

  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  );

  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  ); // 240
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  ); // 120
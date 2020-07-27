const findBestEmployee = function(employees) {
    let workResult = Object.values(employees);
    let nameEmpl = Object.keys(employees);

    let bestEmployee = nameEmpl[workResult.indexOf(Math.max(...workResult))];
    
    return bestEmployee;
    
  };
  
  console.log(
    findBestEmployee({
      ann: 9,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux
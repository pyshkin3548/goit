const countProps = function(obj) {
  
  const items = obj;

  for (const key in items) {
    
    let keys = Object.keys(items);
    
   return keys.length;
    
  }

};

console.log(countProps({})); // 0
console.log(countProps({ name: 'Mango', age: 2 })); // 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
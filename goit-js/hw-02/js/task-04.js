const formatString = function(string) {
    const stringLenght = `${string.length}`;
    if (stringLenght <= 40) {
        return string;
    } 
    else {
        
      console.log(string.slice(0, 40,),'...');
        
        }
    };

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);

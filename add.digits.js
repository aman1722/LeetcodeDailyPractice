var addDigits = function(num) {
    while (num > 9) {
     num = 
      num
        .toString()
        .split("")
        .reduce((previousValue, currentValue, currentIndex) => {
            return  parseInt( previousValue) + parseInt(currentValue)
        })

      }
  return num
};
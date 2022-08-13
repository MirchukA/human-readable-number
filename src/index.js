module.exports = function toReadable (number) {
  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
  'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 
  'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred','eight hundred','nine hundred']
  let numberArr = (number) => number.toString().split('');
    if (number >= 100 && number % 100 == 0) {
      return hundreds[numberArr(number)[0] - 1];
    } else if (number >= 100 && number % 100 >= 20) {
      return number % 10 != 0 ? `${hundreds[numberArr(number)[0] - 1]} ${dozens[numberArr(number)[1] - 2]} ${units[numberArr(number)[2]]}` :
     `${hundreds[numberArr(number)[0] - 1]} ${dozens[numberArr(number)[1] - 2]}`;
    } else if (number >= 100 && number % 100 <= 20) {
      return `${hundreds[numberArr(number)[0] - 1]} ${units[+number.toString().slice(1)]}`;
    } else if (number >= 100 && number % 100 == 0) {
      return hundreds[numberArr(number)[0] - 1];
    } else if (number >= 20 && number <= 99 ) {
      return number % 10 != 0 ? `${dozens[numberArr(number)[0] - 2]} ${units[numberArr(number)[1]]}` :
      `${dozens[numberArr(number)[0] - 2]}` ;
    } else if (number >= 0 && number <= 19 ) {
      return units[number];
     };

}
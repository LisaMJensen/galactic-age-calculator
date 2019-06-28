export class ageCalculator {

function getAge (year, month, day) {
let today = new Date();
let birthDate = new Date(1993,8,7);
let age = today.getfullYear() - birthDate.getfullYear();
//}

console.log("age");
//use parseFloat to deal with decimals
mercuryAge() {
  const mercuryYear = 0.24;
  //return parseFloat((this.age / mercuryYear))
}

venusAge() {
  const venusYear =  0.62;
  // return parseFloat((this.age / venusYear))
}

marsAge() {
  const marsYear = 1.88;
  //return parseFloat((this.age / marsYear))
}

jupiterAge() {
  const jupiterYear = 11.86;
  //return parseFloat((this.age / jupiterYear))
}

}

//life expectancy - write functions after age functions finished

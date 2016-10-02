export default (number)=>{
  const multipleOf3 = number % 3 == 0
  if (multipleOf3 && number % 5 == 0) {
    return 'FizzBuzz'
  }
  if(multipleOf3){
    return 'Fizz'
  }
  if(number % 5 == 0){
    return 'Buzz'
  }
  return number
}

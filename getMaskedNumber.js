export default (number)=>{
  const multipleOf3 = number % 3 == 0
  const multipleOf5 = number % 5 == 0
  let result = ''
  if(multipleOf3){
    result = 'Fizz'
  }
  if(multipleOf5){
    result = 'Buzz'
  }
  if (multipleOf3 && multipleOf5) {
    result = 'FizzBuzz'
  }
  return result || number
}

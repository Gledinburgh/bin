function nextChar(c: string) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}

const letterArray: any = (size: number) => {
  var letters: string[] = [];
  var currentLetter = "a"
  for (let i = 0; i < size; i++) {
    letters.push(currentLetter);
    currentLetter = nextChar(currentLetter);
  }
  return letters;
}

const numberArray: any = (size: number) => {
  var numbers: number[] = [];
  var currentNumber = 1;

  for (let i = 0; i < size; i++) {
    numbers.push(currentNumber)
    currentNumber++
  }
  return numbers;
}

function map2DArray(size: number): any {


  return {
    "letterArray": letterArray(size),
    "numberArray": numberArray(size)
  }

}

export { map2DArray }
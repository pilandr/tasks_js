const string = "Привет! Как дела?";

console.log(getVowels(string));

function getVowels(string) {
  let total ='';
  let vowels = 'ауоыиэяюёе';
  for (let i = 0; i < string.length; i++) 
    for (let j = 0; j < vowels.length; j++){
      if (string[i]==vowels[j]) total += string[i];
    }
  return total;
}
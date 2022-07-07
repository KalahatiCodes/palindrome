document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){
  let word = document.querySelector('#word').value.toLowerCase()
  let backward = word.split("").reverse().join("")
  if (word === backward){
      result = document.querySelector('#trueOrFalse').innerHTML = `FABULOUS! "` + word + `" is infact a palindrome!`;
      } else {
        result = document.querySelector('#trueOrFalse').innerHTML = `What a drab! "` + word +`" is not a palindrome!`;
      }
}
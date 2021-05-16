const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const items = document.querySelector('#items');
const computed = getComputedStyle(items);



rightBtn.addEventListener("click", e => {
  e.preventDefault();
  let curRight = parseInt(computed.right);


  if (curRight < 500) {
    items.style.right = `${curRight + 100}px`;

  } 
  


})


leftBtn.addEventListener("click", e => {
  e.preventDefault();
  let curRight = parseInt(computed.right);

  if (curRight > 0) {
    items.style.right = `${curRight - 100}px`;
  }
})
let star1 = document.getElementById("star-1");
let star2 = document.getElementById("star-2");
let star3 = document.getElementById("star-3");
let star4 = document.getElementById("star-4");
let star5 = document.getElementById("star-5");

let ratingInfo = document.getElementById("rating-info");
const arr = [star1,star2,star3,star4,star5]


// adding ratings

star1.addEventListener("click",()=>{
    console.log('clicked')
  rate(1);
});

star2.addEventListener("click",()=>{
  rate(2);
});

star3.addEventListener("click",()=>{
  rate(3);
});

star4.addEventListener("click",()=>{
  rate(4);
});

star5.addEventListener("click",()=>{
  rate(5);
});


const rate=num=> {

    for (let i=0; i<5; i++) {
        arr[i].setAttribute("style", "color: black");
      }

  for (let i=0; i<num; i++) {
    arr[i].setAttribute("style", "color: var(--rating-color)");
  }

  ratingInfo.innerHTML = `Rating: ${num}/5`;
}
const background_image = document.querySelector(".background_image");
const heading_1 = document.querySelector(".heading_1");

let load = 0;

let int = setInterval(bluring_effect,30);    /*here 30 is in milli sec */ 
  /*if we put load and setinterval in function the it not run directly*/

function bluring_effect(){
  load++;
  if(load >99){
    clearInterval(int);
  }
  heading_1.innerText = `${load}%`;
  heading_1.style.opacity = scale(load,0,100,1,0);
  background_image.style.filter = `blur(${scale(load,0,100,3,0)}rem)`
}



const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
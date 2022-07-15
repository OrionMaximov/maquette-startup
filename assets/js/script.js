import {show} from "./lib/scroll.js";
import {zoom} from "./lib/zoom.js";




const sliderImg = document.querySelector("#slider>img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const urlImg = [
    "assets/img/mac.jpg"  
];

let i = 0;
sliderImg.src = urlImg[i];
next.addEventListener("click",
    function () {
        if (i === urlImg.length-1) {
            i = 0 ;
            sliderImg.src = urlImg[i];
        } else {
            i++;
            sliderImg.src = urlImg[i];
        }
    });

prev.addEventListener("click", function () {

    if (i=== 0) {
        i = urlImg.length-1;
        sliderImg.src = urlImg[i];
    } else {
         i--;
        sliderImg.src = urlImg[i];
    }
});
setInterval(
    
    function () {
        if (i === urlImg.length-1) {
            i = 0 ;
            sliderImg.src = urlImg[i];
        } else {
            i++;
            sliderImg.src = urlImg[i];
        }
    },
    4000
)

show();
zoom();
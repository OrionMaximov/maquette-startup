
const imgElements = document.querySelectorAll(".mini>img");// a changer
const imgFull = [];
const frameImg = document.createElement("div");
frameImg.style.width = "100vw";
frameImg.style.height = "100vh";
frameImg.style.justifyContent = "center";
frameImg.style.backgroundColor ="rgba(155,155,155,0.5)";
frameImg.style.backdropFilter="blur(20px)";
frameImg.style.alignItems = "center";
frameImg.style.position = "fixed";
frameImg.style.display ="none";
frameImg.style.zIndex="2";
document.body.prepend(frameImg);

const zoom = () => {
    
for (let i = 0; i < imgElements.length; i++) {
    let n = i;
    imgElements[i].addEventListener(
        "click",
        () => {
            console.log("blablabla");
            imgFull[n] = document.createElement("img");
            frameImg.style.display = "flex";
            imgFull[n].src = imgElements[n].src;
            frameImg.append(imgFull[n]);
            imgFull[n].style.width="70%";
        }
    )
    
} 
frameImg.addEventListener(
        "click",
        function(event){
            if(!frameImg.querySelector("img").contains(event.target)){
                frameImg.style.display = "none";
                frameImg.innerHTML = "";
                }
            }
        
    )
}
export {zoom};
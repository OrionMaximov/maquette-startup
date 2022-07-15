const progress =document.getElementById("progress");
const photo =document.getElementById("photo");
const shop =document.getElementById("shop");
const webD =document.getElementById("webD");

const show = () => {

window.addEventListener(
    "scroll",
    function(){
       /*  defil= document.scrollingElement.scrollTop | window.scrollY */
      if(progress.scrollIntoView=(true) /* defil+document.documentElement.clientHeight>=  document.scrollingElement.offsetHeight - 70 */) {
           progress.style.left= "0px";
           photo.style.width="90%";
           shop.style.width="75%";
           webD.style.width="85%";
        }
                    
                  
    }
)
}
export {show};
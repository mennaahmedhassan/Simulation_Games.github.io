// js 1
let menna_btn = document.getElementById('menna_scroll_button'); //scroll button in page(SimulationGames2).
window.onscroll = function(){
    if (scrollY >= 400)
    {
       menna_btn.style.display = "block";
    }
    else{
        menna_btn.style.display = "none";
    }
}
menna_btn.onclick = function (){
    scroll({
        top:0,
        behavior:"smooth" 
    })
}
// js 2
// let menna_header=document.getElementById('menna2_header'); //header in page(SimulationGames2).
// let menna_header_title=document.getElementById('menna2_div2'); //title in header.
// window.onscroll=function(){
//     if(scrollY>=700){
//         menna_header.style.display="none";
//     }
//     else{
//         menna_header.style.display="block";
//         menna_header_title.style.transform="translate(140px,-80px)";
//     }
// }

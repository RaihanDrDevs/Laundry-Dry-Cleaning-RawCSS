/** @format */


const boxItem = document.querySelectorAll(".main_box li");
const box = document.querySelectorAll (".box");
let getSlide = boxItem.lenght - 1;
let slideCalc = 30 / getSlide + "%"; // Each box will take 10% of the parcent wideth (ul width) an inactive except the active box

box.forEach( e => {
    e.addEventListener("click", function(){
        box.forEach (box => {
            box.style.width = slideCalc;
            box.classList.remove("active");
        });
        e.classList.add("active");
    });
});
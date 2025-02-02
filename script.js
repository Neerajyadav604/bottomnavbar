let item1 = document.querySelector(".item1");
let body=document.querySelector("body")
function slideItem() {
    
    console.log("hii")
   item1.classList.add("active")
   item2.classList.remove("active2")
   item4.classList.remove("active4")
   item3.classList.remove("active3")
   body.style.backgroundColor = "#c0d8ec";
   
}

// Listen for the click event
item1.addEventListener("click", slideItem);

let item2 = document.querySelector(".item2");

function slideItem1() {
    console.log("hii")
    item1.classList.remove("active")
   item2.classList.add("active2")
   item3.classList.remove("active3")
   item4.classList.remove("active4")
   body.style.backgroundColor = "#f06262";
}

// Listen for the click event
item2.addEventListener("click", slideItem1);
let item3 = document.querySelector(".item3");

function slideItem2() {
    console.log("hii")
    item1.classList.remove("active");
   item2.classList.remove("active2")
   item3.classList.add("active3");
   item4.classList.remove("active4")
   body.style.backgroundColor = "#d5f28a";

}
item3.addEventListener("click",slideItem2)

// Listen for the click event
let item4=document.querySelector(".item4")

function slideItem3() {
    console.log("hii")
    item1.classList.remove("active");
   item2.classList.remove("active2")
   item3.classList.remove("active3");
   item4.classList.add("active4")
   body.style.backgroundColor = "#968af2";


}

// Listen for the click event
item4.addEventListener("click", slideItem3);


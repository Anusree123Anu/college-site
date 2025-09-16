// var adm = document.getElementsByClassName(btm-collection-admission);
// adm.addEventListener("click", function(){
//     adm.window.location.href("academics.html");
// })


var adm = document.querySelector(".btn-collection.btn-collection-admission");

adm.addEventListener("click", function () {
    window.location.href = "Admission.html";
});

var place = document.querySelector(".btn-collection.btn-collection-placement");

place.addEventListener("click", function () {
    window.location.href = "placement.html";
});

var alumn = document.querySelector(".btn-collection.btn-collection-alumini");

alumn.addEventListener("click", function () {
    window.location.href = "alumini.html";
});



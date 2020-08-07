document.addEventListener("DOMContentLoaded", function () {
    function printYear(){
        let currentYear = new Date();
        document.getElementById("year").innerHTML = currentYear.getFullYear();
    }
    printYear();
});
function loadImgModal(end){
    let srcImg = end.getAttribute("src");
    let altImg = end.getAttribute("alt");
    let imgModal = document.getElementById("printImgModal");
    document.getElementById("printAlt").innerHTML = altImg;
    imgModal.setAttribute("src", srcImg);
}
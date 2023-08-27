document.addEventListener("DOMContentLoaded", function () {
    let currentYear = new Date();
    document.getElementById("year").innerHTML = currentYear.getFullYear();
});

const imgModal = document.getElementsByClassName('imgStyle')
for (const item of imgModal) {
    item.addEventListener("click", function (e) {
        loadImgModal(e.target)
    });
}

function loadImgModal(end){
    let srcImg = end.getAttribute("src");
    let altImg = end.getAttribute("alt");
    let imgModal = document.getElementById("printImgModal");
    document.getElementById("printAlt").innerHTML = altImg;
    imgModal.setAttribute("src", srcImg);
}
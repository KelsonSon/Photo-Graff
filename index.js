let imgClose = document.querySelector('.img-close')
function addZoom(id) {
    if(window.innerWidth > 768){
    let imgCard = document.getElementById(id)
    imgCard.classList.add("img-zoom");
    imgClose.classList.add("img-x")
    }
}
function closeZoom(id){
    let imgCard = document.querySelector(".img-zoom")
    
    imgCard.classList.remove("img-zoom")
    imgClose.classList.remove("img-x")
    
}
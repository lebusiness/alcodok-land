const toggleModal = (isHidden) => {
    document.querySelector('.modal').classList.toggle('visible');
    document.querySelector('.overlay').classList.toggle('visible');
    document.querySelector('body').style.overflow = isHidden ? "hidden" : "scroll";
}
const buttons = document.querySelectorAll('.call_btn');
buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal(true);
    })
})
document.querySelector('.overlay').addEventListener('click', ()=> {
    toggleModal(false);
})
document.querySelector('.close').addEventListener('click', ()=> {
    toggleModal(false);
})


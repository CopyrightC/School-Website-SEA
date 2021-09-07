let chc = document.getElementsByClassName("chc");

const applyStyle = (elem) => {

    for (let i = 0; i < chc.length; i++) {
        chc[i].classList.remove('clickChc')
    }
    elem.classList.add("clickChc")
}

for (let i = 0; i < chc.length; i++) {
    chc[i].addEventListener('click', () => applyStyle(chc[i]))
}
let chc = document.getElementsByClassName("chc");
let sportTitle = document.getElementById("titlesp");
let sportImg = document.getElementById("sport-img");
let submit = document.getElementById("submitnew");
let formName = document.getElementById("name")
let desc = document.getElementById("des");
let mob = document.getElementById("mob")
let mail = document.getElementById("mail");


const applyStyle = (elem) => {

    for (let i = 0; i < chc.length; i++) {
        chc[i].classList.remove('clickChc')
    }
    elem.classList.add("clickChc")
}

const changeDetails = (i) => {
    if (i === 0) {
        sportTitle.innerText = "Football Tournament"
        sportImg.src = "https://www.thefa.com/-/media/education-hub/articles/1440-5_ways_to_work_out_if_your_season_has_been_a_success.ashx?as=0&dmc=0&thn=0"
    }
    else if (i === 1) {
        sportTitle.innerText = "Badminton Tournament"
        sportImg.src = "https://th.bing.com/th/id/OIP.QXQSY7b2_TWM23zvJ1aovQHaKC?pid=ImgDet&rs=1"
    }
    else if (i === 2) {
        sportTitle.innerText = "Boxing Tournament"
        sportImg.src = "https://th.bing.com/th/id/R.fdfbf66d4b5350e9bba4834c1471a780?rik=7tsW31nTQJpXnQ&riu=http%3a%2f%2ffightingreport.com%2fwp-content%2fuploads%2f2016%2f09%2fboxing-for-kids.jpg&ehk=GANPCt2tQQjcb3hcJtyss2dpHGUBwDdY8xG7ukve0Dw%3d&risl=&pid=ImgRaw&r=0"
    }
}

for (let i = 0; i < chc.length; i++) {
    chc[i].addEventListener('click', () => {
        applyStyle(chc[i])
        changeDetails(i)
    }
    )
}

const handleSubmit = () => {
    if (!mail.value || !formName.value || !mob.value || !desc.value) {

        return false
    }
    return true
}

try {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        if (!handleSubmit()) {
            alert("Please fill out all the fields.")
        }
        else {
            window.open(`
        https://mail.google.com/mail/u/0/?fs=1&to=shouryasinha001@gmail.com&su=Query regarding mdps89&body=${desc.value}&tf=cm
        `)
            mail.value = ""; formName.value = ""; mob.value = ""; desc.value = "";
        }

    })
}
catch { }
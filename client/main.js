const fortuneBtn = document.querySelector("#fortuneButton");
const complimentBtn = document.querySelector('#complimentButton')
const getUsersBtn = document.querySelector('#getUsers')
let userInput = document.querySelector("#std-input");
let userInput2 = document.querySelector("#std-input2")
let submitBtn = document.querySelector("#submit-btn");
const containerUsr = document.querySelector('#container-Usr')
const reIndexBtn = document.querySelector('#reIndex')
const rndSubBtn = document.querySelector('#random-submit-btn')

let userInput3 = document.querySelector('#std-input3')
let submitIndex = document.querySelector("#submit-btn2")

const printUsers = (data) => {
    containerUsr.innerHTML = ''
    data.forEach((s)=>{
        let nameHeading = document.createElement("h2")
        let delBtn = document.createElement("p1")
        delBtn.textContent = "DELETE"
        delBtn.addEventListener("click", delUsr)
        delBtn.value = s.id
        nameHeading.innerHTML = s.name + "<br />" + s.id + "<br />" + s.favPet + "<br />" + "<br />"
        nameHeading.appendChild(delBtn)
        containerUsr.appendChild(nameHeading)
    })
}
const getFortune = () => {
    axios
    .get("http://localhost:4000/api/fortune")
    .then((res) => alert(res.data))
    .catch((err) => console.log(err))
}
const getCompliment = () => {
    axios
    .get("http://localhost:4000/api/compliment")
    .then((res) => alert(res.data))
    .catch((err) => console.log(err))
}
const getUsers = () => {
    axios
    .get("http://localhost:4000/api/users")
    .then((res) => {
        printUsers(res.data)
    })
    .catch((err) => console.log(err))    
}
const addNewUser = () => {
    let userName = userInput.value
    let favoritePet = userInput2.value
    // console.log(userName)
    axios
    .post("http://localhost:4000/api/users", {userName,favoritePet})
    .then((res) => {
        printUsers(res.data)
        // console.log(res.data)
    })
    .catch((err) => {
        console.log(err)
        alert("Empty input field")
    })
}
const changeIndex = () => {
    const index = userInput3.value
    axios
    .put(`http://localhost:4000/api/change/${index}`)
    .then((res) => {
        printUsers(res.data)
    })
    .catch((err) => {
        console.log(err)
        alert("Index does not exist")
    })
}
const delUsr = (ev) => {
    const id = ev.target.value
    // console.log(id)
    axios
    .delete(`http://localhost:4000/api/users/${id}`)
    .then((res)=>{
        // console.log(res.data)
        printUsers(res.data)
    })
    .catch((err) => console.log(err));
}
const reIndexFunc = () => {
    axios
    .get("http://localhost:4000/api/users-reID")
    .then((res) => {
        printUsers(res.data)
    })
    .catch((err) => console.log(err))  
}
const randomSubFunc = () => {
    axios
    .post("http://localhost:4000/api/randomUsr")
    .then((res) => {
        printUsers(res.data)
        // console.log(res.data)
    })
    .catch((err) => console.log(err))
}

submitIndex.addEventListener("click", changeIndex)
rndSubBtn.addEventListener("click", randomSubFunc)
reIndexBtn.addEventListener("click", reIndexFunc)
submitBtn.addEventListener("click", addNewUser)
getUsersBtn.addEventListener('click', getUsers)
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
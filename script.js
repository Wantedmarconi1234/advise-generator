const advise = document.querySelector(".advise-content");
const button = document.querySelector(".request-key");
const adviseNumber = document.querySelector(".advice-case");


const getData = async () => {
    response = await fetch("https://api.adviceslip.com/advice");
    console.log(response)
    const data = await response.json();
    return data;
}

getData().then((data) => {
    let adviceData = data.slip.advice;
    let adviseId = data.slip.id;
    advise.innerHTML = adviceData;
    adviseNumber.innerHTML = adviseId;
})

button.addEventListener("click", () => {
    location.reload();
})
    

const body = document.querySelector("body");
body.style.backgroundColor = "black";
body.style.color = "white";
// console.log(body);

const clockDiv = document.createElement("div");
clockDiv.style.fontSize = "50px";
clockDiv.style.textAlign = "center";
body.appendChild(clockDiv);

function setDigitalTime() {
  let time = new Date();
  clockDiv.innerHTML = `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;
}

setInterval(() => {
  setDigitalTime();
}, 1000);

window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 2000);
  loaded();
};

function loaded(){
  console.log("loaded")
  document.getElementById("submitbtn").addEventListener("click",()=>{
    console.log("clicked");
    postData();
  })
}
document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 500);
});



function postData(){

  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "Name" : document.getElementById("Name").value,
  "email" :document.getElementById("email").value,
  "message":document.getElementById("message").value
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://snbxzuu3e8.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
};

// fetch("https://tsjpxpxa8e.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));
// };

// arn:aws:iam::239678915342:role/API_S3_proxy_policy

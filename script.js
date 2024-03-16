let data1 ={
  "Name" : document.getElementById("Name").value,
  "Email" :document.getElementById("email").value,
  "Message":document.getElementById("message").value
};

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
fetch('https://nlgrjwhxbk.execute-api.us-east-1.amazonaws.com/dev/',{
  Method: 'POST',
  mode: 'no-cors',
  Headers: {
    Accept: 'application.json',
    'Access-Control-Allow-Origin': "*",
    'Access-Control-Request-Method': "POST",
    'Access-Control-Request-Headers': "X-PINGOTHER, Content-Type"
  },
  Body: JSON.stringify(data1),
  Cache: 'default'

})
      .then(response => response.json())
      .then(json => console.log(json))
};

// arn:aws:iam::239678915342:role/API_S3_proxy_policy

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
fetch('https://snbxzuu3e8.execute-api.us-east-1.amazonaws.com/dev',{
  Method: 'POST',
  mode: 'cors',
  Headers: {
    "Content-type": "application/json; charset=UTF-8",
    "Accept": "application.json",
    "Authorization" : "None",
    "x-amzn-RequestId" : "f07ec02f-c33f-437a-827c-e6e47d0a85f0",
    "x-amz-apigw-id": "U0rHtGRUIAMES_Q=",
    "X-Amzn-Trace-Id":"Root=1-65f82564-52f72e356d8d45dd27d66a54;Parent=5942065560251138;Sampled=0;lineage=001bdc99:0",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Request-Method": "OPTIONS,POST",
    "Access-Control-Request-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token"
  },
  Body: JSON.stringify(data1),
  Cache: 'default'

})
      .then(response => response.json())
      .then(json => console.log(json))
};

// arn:aws:iam::239678915342:role/API_S3_proxy_policy

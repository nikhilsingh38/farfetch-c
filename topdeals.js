
var ad = document.querySelectorAll(".hotDeals");
console.log(ad);
for (var i = 0; i < ad.length; i++){
  ad[i].addEventListener("click", function () {
    window.location.href = "ProductSnuggles.html";
  });
}
// ad.addEventListener("click", function() {
//   window.location.href = "ProductSnuggles.html";
// });

function softSnugles() {
  window.location.href = "ProductSnuggles.html";
}


document.querySelector("#login").addEventListener("click", login);
function login() {
  window.location.href = "login.html";
}

function profile() {
  var ans = document.querySelector("#navprofile").value;
  console.log(ans);
  if (ans == "account") {
    window.location.href = "myaccount.html";
  }
}

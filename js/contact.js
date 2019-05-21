const email = document.getElementById("email");
const github = document.getElementById("github");
const linkedin = document.getElementById("linkedin");

email.addEventListener("click", function(){
    window.location.href = "mailto:amarakha@buffalo.edu";
});

github.addEventListener("click", function(){
    window.location.href = "https://github.com/amarakhan";
});

linkedin.addEventListener("click", function(){
    window.location.href = "https://www.linkedin.com/in/amara-khan/";
});
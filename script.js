// CorePad launch date
// Change this when you know the real launch date

const launchDate = new Date("December 1, 2026 00:00:00").getTime();


function updateCountdown(){

    const now = new Date().getTime();

    const distance = launchDate - now;


    if(distance <= 0){

        document.getElementById("countdown").innerHTML =
        "COREPAD IS LIVE 🚀";

        return;

    }


    const days =
    Math.floor(distance/(1000*60*60*24));

    const hours =
    Math.floor(
        (distance%(1000*60*60*24))
        /(1000*60*60)
    );

    const minutes =
    Math.floor(
        (distance%(1000*60*60))
        /(1000*60)
    );

    const seconds =
    Math.floor(
        (distance%(1000*60))
        /1000
    );


    document.getElementById("days").innerHTML =
    days;

    document.getElementById("hours").innerHTML =
    hours;

    document.getElementById("minutes").innerHTML =
    minutes;

    document.getElementById("seconds").innerHTML =
    seconds;

}


setInterval(updateCountdown,1000);

updateCountdown();





// Signup handling

const form =
document.getElementById("signupForm");


form.addEventListener("submit",(e)=>{

    e.preventDefault();


    const email =
    document.getElementById("email").value;


    const button =
    form.querySelector("button");


    if(!email.includes("@")){

        alert("Please enter a valid email");

        return;

    }



    button.classList.add("loading");

    button.innerHTML =
    "Joining...";


    setTimeout(()=>{


        button.classList.remove("loading");

        button.innerHTML =
        "Joined ✓";


        document.getElementById(
        "statusMessage"
        ).style.display="block";


        form.reset();


    },1500);



});





// Floating mouse glow effect

document.addEventListener(
"mousemove",
(e)=>{


document.body.style.setProperty(
"--x",
e.clientX+"px"
);


document.body.style.setProperty(
"--y",
e.clientY+"px"
);


});

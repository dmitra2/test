//initiation of the user and computer which is set to zero
const user_score_initally = document.querySelector("#user").innerText;
console.log("User Score is ", user_score_initally);

const computer_score_initally = document.querySelector("#comp").innerText;
console.log("Computer score is ", computer_score_initally);

let user_Score = 0;
let comp_Score = 0;


const choices = document.querySelectorAll(".choice");
const msgBox = document.querySelector(".result_Section");
const msgText = document.querySelector("#result_output");
const userResult = document.querySelector("#user");
const computerResult = document.querySelector("#comp");
const messageText = msgText.innerText; 
const refreshGame = document.querySelector(".refresh");
const userResponse = document.querySelector("#user_choice");
const defaultUserResponse = userResponse.innerText;
const computerResponse = document.querySelector("#comp_choice");
const defaultComputerResponse = computerResponse.innerText;


const compchoice = () => {
    const choice_array = ["stone", "paper", "scissor"];
    const ind = Math.random() * 3; /*math.random() generates value between 0 to 1. 
    so we are multiplying the generated value with 3 so that we can get a value between 
    0 and index 2 to compare */
    const index = Math.floor(ind);
    console.log(index);
    return choice_array[index];
}

const showResult = (userwin, userChoice, computerChoice) =>{
    if (userwin) {
        console.log(`user ${userChoice} beats computer ${computerChoice}`);
        user_Score++;
        userResult.innerText = user_Score;
        userResult.classList.add("userUpdatedScore");
        msgText.innerText = `You Win`;
        msgText.classList.add("userWin");
        msgText.style.background = "green";
    }
    else {
        console.log(`Computer ${computerChoice} beats User ${userChoice}`);
        comp_Score++;
        computerResult.innerText = comp_Score;
        computerResult.classList.add("computerUpdatedScore");
        msgText.innerText = `Computer Wins`;
        msgText.classList.add("computerwin");
        msgText.style.background = "red";
    }    
}

const showResponse = (userChoice, computerChoice )=> {
    //user response check
    console.log("User response check", userChoice);
    userResponse.classList.add("updated-user-response");
    userResponse.innerText = userChoice;
    userResponse.style.background = "white";
    
    //computer response
    console.log("User response check", userChoice);
    computerResponse.innerText = computerChoice;
    computerResponse.classList.add("computer-computer-response")
    computerResponse.style.background = "white";
}

const drawGame = (userChoice,computerChoice) =>{
    // draw function to be written with message
    console.log(`Game is draw, ${userChoice} and ${computerChoice} is same. `);
    msgText.innerText = `It is a draw game`;
    msgText.style.background = "#081b31";
    showResponse(userChoice, computerChoice);
} 

//this portion we will write the function for the playgame()
const playgame = (userChoice) => {
    console.log("User choice is : " + userChoice);
    //now we will tally with the computer choice. the function is written above
    let computerChoice = compchoice();
    console.log( "Computer choice is " + computerChoice);
    //the next part will declare the result

    if (userChoice === computerChoice) {
        drawGame(userChoice, computerChoice);
    } 
    else {
        let userwin = true;
        if (userChoice === "stone") {
            userwin = computerChoice === "paper" ? false:true
        } 
        else if (userChoice === "paper"){
            userwin = computerChoice === "scissor" ? false:true
        } 
        else {
            userwin = computerChoice === "stone" ? false:true
        };
        
        showResult(userwin, userChoice, computerChoice);
        showResponse(userChoice, computerChoice );
    }
};


const refreshOnClick = () => {
    msgText.classList.remove("userWin");
    msgText.classList.remove("computerwin");
    msgText.innerText = messageText;
    msgText.style.background = "#081b31";
    userResult.classList.remove("userUpdatedScore");
    userResponse.classList.add("updated-user-response");
    computerResult.classList.remove("computerUpdatedScore");
    userResult.innerText = user_score_initally
    computerResult.innerText = computer_score_initally;
    user_Score = user_score_initally;
    comp_Score = computer_score_initally;
    userResponse.style.background = "";
    computerResponse.classList.remove("updated-user-response-background");
    computerResponse.style.background = "";
    computerResponse.classList.remove("updated-computer-response-background");

    computerResponse.classList.remove("updated-computer-response");
    userResponse.innerText = defaultUserResponse;
    computerResponse.innerText = defaultComputerResponse;
};
refreshGame.addEventListener("click", refreshOnClick);

//This portion is user choice
choices.forEach ((choice) => {
    console.log(choice);
    choice.addEventListener("click" , () =>{
        let userChoice = choice.getAttribute("id")
        /*here the we will play the game. below is the play game function 
        which we will declare outside the block */
        playgame(userChoice);
    });
});


function clearFeedbackForm() {
    document.getElementById('feedback').value = ''; // Clear the text area
}

document.addEventListener('DOMContentLoaded', () => {
    // Clear the feedback form when the main page is loaded
    clearFeedbackForm();
});

//testimonial container

document.addEventListener("DOMContentLoaded", function () {
    const testimonialForm = document.getElementById("testimonial-form");
    const testimonialContainer = document.getElementById("testimonial-container");
    const clearTestimonialsBtn = document.getElementById("clear-testimonials");
  
    testimonialForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("testimonial-name").value;
      const feedback = document.getElementById("testimonial").value;
  
      const testimonialElement = document.createElement("div");
      testimonialElement.classList.add("testimonial-item");
      testimonialElement.innerHTML = `<p><strong>${name}:</strong> ${feedback}</p>`;
      testimonialContainer.appendChild(testimonialElement);
  
      testimonialForm.reset();
      saveTestimonial(name, feedback);
    });
  
    clearTestimonialsBtn.addEventListener("click", function () {
      testimonialContainer.innerHTML = "";
      clearSavedTestimonials();
    });
  
    // Load saved testimonials on page load
    loadSavedTestimonials();
  
    // Function to save testimonial to localStorage
    function saveTestimonial(name, feedback) {
      let savedTestimonials = JSON.parse(localStorage.getItem("testimonials")) || [];
      savedTestimonials.push({ name, feedback });
      localStorage.setItem("testimonials", JSON.stringify(savedTestimonials));
    }
  
    // Function to load saved testimonials from localStorage
    function loadSavedTestimonials() {
      let savedTestimonials = JSON.parse(localStorage.getItem("testimonials")) || [];
      savedTestimonials.forEach(testimonial => {
        const testimonialElement = document.createElement("div");
        testimonialElement.classList.add("testimonial-item");
        testimonialElement.innerHTML = `<p><strong>${testimonial.name}:</strong> ${testimonial.feedback}</p>`;
        testimonialContainer.appendChild(testimonialElement);
      });
    }
  
    // Function to clear saved testimonials from localStorage
    function clearSavedTestimonials() {
      localStorage.removeItem("testimonials");
    }
  });
  
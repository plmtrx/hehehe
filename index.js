var question = document.querySelector("#question");
question.innerText = "are you good?";

function validate(){
  if (checkbox1.checked){
    question.innerText = "yay!! glad to hear that!!";
    document.querySelector(".checkboxes").style.visibility = "hidden";
  } else if (checkbox2.checked){
    question.innerText = "oh no :( talk to me!!";
    document.querySelector(".checkboxes").style.visibility = "hidden";
    document.querySelector(".pic").style.visibility = "visible";
  } else if (checkbox3.checked){
    question.innerText = "bruh";
    document.querySelector(".checkboxes").style.visibility = "hidden";
  }
}

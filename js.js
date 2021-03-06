const box = document.querySelector('.box');

function myFunction(x) {
  box.classList.toggle('show');
  x.classList.toggle("change");
}

// Set up the click event on the accordion itself
// When a panel is clicked, that event will bubble up
// to the accordion and can be handled there.
document.querySelector(".dropdown").addEventListener("click", function(event){

  // Check to see if the clicked panel was the currently open one.
  let alreadyActive = event.target.classList.contains("active");
  
  // Loop over all the panels an close each one
  document.querySelectorAll(".panel").forEach(function(panel){
    panel.style.maxHeight = "0";
    panel.previousElementSibling.classList.remove("active");
  });

  // If the clicked panel wasn't the already active one go ahead
  // and open the clicked panel. Otherwise, do nothing and leave
  // all the panels closed.
  if(!alreadyActive){
    // Then show the clicked panel which is accessible as event.target
    event.target.classList.add("active");
    var panel = event.target.nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + "px";
  }

});

//desktop
document.querySelector(".dropdown2").addEventListener("click", function(event){


  let alreadyActive = event.target.classList.contains("active2");

  document.querySelectorAll(".panel2").forEach(function(panel){
    panel.style.maxHeight = "0";
    panel.previousElementSibling.classList.remove("active2");
  });

  if(!alreadyActive){
    event.target.classList.add("active2");
    var panel = event.target.nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + "px";
  }

});

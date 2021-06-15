$(document).ready(function() {
	$("#book").submit(function() {
	  event.preventDefault();
	  const nameInput = $("input#name").val();
	  const descriptionInput = $("input#description").val();
	  const timeInput = $("input#time").val();
	  const dateInput = $("input#date").val();
      
	  $(".name").text(nameInput);
	  $(".description").text(descriptionInput);
	  $(".time").text(timeInput);
	  $(".date").text(dateInput);
	});
      });
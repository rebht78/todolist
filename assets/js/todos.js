// assigning each li element with a click event handler
$("ul").on("click", "li", function() {
	// toggling the class completed when the user clicked on li
	$(this).toggleClass("completed");	
});

// assigning each span element with a click event handler
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$(".todo_input").keypress(function(event){
	if (event.which === 13)
	{
		var todo_input = $(this).val();

		$(this).val("");

		$("ul").append("<li><span class='task'><i class='fa fa-trash'></i></span> "+todo_input+"</li>");
	}
});

$(".fa-plus").click(function() {
	$(".todo_input").fadeToggle();
});

$(".fa-question-circle-o").click(function() {
	alert("Help for this to do list coming soon!");
});

$(".fa-pencil").click(function() {
	var headingContent = prompt("Enter To Do List Heading for your reference", "To Do List 1");
	if (!headingContent)
	{
		headingContent = "To Do List";
	}
	$("#headerContent").text(headingContent);

});

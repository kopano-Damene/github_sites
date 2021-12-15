//the code under will execute when the document is fully loaded
$(document).ready(function() {
	//Modal open
  $("#create-link").click(function(){
  	$('#create_l_modal').show();
	});
	//Modal close
	$(".close").click(function(){
  	$('#create_l_modal').hide();
	});
	
});

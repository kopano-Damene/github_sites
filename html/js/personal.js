$(document).ready(function() {

  	$("#create-link").click(function(){
  		$("#create_l_modal").show();
		$("#create").click(function(){
			alert("The create button is clicked");
	  	});
	});

	$(".close").click(function(){
  		$('#create_l_modal').hide()
	});
	
});

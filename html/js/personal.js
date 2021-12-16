$(document).ready(function() {

	function addCart() {
		$(".link_row").append(' \
			<div class="col-md-3">\
				<div class="card">\
					<div class="card-body">\
						<h5 class="card-title">BYU-Pathway Portal</h5>\
						<a href="https://www.byupathway.org/sign-in" class="btn btn-secondary btn-lg btn-responsive" role="button" target="_blank">Log in page</a>\
					</div>\
				</div>\
			</div>\
		');
	};

	function addRow() {
		$("div #links").append("this is added")
	};

  	$("#create-link").click(function(){
  		$("#create_l_modal").show();

		$("#create").click(function(){
			addRow();
			// addCart();
		});
	});

	$(".close").click(function(){
  		$('#create_l_modal').hide()
	});
	
});

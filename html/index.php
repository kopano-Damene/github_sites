<!DOCTYPE html>
<html dir="ltr" lang="en">
	<head>
		<?php require_once 'include.head.php'; ?>
		<style>
			.btn-responsive {
				width: 100%;
			}
		</style>
	</head>
	<body>
		<div id="create_l_modal" class="modal">
			<div class="modal-content">
				<span class="close">&times;</span>
				<form>
					<div class="form-group">
					<label for="link-title">Title</label>
					<input type="text" class="form-control" id="link-title" placeholder="eg. Linkedin...">
					</div>
					<div class="form-group">
					<label for="link">Paste Link</label>
					<input type="text" class="form-control" id="link" placeholder="eg. wwww.linkein.com..">
					</div>
					<button type="submit" id="create" class="btn btn-primary btn-lg btn-block">Create</button>
				</form>
			</div>
		</div>
		<div class="preloader">
			<div class="lds-ripple">
				<div class="lds-pos"></div>
				<div class="lds-pos"></div>
			</div>
		</div>
		<?php require_once 'include.main_wrapper.php'; ?>
		<?php require_once 'include.footer.php'; ?>
	</body>
</html>
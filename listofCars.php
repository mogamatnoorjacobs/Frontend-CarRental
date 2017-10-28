<?php
include("templates/inc_header.html");
?>
<!-- Script to validate the car form and populate the dropdown list with the car categories-->



	<h1>All Cars</h1>
	<div id="categoryButtons"></div>
	<br />

		<table class="table" id="table">
			<thead>
		<tr>
			<th>ID</th><th>Make</th><th>Model</th><th>Year</th><th>Available To Rent</th><th>Action</th>
		</tr>
		<thead>
			<tbody>
				<script src="js/listofcars.js"></script>
				<!-- <tr>



						<td><div id="carId"></div></td>
						<td><div id="Make"></div></td>
						<td><div id="Model"></div></td>
						<td><div id="Year"></div></td>
						<td><div id="Quantity"></div></td>
						<td><span id="btnEdit"></span><span id="btnDelete"></span></td>
					</tr> -->
					<div id="editAndDeleteButtons"></div>
				</tbody>
			</table>

<?php
include("templates/inc_footer.html");
?>

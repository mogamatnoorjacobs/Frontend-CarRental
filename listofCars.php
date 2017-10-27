<?php
include("templates/inc_header.html"); 
?>
<!-- Script to validate the car form and populate the dropdown list with the car categories-->


<div id="container">
	<h1>All Cars</h1>
	<div id="categoryButtons"></div>
	<br />
	<table class="table">
	<tr>
		<th>ID</th><th>Make</th><th>Model</th><th>Year</th><th>Available To Rent</th>
	</tr>
	<script src="js/listofcars.js"></script>
	<td><div id="carId"></div></td>
	<td><div id="Make"></div></td>
	<td><div id="Model"></div></td>
	<td><div id="Year"></div></td>
	<td><div id="Quantity"></div></td>
</table>

</div>

<?php
include("templates/inc_footer.html"); 
?>
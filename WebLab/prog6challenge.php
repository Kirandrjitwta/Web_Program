<?php
$user = "Kiran";
?>
<!DOCTYPE html>
<html>
<head> 
	<title> program 6 </title>
	<style>
		body {
			background-color: blue;
			font-family: Times new Roman;
			color: white;
		}
	</style>
</head>
<body>
<h2> <?php echo '<center>'.$user; ?>,Welcome to Sample PHP Script.</center> </h2>
<?php
print"<h3>This program displays the number of pages visit</h2>";
print "<h3> REFRESH PAGE </h3>";
$name="counterchallenge.txt";
$file = fopen($name,"r");
$hits = fscanf($file,"%d");
fclose($file);
$hits[0]++;
$file = fopen($name,"w");
fprintf($file,"%d",$hits[0]);
fclose($file);
print "Total number of views: ".$hits[0];
?>
</body>
</html>


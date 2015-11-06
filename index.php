<!DOCTYPE HTML>
<html>
<head>
<title>Bank Heist Game</title>
<style type="text/css">

body {
	font-family: arial;
}

.container {
	margin: 0 auto;
	width: 300px;
}

</style>
</head>
<body>
<div class="container">
	<div id="bankmoney">Bank Money: $<span class="bankmoney"></span></div>
	<div id="mymoney">My Money: $<span class="mymoney"></span></div>
	<div id="currentweapon">Current Weapon: <span class="weapon"></span></div>
	<div id="upgrades">Next Weapon: <span class="nextWeapon"></span></div>
	<div id="status">Status: <span class='status'></span></div>
	<div id="bank">
	<img src="images/bank.jpg" class="bank" style="width: 300px; margin-top: 40px;"/>
	<br /><br />
	<button class="save">Save Game</button>
	</div>
	<div class="test" style="background-color: blue; height: 40px; width: 40px;"></div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script type="text/javascript" src="js/custom.js"></script>
<script type="text/javascript" src="js/player.js"></script>
</body>
</html>
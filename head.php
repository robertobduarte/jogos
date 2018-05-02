<?php 
include_once __DIR__ . "/config.php";

?>

<!DOCTYPE html>
<html lang="pt">
	<head>
		<meta charset="UTF-8">
		<title><?=APP?></title>

		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- CSS -->
		<link href="css/bootstrap.css" rel="stylesheet">
		<link href="css/jquery-ui.css" rel="stylesheet">
		<link href="css/jquery-ui.theme.css" rel="stylesheet">
		<link href="css/jquery-ui.structure.css" rel="stylesheet">
		<link href="css/font-awesome.css" rel="stylesheet">
		<link href="css/sistema.css?v=<?= filemtime('css/sistema.css'); ?>" rel="stylesheet">

		<!-- JS -->		
		<script src="js/jquery-3-2-1.js"></script>
		<script src="js/jquery-ui.js"></script>
		<script src="js/bootstrap.js"></script>
		<script src="js/sistema.js?v=<?= filemtime('js/sistema.js'); ?>"></script>
	
	</head>
	<body>
  
	<nav class="navbar navbar-default navbar-fixed-top">	
		<nav class="faixa"></nav>
		<div class="container">

			<div class="navbar-header">	
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu">
			        <span class="sr-only">Toggle navigation</span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			    </button>			
				<a class="navbar-brand" href="<?php echo '/'. APP ?>"><img height='30px' src="img/logo.png" alt="" class=""></a>
			</div>
			<div class="collapse navbar-collapse col-md-8 col-sm-12" id="menu">				
				<ul class="nav navbar-nav">							
				</ul>				
			</div><!-- /.navbar-collapse -->			
			
		</div>
	</nav>


	<div class="container" id="panel_main" style="margin-top:80px;">
		
		<div class="corposistema">

		

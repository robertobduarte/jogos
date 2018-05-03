<?php
include_once __DIR__ . "/head.php";

?>

<script src="js/memoria.js?v=<?= filemtime('js/memoria.js'); ?>"></script>

<div class="row panel_main_page">

	<div class="col-md-12 panel_conteudo">

		<div class="row">
			<!-- <h1>Jogo da Memória</h1> -->
		</div>

		<div class="row">

			<div class="col-md-12" id="jogo" style="">
			
				<div class="col-md-12" id="jogada"><h2></h2></div>
				<div class="col-md-10 col-md-offset-1" id="tabuleiro">
				</div>

			</div>

		</div>

	</div><!-- .panel_conteudo -->

</div><!-- .panel_main_page -->

<?php include_once __DIR__ . "/footer.php"; ?>


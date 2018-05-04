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

			<div class="row" id="jogo" style="">
			
				<div class="col-md-12" id="jogada"><h2></h2></div>
				<div class="col-md-10 col-md-offset-1 col-sm-12 col-xs-12" id="tabuleiro">
				</div>

			</div>

		</div>

	</div><!-- .panel_conteudo -->

	<div class="modal fade" id="modal_resultado" tabindex="-1" role="dialog">

		<div class="modal-dialog" role="document">

	    	<div class="modal-content">

			    <div class="modal-header">
			    	<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			    	<!-- <h4 class="modal-title">PARABÉNS</h4> -->
			    </div>

	      		<div class="modal-body">
	        		<h1 id="vencedor"><!-- Parabéns jogador!!! --></h1>
	        		<p id='pontuacao'>Pontos:</p>
	        		<p id='jogadas'>Jogadas:</p>

	        		<h3 id='perdedor'><!-- Não fique triste, tente da próxima vez jogador. --></h3>

	      		</div>
	      		
	      		<div class="modal-footer">
			        <button type="button" class="btn btn-primary" id='novo'>Novo Jogo</button>
	      		</div>

	    	</div><!-- /.modal-content -->

	  	</div><!-- /.modal-dialog -->

	</div><!-- /.modal -->

</div><!-- .panel_main_page -->

<?php include_once __DIR__ . "/footer.php"; ?>


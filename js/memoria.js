
var icone = '<img src="img/duvida.jpg" alt="" class="img-circle" style="max-width:50px;">';
var escolha = [];
var conjuntos=[];
var impares = [];
var embaralhados=[];
var qtdCartas = 10;
var substantivos = [
	['Índio', 'Tribo'],
	['Cobra', 'Covio'],
	['Peixe', 'Cardume'],
	['Boi', 'Manada'],
	['Ilha', 'Arquipélago'],
	['Livro', 'Acervo'],
	['Abelha', 'Colméia'],
	['Músico', 'Banda'],
	['Soldado', 'Batalhão'],
	['Lobo', 'Alcateia'],
	['Camelo', 'Cáfila'],
	['Navio', 'Esquadra'],
	['Chave', 'Molho'],
	['Banana', 'Penca'],
	['Pinto', 'Ninhada'],
	['Árvores Frut.', 'Pomar'],
	['Porco', 'Vara'],
	['Flor', 'Ramalhete'],
	['Roupa', 'Enxoval'],
	['Pessoa', 'Multidão'],
	['Bispo', 'Concílio'],
	['Ator', 'Elenco'],
	['Médico', 'Junta'],
	['Vegetação', 'Flora'],
	['Lenha', 'Feixe'],
	['Inseto', 'Nuvem'],
	['Estudante', 'Turma']
];
var jogadores = [{ nome: '', pontos : 0, classe :  'correta1', background :  'blue' },{ nome: '', pontos : 0 , classe :  'correta2', background :  'red' }] ;
var vez = 1;



$( document ).ready( function(){

	defineJogadores();
	defineQtdCartas();
	carregaCartas();
	montaTabuleiro();
	defineJogadorDaVez();


	$( document ).on( "click", "div[id*='opcao_']", function(){


		if( !$(this).hasClass('cartaVirada') ){	

			var nome = $(this).attr('data-nome');
			var id = $(this).attr('data-id');
			escolha.push( id );

			var altura = $(this).find('img').height()-20;
			$(this).find('img').hide();

			$(this).append('<div style="height:'+altura+'px"><h3>'+ nome + '</h3></div>')
			$(this).addClass('cartaVirada');
			$(this).addClass('cartaEscolhida');
		}

		console.log(escolha);

		if( escolha.length == 2 ){
			resultado( id );			
		}

		


	});


});


function defineQtdCartas(){

	var qtd = prompt("Digite a número de cartas:");

	if( ( parseInt( qtd ) > 3 ) && ( parseInt( qtd ) <= 20 ) ){

		qtdCartas = qtd;
	}
}


function defineJogadores(){

	 j1 = prompt("Nome do jogador 1");
	 jogadores[0].nome = j1 ;
	 j2 = prompt("Nome do jogador 2");
	 jogadores[1].nome = j2 ;

}

function defineJogadorDaVez(){

	$('#jogo').removeClass(jogadores[vez].background);

	 if( vez == 0 ){

	 	vez = 1;

	 }else{

	 	vez = 0;
	 }

	 $('#jogada').find('h2').text( jogadores[vez].nome + ': ' + jogadores[vez].pontos );	 
	 $('#jogo').addClass(jogadores[vez].background);
}


function addPontos(){

	jogadores[vez].pontos += 1;
	//alert(jogadores[vez].nome + ': ' + jogadores[vez].pontos);
}

function resultado( id ){

	bloqueiaCartas();

	if( escolha[0] == escolha[1] )	{

		//alert('parabens');
		addPontos();
		removeClasseEscolhida();
		desbloqueiaCartas();
		defineJogadorDaVez();

	}else{

		setTimeout(function() { 
			desviraCartas();
		}, 1000);
		
	}

	escolha = [];

}

function desviraCartas(){

	var cart = $('.cartaEscolhida');
	$.each( cart, function(){

		$(this).find('img').show();
		$(this).find('div').remove();
		$(this).removeClass('cartaVirada');
		$(this).removeClass('cartaEscolhida');
			
	});

	desbloqueiaCartas();
	defineJogadorDaVez();
}

function removeClasseEscolhida(){

	var cart = $('.cartaEscolhida');
	$.each( cart, function(){

		$(this).removeClass('cartaEscolhida');
		$(this).addClass('correta');
		$(this).addClass(jogadores[vez].classe);
			
	});

}
		

function bloqueiaCartas(){
	
	var cartas = $("div[id*='opcao_']").css('pointer-events', 'none');
}

function desbloqueiaCartas(){

	var cartas = $("div[id*='opcao_']");

	$.each( cartas, function(){

		if( !$(this).hasClass('correta') ){

			$(this).css('pointer-events', 'visible');
		}
		
	});
}

function carregaCartas(){

	while( conjuntos.length < qtdCartas ){

		var x = Math.floor((Math.random() * qtdCartas) + 1);

	    if ( typeof substantivos[x] !== 'undefined' ) {

	    	//adiciona o index no array cartas
			conjuntos.push( substantivos[x] );

			//remove o index do array substantivos
	        substantivos.splice(x, 1);
	    }

	}

	embaralhaCartas();

}

function embaralhaCartas(){

	for( var i=0; i < conjuntos.length; i++ ){

		impares.push( { substantivo: conjuntos[i][0], id: i } );
		impares.push( { substantivo: conjuntos[i][1], id: i } );

	}
	//alert(impares.length);
	distribuiCartas();

}

function distribuiCartas(){

	while( impares.length > 1 ){

		var x = Math.floor((Math.random() * qtdCartas*2) + 1);

	    if ( typeof impares[x] !== 'undefined' ) {

	    	//adiciona o index no array cartas
			embaralhados.push( impares[x] );

			//remove o index do array substantivos
	        impares.splice(x, 1);
	    }

	}

	/*console.log(impares);*/
	console.log(embaralhados);

}


function montaTabuleiro(){

	var tabuleiro = ''
	for( var i=0; i<embaralhados.length; i++ ){

		tabuleiro += '<div class="col-md-2 col-sm-2 col-xs-3 carta" id="opcao_'+ i +'" data-nome="'+embaralhados[i].substantivo+'" data-id="'+embaralhados[i].id+'">'+icone+'</div>';
	}

	console.log(tabuleiro);
	$('#tabuleiro').append(tabuleiro);
}
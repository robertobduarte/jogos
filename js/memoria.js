
var icone = '<img src="img/duvida.jpg" alt="" class="img-circle" style="max-width:100px;">';
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
	['Pinto', 'Ninhada']
];

$( document ).ready( function(){

	
	carregaCartas();
	montaTabuleiro();


	$( document ).on( "click", "div[id*='opcao_']", function(){


		if( !$(this).hasClass('cartaVirada') ){	

			/*var id = $(this).attr('id');
			var opcao = id.substr(id.indexOf('_')+1);*/

			var nome = $(this).attr('data-nome');
			var id = $(this).attr('data-id');
			escolha.push( id );

			var altura = $(this).find('img').height()-20;
			$(this).find('img').hide();

			$(this).append('<div style="height:'+altura+'px"><h3>'+ nome + '</h3></div>')
			$(this).addClass('cartaVirada');
		}

		console.log(escolha);

		if( escolha.length == 2 ){
			resultado( id );			
		}

		


	});


});


function resultado( id ){

	if( escolha[0] == escolha[1] )	{
		alert('parabens');
	}else{

		var cart = $('div[data-id="'+id+'"');
		$.each( cart, function(){

			$(this).find('img').show();
			$(this).find('div').remove();
			$(this).find('div').removeClass('cartaVirada');
			
		});
	}
	escolha = [];
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

	    /*console.log(impares);*/
	}

	/*console.log(impares);*/
	console.log(embaralhados);

}


function montaTabuleiro(){

	var tabuleiro = ''
	for( var i=0; i<embaralhados.length; i++ ){

		tabuleiro += '<div class="col-md-2 col-sm-3 col-xs-4 carta" id="opcao_'+ i +'" data-nome="'+embaralhados[i].substantivo+'" data-id="'+embaralhados[i].id+'">'+icone+'</div>';
	}

	console.log(tabuleiro);
	$('#tabuleiro').append(tabuleiro);
}
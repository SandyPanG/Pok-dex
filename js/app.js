var obtenerPokemon = function(url){
	$.ajax({
			url: url,
			type: 'GET',
		dataType: 'json',
		data: {'limit': '12'},
    });
    
    renderPokemonList(filterPokemonByTypeAndMinAtk(allPokemons));
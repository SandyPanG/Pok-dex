$(document).ready(function(){
	var dibujarPokes = function(data){
			var name = "";
			var url = "";
			data.forEach(function(element) {
					name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
					url = $("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name));
				$('#elementos').append(armarTemplate(name,url));
			});
	};


	// var armarTemplate = function(name,url){
	// 		var t = "<div class='elemento'><img src='" + name +"'/><a href='" + url + "'>Ver más </a></div>"
	// 		return t;
	// };

	var ajaxPoke = function(poke){
		$.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/',
            type: "GET",
            crossDomain: true,
            data: JSON.stringify(somejson),
            dataType: "json",
            success: function (response) {
                var resp = JSON.parse(response)
                alert(resp.status);
            },
            error: function (xhr, status) {
                alert("error");
            }
        })
			// $.ajax({
			// 		url: 'http://pokeapi.co/api/v2/pokedex/1/',
			// 		type: 'GET',
			// 		datatype: 'json',
			// 		data: {'limit' : '12'}
			// })
	
// 			.done(function(response){
// 					console.log(response);
// 					dibujarPokes(response.data);               
// 			})

// 			.fail(function(){
// 					console.log(error);        
// 			});
// 	}
	

// 	$("#search-poke").click(function(event){
// 			console.log("entro");
// 			$('#elementos').empty();
// 			var gif = $('#poke-text').val();
// 			ajaxPoke(name);
			
// 	})


// });
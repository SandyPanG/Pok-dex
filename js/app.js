$(document).ready(function(){
	// var dibujarPokes = function(data){
	// 		var name = "";
	// 		var url = "";
	// 		data.forEach(function(element) {
	// 				name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
	// 				url = $("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name));
	// 			$('#elementos').append(armarTemplate(name,url));
	// 		});
		$("#search-poke").click(function(event){
			event.preventDefault();
			console.log("entro");
			$('#elementos').empty();
			var gif = $('#poke-text').val();
			console.log(gif);
			ajaxPoke();
		});
		var ajaxPoke = function(poke){
			$.ajax({
				url: 'https://pokeapi.co/api/v2/pokemon/',
				type: 'GET',
				datatype: 'json',
		})

		.done(function(response){
				var data = response;
				console.log(response);
				dibujarPokes(response);               
		})

		.fail(function(){
				console.log(error);        
		});
	};
	});


	// var armarTemplate = function(name,url){
	// 		var t = "<div class='elemento'><img src='" + name +"'/><a href='" + url + "'>Ver más </a></div>"
	// 		return t;
	// };

	// var ajaxPoke = function(poke){
	// 	$.ajax({
    //         url: 'https://pokeapi.co/api/v2/pokemon/',
    //         type: "GET",
    //         dataType: "json",
    //         success: function (response) {
    //             var resp = JSON.parse(response)
    //             alert(resp.status);
    //         },
    //         error: function (xhr, status) {
    //             alert("error");
    //         }
    //     })
		// 	$.ajax({
		// 			url: 'http://pokeapi.co/api/v2/pokemon/',
		// 			type: 'GET',
		// 			datatype: 'json',
		// 	})
	
		// 	.done(function(response){
		// 			var data = response;
		// 			console.log(response);
		// 			// dibujarPokes(response.data);               
		// 	})

		// 	.fail(function(){
		// 			console.log(error);        
		// 	});
		// };
	

// 	$("#search-poke").click(function(event){
// 			console.log("entro");
// 			$('#elementos').empty();
// 			var gif = $('#poke-text').val();
// 			ajaxPoke(name);
			
// 	})


// });
$(document).ready(function () {
	var dibujarPokes = function (data) {
		console.log(data);
		
		// data.forEach(function (pokemon) {
			var name = data.name;
			var img = data.sprites.front_shiny;
			$('#elementos').append(armarTemplate(name, img));			
		// });
	}
	$("#search-poke").click(function (event) {
			event.preventDefault();
			// console.log("entro");
			$('#elementos').empty();
			var poke = $('#poke-text').val();
					   $('#poke-text').val("");//limpia el valor de la caja de texto
			$('#elementos').empty("");// limpia contenedor html        	
			// // console.log(poke);
			ajaxPoke(poke);
	});

	var armarTemplate = function (name, img) {
		var t = `<div class="pok col-lg-offset-3 col-lg-6">
		<img src="${img}" alt="">
		<p>${name}</p>
	</div>`
			return t;
	};
		
	var ajaxPoke = function (poke) {
			$.ajax({
				url: 'https://pokeapi.co/api/v2/pokemon/'+poke,
				type: 'GET',
				datatype: 'json',
			}).done(function (response) {
					var data = response;
					console.log(response);
					dibujarPokes(response);
			}).fail(function () {
					console.log(error);
			});
	};
		
})
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

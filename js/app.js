$(document).ready(function () {
	/*$.ajax({
		url: 'https://pokeapi.co/api/v2/pokemon/',//se agrega la URL
		success: function(group){
		console.log(group);//TODO ARREGLO

		var template = $('#template-character').html(); //no cambia Imprime el template que escribimos en el html
		var $characters = $('#characters-container');//Objeto jquerisado ya tiene función append
		console.log(template);
		//console.log(response.data.results); 20 OBJETOS CON INFO
		group.data.results.forEach(function(character){


			var data = {
				name: character.name,
				description: character.url,
			};
			//console.log(character); //CADA UNO DE LOS 20 OBJETOS CON SUS ELEMENTOS
			//console.log(data); //cambia cada ciclo
			var filledTemplate = fillTemplate(template, data); //Combina nuestro template con los datos
			console.log(filledTemplate);
			$characters.append(filledTemplate);//
		});
		}
	});*/
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
	}

	var dibujarAllPokes = function (data) {
		console.log(data);
		let result= data.results;
		
		result.forEach(function (element) {
			var name = element.name;
			var url = element.url;
			var img = url.sprites.front_shiny;
			$('#characters-container').append(armarTemplateAll(name, img));			
		});
	}

	var armarTemplateAll = function (name, img) {
		var t = `<div class="pok col-lg-offset-3 col-lg-6">
		<img src="${img}" alt="">
		<p>${name}</p>
	</div>`
			return t;
	};

	var ajaxAllPoke = function () {
		$.ajax({
			url: 'https://pokeapi.co/api/v2/pokemon/',
			type: 'GET',
			datatype: 'json',
		}).done(function (response) {
				var data = response;
				console.log(response);
				dibujarAllPokes(response);
		}).fail(function () {
				console.log(error);
		});
	};
		
	ajaxAllPoke();
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

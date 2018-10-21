$(document).ready(function(){
	
	console.log("aqui estoy");

	$("#charExample").attr("src", "./img/plot.jpeg");

	$("#tipo").on('change', function(){
		valor = $("#tipo").val();

		console.log(valor);

	});


	$("#show").click(function(){
		valor = $("#tipo").val();
		factor = $("#factor").val();
		anio = $("#anno").val();
		//factor = //
		// algo mas....
		console.log(valor);
		console.log(anio);
		console.log(factor);
		// ../
		nombreArchivo = "";
		if (factor =="precipitation"){
			nombreArchivo = "precipitation/" + factor + "_" + anio + "_" + valor + ".html"; 
			$("#charExample").load(nombreArchivo);
			console.log("hereeeeee");
		}if (factor =="temperature"){
			nombreArchivo = "temperature/" + factor + "_" + anio + "_" + valor + ".html"; 
			$("#charExample").load(nombreArchivo);
			console.log("hereeeeee");
		}


		if (factor =="matter"){
			nombreArchivo = "matter/" + factor + "_" + anio + "_" + valor + ".html"; 
			$("#charExample").load(nombreArchivo);
			console.log("hereeeeee");
		}
		

		

	

		// $("#charExample").attr("src", "./img/plot.jpeg");

	})




})

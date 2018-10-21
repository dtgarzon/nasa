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
		// ../
		nombreArchivo = "precipitacion/" + factor + "_" + anio + "_" + valor + ".html"; 

		$("#charExample").load(nombreArchivo);

		console.log(nombreArchivo);

		// $("#charExample").attr("src", "./img/plot.jpeg");

	})




})
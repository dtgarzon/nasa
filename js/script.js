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
			$("#charExample3").html("<img src='gifs/precipitation.gif' > ");
		}if (factor =="temperature"){
			nombreArchivo = "temperature/" + factor + "_" + anio + "_" + valor + ".html"; 
			$("#charExample").load(nombreArchivo);
			$("#charExample3").html("<img src='gifs/temperature.gif' > ");
		}


		if (factor =="matter"){
			nombreArchivo = "matter/" + factor + "_" + anio + "_" + valor + ".html"; 
			$("#charExample").load(nombreArchivo);
			$("#charExample3").html("<img src='gifs/matter.gif' > ");
		
		}
		

		

	

		// $("#charExample").attr("src", "./img/plot.jpeg");

	})

	
	$("#enfermedad").change(function(){
		factor = $("#factor").val();
		anio = $("#anno").val();
		enf = $("#enfermedad").val();
		nombreArchivo2= "";
		
		if(enf =="malaria"){
			nombreArchivo2 = "correlaciones/malaria/" + factor + "_" + anio + ".html";	
			$("#charExample2").load(nombreArchivo2);
		}
		if(enf =="rabia"){
			nombreArchivo2 = "correlaciones/rabia/" + factor + "_" + anio + ".html";	
			$("#charExample2").load(nombreArchivo2);
		}
		if(enf =="tuberculosis"){
			nombreArchivo2 = "correlaciones/tuberculosis/" + factor + "_" + anio + ".html";	
			$("#charExample2").load(nombreArchivo2);
		}
	});
	





})

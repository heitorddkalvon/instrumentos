$(document).ready(function(){
	$("#form").submit(function(event){
		event.preventDefault();
		var item = $("#item").val();
		var preco = $("#preco").val();
		$("#tabela tbody").append("<tr><td>" + item + "</td><td>" + preco + "</td><td><button class='btn btn-danger btn-sm remover'>Remover</button></td></tr>");
		$("#item").val("");
		$("#preco").val("");
	});

	$("#tabela").on("click", ".remover", function(){
		$(this).parents("tr").remove();
	});
});

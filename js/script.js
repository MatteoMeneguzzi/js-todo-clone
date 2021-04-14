$(document).ready(function () {
	// Lista cose da fare

	var toDoItems = [
		{
			text: "Sessione allenamento mattutino",
			completed: false,
		},
		{
			text: "Lezione Boolean",
			completed: false,
		},
		{
			text: "Esercizio Boolean",
			completed: true,
		},
		{
			text: "Conquistare il mondo",
			completed: false,
		},
	];

	// References

	var toDoList = $(".todos");
	var addToDo = $(".add-todo");
	var template = $("#template li");

	// Popolazione toDoList

	for (var i = 0; i < toDoItems.length; i++) {
		var toDo = toDoItems[i];

		// Template
		var item = template.clone();

		item.find(".text").text(toDo.text);

		// Cosa succede se uno degli item già presenti nella lista è completed
		if (toDo.completed) {
			item.find(".text").addClass("completed");
		}

		// Aggiunta alla lista dell'item
		toDoList.append(item);
	}

	// Inserimento nuovo toDo

	addToDo.keyup(function (event) {
		console.log(event.which);

		if (event.which === 13) {
			var text = addToDo.val().trim();

			if (text !== "") {
				// console.log(text);

				// Ritorno a prendere item che viene sovrascritto in questa casistica
				var item = template.clone();

				// il testo dell'item sarà il testo (valore) che abbiamo inserito nell'input, e reso con la variabile text
				item.find(".text").text(text);

				// Aggiunta alla lista dell'item
				toDoList.append(item);

				// Reset del valore dell'inputer
				addToDo.val("");

				// Rimozione toDoItem, che funziona però è brutto da vedere, meglio andare con una soluzione più coerente

				// toDoList.find("li i").click(function () {
				// 	$(this).parent().remove();
				// });
			}
		}
	});

	// Rimozione toDoItem corretta, attraverso "on" che permette di manipolare un elemento a partire da un riferimento più ampi
	// $("body") è l'elemento che vogliamo monitorare, di solito non si riferisce al body che è troppo ampio ma a una sezione del dom
	// "on" è il gestore di eventi
	// "click" è l'evento da monitorare
	// ".todos li i" sono gli elementi a cui è riferito l'evento "click"

	$("body").on("click", ".todos li i", function () {
		$(this).parent().remove();
	});

	// Rigare item completati o rimuovere linea da item non completati

	$("body").on("click", ".todos li span", function () {
		$(this).toggleClass("completed");
	});

	// End doc ready
});

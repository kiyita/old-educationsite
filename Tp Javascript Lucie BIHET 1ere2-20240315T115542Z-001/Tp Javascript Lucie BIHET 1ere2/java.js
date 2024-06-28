/*Cours*/

let cours = document.getElementById("cours");
let titre = document.getElementById("titre"); 

titre.addEventListener('click',  
    () => { 
        if(cours.style.display == "block")
        {
            cours.style.display = "none";
        }
        else
        {
            cours.style.display = "block";
        }
    }
);

/*Activité 1*/

let valider = document.getElementById("valider");
let resultat1 = document.getElementById("resultat");
let listes = document.querySelectorAll("select");
let verification = document.querySelectorAll(".verification");

valider.addEventListener('click', resultat);

function resultat() {
	let repV = 0
	let repF = 0
	let vide = "Les réponses de ces questions sont vides : "
	let testVide = 0
	for (let indice=0; indice<5; indice++) {
		if (listes[indice].value == "") {
			alert("La réponse à la question " + (indice+1) + " n'est pas sélectionnée");
			break
		}
        else if (listes[indice].value == indice+1) {
			verification[indice].innerHTML = "Vrai";
        	verification[indice].style.color = "green";
            repV += 1;
        }
        else {
			verification[indice].innerHTML = "Faux";
        	verification[indice].style.color = "red";
            repF += 1;
        };
    resultat1.innerHTML = "Vous avez " + repV + " réponses justes et " + repF + " réponses fausses !"
    };
	if (repV == 5) {
        alert("C'est un sans-faute ! Vous êtes un.e génie des nomenclatures :)")
    }
    else if (repF == 5) {
        alert("Aucune bonne réponse ? Vous devriez revoir le cours...")
    };
};


/*Activité 2*/

const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart);
});

droppableElements.forEach(elem => {
  elem.addEventListener("dragenter", dragEnter);
  elem.addEventListener("dragover", dragOver);
  elem.addEventListener("dragleave", dragLeave);
  elem.addEventListener("drop", drop);
});



function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id); 
  }


function dragEnter(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover");
  }
}

function dragOver(event) {
  if(!event.target.classList.contains("dropped")) {
    event.preventDefault();
  }
}

function dragLeave(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable-hover");
  }
}

function drop(event) {
	event.preventDefault();
	event.target.classList.remove("droppable-hover");
	const draggableElementData = event.dataTransfer.getData("text");
	const droppableElementData = event.target.getAttribute("data-draggable-id");
	const isCorrectMatching = draggableElementData === droppableElementData;
	if(isCorrectMatching) {
		const draggableElement = document.getElementById(draggableElementData);
		event.target.classList.add("dropped");
		event.target.style.backgroundColor = "green";
		draggableElement.classList.add("dragged");
		draggableElement.setAttribute("draggable", "false");
	}
	else {
		const draggableElement = document.getElementById(draggableElementData);
		event.target.classList.add("dropped");
		event.target.style.backgroundColor = "red";
		draggableElement.classList.add("dragged");
		draggableElement.setAttribute("draggable", "false");
	}
}


/*Refresh*/

let recommencer = document.querySelector("#refresh");
recommencer.onclick = function() {location.reload()}

let recommencer2 = document.querySelector("#refresh2");
recommencer2.onclick = function() {location.reload()}
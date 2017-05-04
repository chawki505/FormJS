//pour cacher les message d'erreur
function cacherMsgErreur() {
	var textes = document.querySelectorAll('.border');
	for (var i = 0; i < textes.length; i++) {
		textes[i].style.display = 'none';
	};
};

cacherMsgErreur();


// verifie si le nom ou le prenom sont bien saisi sinon affiche le message d'erreur et les bordure en rouge
function testChampCaractere(idChamp, idMsg) {
	var champInpute = document.getElementById(idChamp);
	var champMsg = document.getElementById(idMsg);

	if (champInpute.value.length >= 2) {
		champInpute.className = 'correct';
		champMsg.style.display = 'none';
		return true;

	} else {
		champInpute.className = 'incorrect';
		champMsg.style.display = 'inline-block';
		return false;
	}
};

// verifie si l'age est bien saisi sinon affiche le message d'erreur et les bordure en rouge
function testChampAge(idChamp, idMsg) {
	var champInpute = document.getElementById(idChamp);
	var champMsg = document.getElementById(idMsg);

	if (champInpute.value >= 5 && champInpute.value <= 100) {
		champInpute.className = 'correct';
		champMsg.style.display = 'none';
		return true;

	} else {
		champInpute.className = 'incorrect';
		champMsg.style.display = 'inline-block';
		return false;
	}
};

// verifie si l'age est bien saisi sinon affiche le message d'erreur et les bordure en rouge
function testChampSelect(idChamp, idMsg) {
	var champInpute = document.getElementById(idChamp);
	var champMsg = document.getElementById(idMsg);

	if (champInpute.selectedIndex != 0) {
		champInpute.className = 'correct';
		champMsg.style.display = 'none';
		return true;

	} else {
		champInpute.className = 'incorrect';
		champMsg.style.display = 'inline-block';
		return false;
	}
};


//verifie l'adresse mail
function validateEmail(idChamp, idMsg) {
	var champInpute = document.getElementById(idChamp);
	var champMsg = document.getElementById(idMsg);
	var expression = /\S+@\S+\.\S+/;

	if (expression.test(champInpute.value)) {
		champInpute.className = 'correct';
		champMsg.style.display = 'none';
		return true;

	} else {
		champInpute.className = 'incorrect';
		champMsg.style.display = 'inline-block';
		return false;
	}
};


//verifie pseudo
function testPseudo(idChamp, idMsg) {
	var champInpute = document.getElementById(idChamp);
	var champMsg = document.getElementById(idMsg);

	if (champInpute.value.length >= 4) {
		champInpute.className = 'correct';
		champMsg.style.display = 'none';
		return true;

	} else {
		champInpute.className = 'incorrect';
		champMsg.style.display = 'inline-block';
		return false;
	}
};




//verifie le mot de passe si correct
function testMotDePasse(idChamp, idMsg) {
	var champInpute = document.getElementById(idChamp);
	var champMsg = document.getElementById(idMsg);

	if (champInpute.value.length >= 6) {
		champInpute.className = 'correct';
		champMsg.style.display = 'none';
		return true;

	} else {
		champInpute.className = 'incorrect';
		champMsg.style.display = 'inline-block';
		return false;
	}
};


//verifie si le mdp1 est correct puis verifi si il sont identique
function testValideMotDePasse(idMdp1, idMsg1, idMdp2, idMsg2) {
	var mdp2 = document.getElementById(idMdp2);
	var champMsg = document.getElementById(idMsg2);
	var mdp1 = document.getElementById(idMdp1);

	if (testMotDePasse(idMdp1, idMsg1)) {

		if (mdp1.value == mdp2.value) {
			mdp2.className = 'correct';
			champMsg.style.display = 'none';
			return true;

		} else {
			mdp2.className = 'incorrect';
			champMsg.style.display = 'inline-block';
			return false;
		}

	} else {
		mdp2.className = 'incorrect';
		champMsg.style.display = 'inline-block';
		return false;
	}
};


//reset le form
function resetForm() {
	// clearing inputs
	var inputs = document.querySelectorAll('input');
	for (var i = 0; i < inputs.length; i++) {
		switch (inputs[i].type) {
			case 'text':
			case 'password':
				inputs[i].value = '';
				break;
			case 'radio':
			case 'checkbox':
				inputs[i].checked = false;
		}
		inputs[i].classList.remove("incorrect");
		inputs[i].classList.remove("correct");

	}

	// clearing selects
	var selects = document.querySelectorAll('select');
	for (var i = 0; i < selects.length; i++) {
		selects[i].selectedIndex = 0;
		selects[i].classList.remove("incorrect");
		selects[i].classList.remove("correct");
	}
	cacherMsgErreur();
	return true;
};


// verifie le form avant l'envoi
function submitForm() {
	if (testChampSelect('civilite', 'civiliteMsg') && testChampCaractere('nom', 'nomMsg') &&
		testChampCaractere('prenom', 'prenomMsg') && testChampAge('age', 'ageMsg') &&
		validateEmail('email', 'emailMsg') && testChampSelect('pays', 'paysMsg') &&
		testPseudo('pseudo', 'pseudoMsg') && testMotDePasse('mdp1', 'mdp1Msg') &&
		testValideMotDePasse('mdp1', 'mdp1Msg', 'mdp2', 'mdp2Msg')) {

		alert("Formulaire envoyer !");
		return true;

	} else {
		return false;
	}

}



window.onload;

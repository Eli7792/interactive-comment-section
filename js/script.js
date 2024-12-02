// Récupérer les éléments du DOM
const sendButton = document.getElementById('sendButton');
const writeComment = document.getElementById('writeComment');
const commentsSection = document.getElementById('commentsSection');
const editButton = document.getElementById('editButton');
const popup = document.getElementById('popup');
const contenu = document.getElementById('contenu');
const popupDiv = document.getElementById('popupDiv');
const encadreTexte = document.getElementById('encadreTexte');
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

//Variables
let commentId = 1;
let currentId = null;
let commentaireActif = null;


//Écouteurs d'évènements
sendButton.addEventListener('click', envoyerCommentaire);
editButton.addEventListener('click', envoyerCommentaireModifier);
noButton.addEventListener('click', supprimerCommentaire);
yesButton.addEventListener('click', supprimerCommentaire);

//Fonctions

function classerCommentaire() {

    //Récupérer tous les commentaires de la section
    const commentaires = Array.from(commentsSection.children);
    //Trier les commentaires en fonction des votes
    const commentairesTries = commentaires.sort((a, b) => {
        //Récupérer les compteurs de votes
        const votesA = parseInt(a.querySelector('input[type="text"]').value);
        const votesB = parseInt(b.querySelector('input[type="text"]').value);

        //trier par ordre décroissant des votes
        return votesB - votesA;
    });

    //Réinsérer les commentaires triés dans la section
    commentairesTries.forEach(commentaire => {
        commentsSection.appendChild(commentaire);
    });

}

function modifierCommentaire(event) {
    console.log('modifierCommentaire')

    //Trouver le commentaire associé au bouton
    const commentaireDiv = event.target.closest('.commentaire');

    //Récupérer le texte du commentaire et le placer dans le textarea
    writeComment.value = commentaireDiv.querySelector('.commentaireTexte').innerText;


    //Récupérer l'id du commentaire à modifier
    currentId = commentaireDiv.id;

    //Changer le bouton send pour le bouton edit
    sendButton.classList.add('hidden');
    editButton.classList.remove('hidden');

    console.log(currentId);

}
function envoyerCommentaireModifier() {
    console.log('envoyerCommentaireModifier');


    //Récupérer le texte du textarea
    commentText = writeComment.value;

    // Vérifier si un ID de commentaire est sélectionné
    if (currentId) {
        // Trouver le commentaire à modifier
        const commentaireDiv = document.getElementById(currentId);

        // Mettre à jour le texte du commentaire
        commentaireDiv.querySelector('.commentaireTexte').innerText = writeComment.value.trim();

        // Réinitialiser le formulaire
        writeComment.value = '';
        sendButton.classList.remove('hidden'); // Montrer "Envoyer"
        editButton.classList.add('hidden');   // Cacher "Modifier"
        currentId = null;                // Réinitialiser l'ID du commentaire

    }
}
function faireApparaitrePopup(event) {

    //Faire apparaître le popup
    popup.classList.remove('hidden');
    //Assombrir le reste de la page
    contenu.classList.add('sombre');
    popupDiv.classList.remove('hidden');

    //Trouver le commentaire associé au bouton
    commentaireActif = event.target.closest('.commentaire');
    console.log('commentaire sélectionné')

    // Ajouter la classe 'actif' au commentaire sélectionné
    if (commentaireActif) {
        document.querySelectorAll('.commentaire').forEach((div) => div.classList.remove('actif'));
        commentaireDiv.classList.add('actif');
    }
}
function supprimerCommentaire(event) {

    if (event.currentTarget === noButton) {
        //Faire disparaître le popup
        popup.classList.add('hidden');
        popupDiv.classList.add('hidden');
        //Ré-éclaircir la page
        contenu.classList.remove('sombre');
    }
    if (event.currentTarget === yesButton) {
        console.log('supprimerCommentaire')
       
       
        if (commentaireActif) {
            console.log('commentaire supprimé');
            //Supprimer le commentaire
            commentaireActif.remove();
            commentaireActif = null;

        }
        //Éclaircir la page et faire disparaître le popup
        popup.classList.add('hidden');
        popupDiv.classList.add('hidden');
        contenu.classList.remove('sombre');

    }

}

function envoyerCommentaire() {
    console.log('envoyerCommentaire');
    // Récupérer le texte du textarea
    const commentText = writeComment.value;

    // Si le texte n'est pas vide
    if (commentText.trim() !== '') {

        /*BOÎTE COMMENTAIRE
        ========================================*/

        // Créer un nouveau div pour le commentaire
        const newCommentDiv = document.createElement('div');
        newCommentDiv.classList.add('commentaire');
        //Créer un ID pour le commentaire
        newCommentDiv.id = `comment-${commentId}`; //Assigne un Id unique
        //Incrémenter l'id
        const idCommentaire = commentId;
        commentId++;

        console.log(newCommentDiv.id);
        // Créer une balise <p> à l'intérieur du div
        const commentParagraph = document.createElement('p');
        commentParagraph.classList.add('commentaireTexte');
        commentParagraph.textContent = commentText.trim();

        /*BOUTON MODIFIER
        ==========================================*/

        //Créer un nouveau div pour le bouton de modification
        const newEditButtonDiv = document.createElement('div')
        newEditButtonDiv.classList.add('boutonModifierDiv');
        //Créer un nouveau bouton de modification
        const newEditButton = document.createElement('button');
        newEditButton.classList.add('boutonModifier');

        //Ajout de l'icône à la div
        newEditButton.innerHTML = '<svg class="svgModifier" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg> Edit'
        //Ajout du bouton à la div du bouton
        newEditButtonDiv.appendChild(newEditButton);

        //Écouteur d'évènement
        newEditButton.addEventListener('click', modifierCommentaire);

        /*BOUTON SUPPRIMER
        ============================================*/

        //Créer un nouveau div pour le bouton de suppression
        const newDeleteButtonDiv = document.createElement('div');
        newDeleteButtonDiv.classList.add('boutonSupprimerDiv');
        //Créer un nouveau bouton de suppression
        const newDeleteButton = document.createElement('button');
        newDeleteButton.classList.add('boutonSupprimer');

        //Ajout de l'icône à la div
        newDeleteButton.innerHTML = '<svg class="svgSupprimer" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg> Delete'
        //Ajout du bouton à la div du bouton
        newDeleteButtonDiv.appendChild(newDeleteButton);

        //Écouteur d'évènement
        newDeleteButton.addEventListener('click', faireApparaitrePopup);

        /*COMPTEUR DE VOTES
        =============================================*/

        // Créer un nouveau div pour le compteur de votes
        const newVoteCounterDiv = document.createElement('div');
        newVoteCounterDiv.classList.add('compteurVotes');

        // Créer un compteur de votes
        const commentVoteCounter = document.createElement('input');
        commentVoteCounter.classList.add('champCompteur');
        commentVoteCounter.type = 'text';
        commentVoteCounter.value = '0';
        commentVoteCounter.readOnly = true; // Rendre le champ non modifiable directement

        // Créer les deux boutons du compteur de votes
        const newPlusButton = document.createElement('button');
        newPlusButton.textContent = '+';
        newPlusButton.classList.add('boutonCompteur');
        const newMinusButton = document.createElement('button');
        newMinusButton.textContent = '-';
        newMinusButton.classList.add('boutonCompteur');


        // Ajouter des écouteurs d'événements pour les boutons
        newPlusButton.addEventListener('click', () => {
            commentVoteCounter.value = parseInt(commentVoteCounter.value) + 1;
            classerCommentaire();
        });

        newMinusButton.addEventListener('click', () => {
            commentVoteCounter.value = Math.max(0, parseInt(commentVoteCounter.value) - 1);
            classerCommentaire(); // Empêcher les votes négatifs
        });

        // Ajouter les éléments au div du compteur de votes
        newVoteCounterDiv.appendChild(newPlusButton);
        newVoteCounterDiv.appendChild(commentVoteCounter);
        newVoteCounterDiv.appendChild(newMinusButton);



        /*CRÉATION DIV POUR TOUS LES BOUTONS
        =============================================*/

        //Créer une nouvelle div
        const newDivBoutons = document.createElement('div');
        //Ajouter les boutons au div
        newDivBoutons.appendChild(newVoteCounterDiv);
        newDivBoutons.appendChild(newEditButtonDiv);
        newDivBoutons.appendChild(newDeleteButtonDiv);
        newDivBoutons.classList.add('divBoutons');


        /*AJOUT DES ÉLÉMENTS
        =============================================*/

        // Ajouter les éléments au div du commentaire
        newCommentDiv.appendChild(commentParagraph);
        newCommentDiv.appendChild(newDivBoutons);

        // Ajouter le nouveau commentaire en haut de la section des commentaires
        commentsSection.append(newCommentDiv);

        // Vider le textarea
        writeComment.value = '';


    }


}



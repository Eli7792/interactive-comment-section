// Récupérer les éléments du DOM
const sendButton = document.getElementById('sendButton');
const writeComment = document.getElementById('writeComment');
const commentsSection = document.getElementById('commentsSection');

//Écouteurs d'évènements
sendButton.addEventListener('click', envoyerCommentaire);

//Fonctions

function classerCommentaire() {

    //Récupérer tous les commentaires de la section
    const commentaires = Array.from(commentsSection.children);
    //Trier les commentaires en fonction des votes
    const commentairesTries = commentaires.sort((a,b) => {
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

function modifierCommentaire() {
    console.log('modifierCommentaire')

    //Implémenter la modification des commentaires

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
        newEditButton.innerHTML = '<svg class="svgModifier" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg> Modifier'
        //Ajout du bouton à la div du bouton
        newEditButtonDiv.appendChild(newEditButton);

        //Écouteur d'évènement
        newEditButton.addEventListener('click', modifierCommentaire());

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


        /*AJOUT DES ÉLÉMENTS
        =============================================*/

        
        // Ajouter les éléments au div du commentaire
        newCommentDiv.appendChild(commentParagraph);
        newCommentDiv.appendChild(newVoteCounterDiv);
        newCommentDiv.appendChild(newEditButtonDiv);

        // Ajouter le nouveau commentaire en haut de la section des commentaires
        commentsSection.append(newCommentDiv);

        // Vider le textarea
        writeComment.value = '';
    }

    
}



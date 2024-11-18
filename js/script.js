// Récupérer les éléments du DOM
const sendButton = document.getElementById('sendButton');
const writeComment = document.getElementById('writeComment');
const commentsSection = document.getElementById('commentsSection');

//Écouteurs d'évènements
sendButton.addEventListener('click', envoyerCommentaire);

//Fonctions

function envoyerCommentaire() {
    console.log('envoyerCommentaire')
    // Récupérer le texte du textarea
    const commentText = writeComment.value;
    // Si le texte n'est pas vide
    if (commentText.trim() !== '') {
        // Créer un nouveau div pour le commentaire
        const newCommentDiv = document.createElement('div');
        newCommentDiv.classList.add('commentaire');

        

        // Créer une balise <p> à l'intérieur du div
        const commentParagraph = document.createElement('p');
        // Créer un input type number
        const commentVoteCounter = document.createElement('input');
        commentVoteCounter.type = 'number';
        commentVoteCounter.placeholder = '0';

        commentParagraph.classList.add('commentaireTexte');
        commentParagraph.textContent = commentText.trim();
        // Ajouter la balise <p> au div du commentaire
        newCommentDiv.appendChild(commentParagraph);
      
        /*Créer une div qui contiendra un input type=number et deux boutons qui
        vont servir à augmenter et à baisser son value.*/

        // Ajouter le nouveau commentaire en haut de la section des commentaires
        commentsSection.append(newCommentDiv);

        // Vider le textarea
        writeComment.value = '';
    }
}

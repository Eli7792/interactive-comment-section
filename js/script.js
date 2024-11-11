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
        newCommentDiv.classList.add('bg-white', 'pt-16','pb-16', 'pr-20', 'pl-20', 'mb-5', 'rounded-lg', 'shadow');
        

        // Créer une balise <p> à l'intérieur du div
        const commentParagraph = document.createElement('p');
        commentParagraph.textContent = commentText.trim();
        // Ajouter la balise <p> au div du commentaire
        newCommentDiv.appendChild(commentParagraph);
        // Ajouter le nouveau commentaire en haut de la section des commentaires
        commentsSection.prepend(newCommentDiv);

        // Vider le textarea
        writeComment.value = '';
    }
}

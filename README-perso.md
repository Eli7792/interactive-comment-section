# Projet frontend mentor : Interactive comment section

## 18 Novembre

Mon plus gros problème durant cette session de travail a été de trouver une manière de gérer l'espace que prenaient les commentaires et à m'assurer qu'ils restent au dessus du champ de texte. Je voulais également que celui-ci reste toujours au bas de l'écran, même lors du scroll et c'est en demandant autour de moi que j'ai découvert la propriété "sticky". Je suis maintenant plus confiante pour la suite.

### À faire :
1. programmer le vote des commentaires [x]
2. programmer la modification des commentaires [x]
3. programmer la supression des commentaires (avec pop-up de confirmation) [x]
4. design responsive []
5. animation et état des boutons []


## 25 Novembre

Aujourd'hui j'ai pu implémenter la fonction de vote et de classement des commentaires. Ce faisant, j'ai appris l'existence de la propriété readOnly(bool) qui permet de rendre un champ de texte non-modifiable normalement. Cela est pratique pour ensuite changer son contenu à l'aide de boutons comme dans le cas présent, par exemple. J'ai aussi utilisé la propriété textContent pour écire le texte des boutons directement en javascript.

Je n'en avais pas parlé la dernière fois, mais il est bon de le mentionner, la fonction .trim() qui permet d'enlever les espaces vides dans les champs de textes s'est également révélée utile.

Le développement s'est très bien déroulé et je n'ai pas eu trop de difficulté. J'espère que le tout restera aussi fluide par la suite.

## 30 Novembre
- `comment-${commentId}` permet d'assigner un Id unique à un élément.



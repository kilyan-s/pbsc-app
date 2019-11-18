# pbsc-app
L'application est développée avec le framework Appcelerator Titanium pour iOS.

## Installer le SDK Open Source Titanium
Suivre les étapes d'installation en fonction de votre OS (https://github.com/m1ga/from_zero_to_app/blob/master/installation.md).
Attention à bien suivre les étapes pour l'installation de la version Open Source.

Il n'est pas nécessaire d'installer Atom, si vous souhaitez juste compiler le projet.

Une fois le SDK installé utiliser la commande ```ti sdk``` pour voir la liste des SDK installés et la version utilisée.

Pour ce projet il faudra être sur le SDK 8.2.1.GA. S'il n'est pas installé utiliser la commande ```ti sdk install 8.2.1.GA``` 

Une fois la version 8.2.1.GA installée, utiliser la commande ```ti sdk select 8.2.1.GA``` pour le sélectionner.

## Xcode et simulateurs
Pour pouvoir lancer le projet il faudra aussi installer Xcode et les simulateurs iOS avant de compiler l'application.

## Lancer le projet
Après avoir téléchargé le projet, ouvrir votre terminal et aller dans le dossier `pbsc-app`.

Dans votre terminal, lister les fichiers pour vérifier que vous avez bien le fichier `tiapp.xml`.

Utiliser la commande ```ti build -p ios -C ?``` pour compiler le projet. Vous aurez ensuite la liste des simulateurs installés qui va s'afficher, sélectionnez le simulateur sur lequel vous souhaitez lancer l'application.

## Utilisation de l'application
Utiliser l'adresse email `amin@gmail.com` pour avoir une réponse positive de l'api.

Utiliser n'importe quelle autre adresse email pour avoir une réponse négative de l'api.

# Explications
J'ai décidé d'uiliser le framework Appcelerator Titanium car c'est un outil que j'ai pu utilisé pendant plusieurs années et qui me permet de développer plus rapidement des applications iOS ou Android. La syntaxe est basé sur du javacript, il est donc assez simple de l'apprendre pour des personnes qui connaissent le javascript.

Pour ce projet j'ai décidé de faire seulement la version iOS de l'application, je fais toujours deux projets séparés quand je dois développer une version iOS et une version Android de la même application. Cela me permet d'éviter d'avoir trop de conditions dans mon code et ainsi faciliter la maintenance de l'application.

J'ai respecté au maximum l'exemple visuel fourni, cependant j'ai changé l'affichage du titre `Email address` qui était à gauche du champs texte. La majorité de l'utilisation d'un smartphone se fait en affichage portrait, il y aurait trop de risque que le texte et le champs se superposent sur les plus petits écrans. J'ai donc décidé de mettre le texte au dessus du champs texte afin d'éviter tout problème d'affichage.

J'ai aussi utilisé un fichier de langue `i18n` pour l'internationalisation des textes. Même si ce n'était pas nécessaire dans ce cas, il est toujours plus simple de le faire au début. Lorsque l'application est terminée cela prendrait eaucoup plus de temps de changer tous les textes pour l'internationalisation.

Même si l'api retourne une erreur s'il n'y a pas d'adresse email, j'ai préféré le gérer du côté de l'application afin d'éviter de faire une requête qui retournera forcément une erreur. Cela permet aussi d'afficher l'erreur plus rapidement car l'application n'a pas besoin d'attendre la réponse de l'api.


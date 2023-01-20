# Static-vues

# Documentation : Outils de développement

## Docker : lancer le projet en local
```
docker build -t [NOM DE L'IMAGE] .```

```docker run -p 5000:3000 [NOM DE L'IMAGE]```

```Ouvrir votre localhost:5000```



## Eslint : formatage du code et Coding Style

- commande à lancer depuis **la racine du projet** pour formater le code:

```
  npx eslint --fix src
```
    ``` 

## Storybook : documentation des composants

- commande à lancer depuis **la racine du projet** pour lancer storybook:

    ```bash
    yarn run storybook 
    ``` 
  
#### Remarques :
malheureusement, il n'existe pas de moyen de changer l'emplacement du fichier de config : .storybook/main.js
De même, le dossier stories n'est pas repéré par storybook s'il n'est pas dans le dossier src.


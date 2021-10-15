# WizardLibrary

[![Node.js CI](https://github.com/ArnaudFlaesch/WizardLibrary/actions/workflows/ci.yml/badge.svg)](https://github.com/ArnaudFlaesch/WizardLibrary/actions/workflows/ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ArnaudFlaesch_WizardLibrary&metric=alert_status)](https://sonarcloud.io/dashboard?id=ArnaudFlaesch_WizardLibrary)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/ee1c5f447b1f44569c3e28cf324f1857)](https://www.codacy.com/gh/ArnaudFlaesch/WizardLibrary/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ArnaudFlaesch/WizardLibrary&amp;utm_campaign=Badge_Grade)
[![codecov](https://codecov.io/gh/ArnaudFlaesch/WizardLibrary/branch/master/graph/badge.svg?token=3LEHY6A102)](https://codecov.io/gh/ArnaudFlaesch/WizardLibrary)[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![dependencies Status](https://david-dm.org/ArnaudFlaesch/WizardLibrary/status.svg)](https://david-dm.org/ArnaudFlaesch/WizardLibrary)
[![devDependencies Status](https://david-dm.org/ArnaudFlaesch/WizardLibrary/dev-status.svg)](https://david-dm.org/ArnaudFlaesch/WizardLibrary?type=dev)


## Fonctionnement de l'application

La première page accessible par l'utilisateur est la page dans laquelle est affichée la liste des livres disponibles à l'achat. Il est possible d'ajouter
les livres dans un panier et celui-ci sera présenté sur la droite de l'écran dans un menu latéral. Il est possible d'ajouter plusieurs fois le même livre au panier.
Le menu latéral affichera le prix total des livres en fonction des livres choisi et de leur quantité, il permettra aussi de naviguer jusqu'à la page de confirmation de la commande où sera calculé le meilleur prix possible en fonction des offres commerciales retournées via la requête prenant en paramètre les identifiants des livres.
Une fois que la commande est validée, elle est enregistrée dans le localStorage de l'utilisateur.


## Lancer l'application

<code>npm run start</code>

## Exécuter les tests unitaires (Jest)

<code>npm run test</code>

## Exécuter les tests E2E (Cypress)

<code>npm run e2e</code>

L'application doit être démarrée pour que ces tests s'exécutent.
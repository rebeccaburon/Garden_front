# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Linkt til frontend:
https://gardenapp.codebyburon.dk/

Links til Routes:
https://codebyburon.dk/api/routes



Kort Beskrivelse af Routes
Routes relateret til planter:
GET /plants: Henter alle planter.
GET /plants/{id}: Henter en specifik plante baseret på dens ID.
GET /plants/type/{type}: Henter planter baseret på deres type (fx Rose, Bush). - Dog passer denne route ikke helt til min frontend. 
GET /plants/heights/{maxheight}: Henter planter med en maksimal højde.
GET /plants/names/{name}: Henter planter baseret på deres navn.
POST /plants: Tilføjer en ny plante til databasen.
Andre routes:
Reseller routes: Administrerer planter knyttet til forhandlere.
Sikkerhedsroutes: Demo- og autentificeringsroutes for brugere og administratorer.
Vision for Applikationen
Garden Center og forhandlere af planter ønsker at skabe en brugervenlig online platform, hvor kunder kan udforske, vælge og købe haveplanter. Applikationen sigter mod at digitalisere plantehandlen ved at tilbyde en overskuelig og struktureret visning af planteinformation, fx type, navn, højde og pris. Systemet er designet til at understøtte nem vedligeholdelse af planter, forhandlerrelationer og brugerautentifikation. Med et fleksibelt backend-design og sikre RESTful API'er kan applikationen nemt tilpasses og skaleres.

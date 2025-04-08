# Pokemon
Projeto de aula Angular
npm install -g @angular/cli
ng new pokemon
cd pokemon
ng serve
src/
├── app/
│   ├── components/
│   │   ├── home/
│   │   ├── pokemon-card/
│   ├── pages/
│   │   ├── welcome/
│   │   ├── pokedex/
│   ├── services/
│   │   └── pokemon.service.ts
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   └── app.module.ts
# Página de Boas-Vindas
ng generate component pages/welcome

# Página da Pokédex (onde listará os pokémons)
ng generate component pages/pokedex

# Componente para exibir o card de um pokémon
ng generate component components/pokemon-card

# Serviço para buscar os dados da API Pokémon
ng generate service services/pokemon
ng generate component pages/carousel --standalone


ng generate component pages/crud --standalone
ng generate service services/item
ng generate component layout


mkdir backend-pokemon
cd backend-pokemon
npm init -y
npm install express sqlite3 multer cors


CREATE DATABASE pokemon_crud;
USE pokemon_crud;

CREATE TABLE IF NOT EXISTS items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  image VARCHAR(255)
);

npm install express cors multer mysql2

# Étape 1 : Construction de l'application
FROM node:18 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de package
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application
RUN npm run build

# Étape 2 : Serveur de production
FROM nginx:alpine

# Copier les fichiers construits depuis l'étape de construction
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port sur lequel Nginx sera à l'écoute
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]

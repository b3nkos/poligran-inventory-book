# Poligran Inventory Book
Politécnico gran colombiano inventory book

## Creando los contenedores
para poder ejecutar los contenedores necesitaremos de `docker compose` a continuación los pasos necesarios:

- Nos posicionamos en la raiz del proyecto, donde está el archivo `docker-compose.yml`
- Ejecutamos el siguiente comando

```bash
docker compose -f .\docker-compose.yml up
```

```bash
docker build -t inventory-backend:latest backend/.
```

```bash
docker build -t inventory-frontend:latest frontend/.
```

```bash
docker run --name inventory-backend-container --rm --detach \
--publish 8080:8080 inventory-backend
```

```bash
docker run --name inventory-frontend-container --rm --detach \
--publish 3000:3000 inventory-frontend
```
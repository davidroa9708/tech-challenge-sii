
# Reto SiiColombia

## Requisitos:

1. Nodejs version 16
2. Base de datos mongodb

## Pasos para ejecutar en local:

1. Correr el comando `npm install`
2. Crear archivo .env con la plantilla .en.example
3. Correr el comando `npm run start`
4. La aplicacion queda expuesta en el puerto 3000

## Endpoints de Swagger:

1. Una vez se este ejecutando la aplicacion tiene a disposicion el enpoint `http://localhost:3000/swagger` para consultar todos los endpoints a su dispocision

## Endpoints:

1. Endpoints de peliculas favoritas

```http
localhost:3000/api/v1/favorite-movies METHOD GET
```

```http
localhost:3000/api/v1/favorite-movies METHOD POST
```
| Parameter | Type     |
| :-------- | :------- |
| `movie_id` | `number` |
| `user_id` | `number` |

2. Endpoints de notas de peliculas

```http
localhost:3000/api/v1/movie-notes  METHOD GET
```

```http
localhost:3000/api/v1/movie-notes  METHOD POST
```
| Parameter | Type     |
| :-------- | :------- |
| `movie_id` | `number` |
| `user_id` | `number` |
| `note_title` | `string` |
| `description` | `string` |
| `url` | `string` |


```http
localhost:3000/api/v1/movie-notes/:id  METHOD PATCH
```
| Parameter | Type     |
| :-------- | :------- |
| `note_title` | `string` |
| `url` | `string` |

3. Endpoints de peliculas

```http
localhost:3000/api/v1/movies/search/:name  METHOD GET
```

```http
localhost:3000/api/v1/movies/popular  METHOD GET
```

```http
localhost:3000/api/v1/movies  METHOD POST
```
| Parameter | Type     |
| :-------- | :------- |
| `movie_id` | `number` |
| `movie_apild` | `number` |
| `movie_imdb_id` | `number` |
| `language` | `string` |
| `genres` | `string` |
| `original_language` | `string` |
| `title` | `string` |
| `overview` | `string` |
| `popularity` | `number` |
| `poster_path` | `string` |
| `release_date` | `string` |
| `video` | `string` |
| `vote_average` | `number` |
| `vote_count` | `number` |

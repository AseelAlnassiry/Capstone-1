
# Renokuni (レノ国)

A brief single-page application allowing users to save, review and search anime. Based on the Anilist API.


## Tech Stack

**Client:** React, TailwindCSS, daisyUI, Apollo GraphQL

**Server:** Flask, Flask-SQLAlchemy, PostgreSQL


## Features

- Mobile Friendly
- Minimal page design using modals
- Token based auth system
- Live trending data via  the Anilist API


## Demo

https://renokuni.onrender.com


## API Reference

#### Register new user

```http
  POST api/register
```

#### Authenticate user

```http
  POST api/auth
```

#### Update user image

```http
  PUT api/auth
```

#### Update user saved list

```http
  POST api/saved
```

#### Add a review

```http
  POST api/reviews
```

#### Get reviews based on show id

```http
  GET api/reviews/:show_id
```





| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api`      | `string` | The webservice address for the flask app |



## Typical Workflow

Non-Auth: Home-Page -> Anime-Page {visit can view anime on the trending tab or through the search bar, then see reviews and other information.}

Auth: Home-Page -> Login-Modal -> Home-Page -> Trending/Saved/Search -> Anime-Page {users can view, review and save animes}
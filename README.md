<h1 align="center">
# 📱 Hashtify - Hashtag Generator App 

</h1>

<p align="center" width="100%">
    <img width="23%" src="https://user-images.githubusercontent.com/106375522/226183176-10a763c0-ed81-4784-aae9-e0863c4f8247.jpg"
</p>

## Introduction
This is the backend for #️Hashtify app. This was a group project as part of the Command Shift bootcamp course.




## Quick Start and Commands

1. Clone the repo:

```bash
git clone gh repo clone yan-fung/backend-hashtag-generator
```

2. Run the development server for the app. It listens on port 4000.

```bash
npm start
```

3. To test the codes in tests folder

```bash
npm test
```

4. Download Postman and pgAdmin and use them to check if the CRUD operations is working.

- [Postman](https://www.postman.com/downloads/)
- [pgAdmin](https://www.pgadmin.org/download/)
- [Docker](https://www.docker.com/products/docker-desktop/)

### Development Mode

The server side Express code will be served by a node server using [Nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code updates.

## API Endpoints and Methods

Auth endpoints and methods

| **Methods** |   **Urls**   |     **Actions**      |
| :---------- | :----------: | :------------------: |
| POST        |   /auth/:id  | handle authentication|

Hashtag endpoints and methods

| **Methods** |        **Urls**         |              **Actions**              |
| :---------- | :---------------------: | :-----------------------------------: |
| GET         |         /hashtags       |            get all hashtags           |
| GET         |  /hashtags/:id/hashtag  |        get all hashtags by user id    |
| GET         |    /hashtags/:category  |      get all hashtags by category     |
| GET         | /hashtags/:id/:category |  get specific hashtags by user id     |
| POST        |         /hashtags       |            add hashtags               |
| DELETE      |       /hashtags/:id     |          remove hashtag by id         |

## APIs Used
[RiteKit API](https://ritekit.com/accounts/)

- Generate hashtags by image

- Generate hashtags by keyword

- Hashtag stats

<h3 align="center">ai sama - telegram chat bot | openai api</h2>

###

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="150" alt="typescript logo"  />
  <img width="30" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" height="150" alt="yarn logo"  />
</div>

###

<div align="center">
  <a href="https://t.me/yuichandaisukibest_bot" target="_blank">
    <img src="https://img.shields.io/static/v1?message=ai sama&logo=telegram&label=&color=2CA5E0&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="telegram logo"  />
  </a>
</div>

###

## installation

- clone the project:

```
git clone https://github.com/kenjitheman/ai_sama
```

- to get all dependencies:

```
yarn install
```

## usage
- create a file with name ".config" and inside the file create:
```
TELEGRAM_TOKEN = "your token"
OPENAI_KEY = "your token"
```

- running the app

```
// development
yarn run start

// watch mode
yarn run start:dev

// production mode
yarn run start:prod
```

-  or you can run the app using docker:
```
docker build -t your_image_name .
docker run -d -p 8080:80 your_image_name
```

## contributing

- pull requests are welcome, for major changes, please open an issue first
to discuss what you would like to change

- please make sure to update tests as appropriate

## license

- [MIT](https://choosealicense.com/licenses/mit/)

<h3 align="center">tg chat bot, openai api</h2>

###

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="100" alt="typescript logo"  />
  <img width="15" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" height="100" alt="yarn logo"  />
</div>

###

## installation

```
git clone https://github.com/kenjitheman/ai_sama
```

- get all dependencies:

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

// development
```
yarn run start
```

// watch mode
```
yarn run start:dev
```

// production mode
```
yarn run start:prod
```

-  or run the app using docker:

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

## AI Sama

### Telegram chat bot powered by chat gpt 3.5

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="100" alt="typescript logo"  />
  <img width="15" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" height="100" alt="yarn logo"  />
</div>

###

## Installation

```sh
git clone https://github.com/kenjitheman/aisama
```

- To get all dependencies:

```sh
yarn install
```

## Usage

- Create a file with name ".config" and inside the file create:

```.env
TELEGRAM_TOKEN = "your token"
OPENAI_KEY = "your token"
```

- Running the app

// Development
```sh
yarn run start
```

// Watch mode
```sh
yarn run start:dev
```

// Production mode
```sh
yarn run start:prod
```

-  To run the app using docker:

```sh
docker build -t your_image_name .
docker run -d -p 8080:80 your_image_name
```

## Contributing

- Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

- Please make sure to update tests as appropriate.

## License

- [MIT](./LICENSE)

> Telegram-chat-bot, able to recognize your speech through voice messages and text through text messages.

## Installation

```sh
git clone https://github.com/kenjitheman/ai-chan
```

- Install all dependencies:

```sh
npm install
```

## Usage

- Inside the config folder create production.json for production mode and default.json for development mode and inside paste your API keys like this:

```json
{
    "TELEGRAM_TOKEN": "YOUR_TELEGRAM_TOKEN",
    "OPENAI_API_KEY": "YOUR_OPENAI_API_KEY"
}
```

- And then run Dockerfile:

```sh
docker build -t your_image_name .
docker run -d -p 8080:80 your_image_name
```

## Contributing

- Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

- [MIT](./LICENSE)

import { ConfigService } from "@nestjs/config";
import { ChatgptService } from "@/chatgpt/chatgpt.service";
import { Start, Update, Ctx, On, Message } from "nestjs-telegraf";
import { Scenes, Telegraf } from "telegraf";

type Context = Scenes.SceneContext;

@Update()
export class TelegramService extends Telegraf<Context> {
    constructor(private readonly configService: ConfigService, private readonly gpt: ChatgptService) {
        super(configService.get("TELEGRAM_API_KEY"));
    }

    @Start()
    onStart(@Ctx() ctx: Context) {
        ctx.replyWithHTML(`
      <b>konnichiwa, ${ctx.from.username}</b>
      i"m yui chan (^_^)
    `);
    }

    @On("text")
    async onMessage(@Message("text") message: string, @Ctx() ctx: Context) {
        const response = await this.gpt.generateResponse(message).toPromise();
        ctx.replyWithHTML(response);
    }
}

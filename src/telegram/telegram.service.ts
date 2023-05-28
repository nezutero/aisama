import { Ctx, Start, Update, On, Message } from 'nestjs-telegraf';
import { Scenes, Telegraf } from 'telegraf';

type Context = Scenes.SceneContext;
@Update()
export class TelegramService extends Telegraf<Context> {
  @Start()
  onStart(@Ctx() ctx: Context) {
    ctx.replyWithHTML(`
        <p>
            Konnichiwa ${ctx.from.username} desu
            i'm yui chan ^_^ 
        </p>
    `);
  }

  @On('text')
  onMessage(@Message('text') message: string) {
    return `${message}`;
  }
}

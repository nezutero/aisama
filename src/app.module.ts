import { Module } from '@nestjs/common';
import { ChatgptModule } from './chatgpt/chatgpt.module';
import { TelegramModule } from './telegram/telegram.module';
import { ChatgptService } from './chatgpt/chatgpt.service';
import { TelegramService } from './telegram/telegram.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(isGlobal: true), ChatgptModule, TelegramModule],
  providers: [ChatgptService, TelegramService],
})
export class AppModule {}

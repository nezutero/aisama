import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';

@Injectable()
export class ChatgptService {
    private readonly logger = new Logger(ChatgptService.name);
    private gptUrl;
    private apiKey;

    constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {
        this.gptUrl = 'https://api.openai.com/v1/completions';
        this.apiKey = configService.get('GPT_API_KEY')
    }

    generateResponse(content: string): Observable<string> {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`,
        };
        const data = {
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", content}],
            "temperature": 1
        }
    }
}

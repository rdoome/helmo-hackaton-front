const LOCAL_LLM_URL = "http://localhost:11434/api/chat";

export interface OllamaLLMCompletionResponse {
    model: string;
    created_at: number;
    message: {
        role: string;
        tool_calls?: {
            'function': {
                'name': string;
                'arguments': {
                    [key: string]: string;
                };
            };
        }[];
        content: string;
    };
    done: boolean;
    total_duration: number;
    load_duration: number;
    prompt_eval_count: number;
    prompt_eval_duration: number;
    eval_count: number;
    eval_duration: number;
}

interface OllamaLLMRequestMessage {
    role: string;
    content?: string;
}

interface OllamaLLMCompletionRequest {
    model: string;
    messages: OllamaLLMRequestMessage[];
    stream: boolean;
    options: {
        temperature: number;
    };
    format?: string | 'json';
}

export class OllamaLLM {
    private readonly _model: string;
    private readonly _messages: OllamaLLMRequestMessage[];

    constructor(model: string, systemPrompt?: string) {
        this._messages = [];
        if (systemPrompt) this._messages.push({role: "system", content: systemPrompt});
        this._model = model;
    }

    public async generate(prompt: string): Promise<string> {
        this.addUserMessage(prompt);

        const completionRequest: OllamaLLMCompletionRequest = {
            model: this._model,
            messages: this._messages,
            stream: false,
            options: {
                temperature: 0, // currently we can leave temperature at 0, this is the safest option
            },
        };

        let response = await this.fetch(completionRequest);

        this._messages.push(response.message);

        return this.parseReponse(response);
    }

    private addUserMessage(prompt: string) {
        this._messages.push({
            role: 'user',
            content: prompt,
        });
    }

    private async fetch(request: OllamaLLMCompletionRequest): Promise<OllamaLLMCompletionResponse> {
        const response = await fetch(LOCAL_LLM_URL, {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.json();
    }

    private parseReponse(response: OllamaLLMCompletionResponse): string {
        return response?.message?.content ?? '';
    }
}
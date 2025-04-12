import { OllamaLLM } from "./OllamaLLM";

const MODEL: string = "llama3.2";
// You can prompt engineer this further if that is needed
const SYSTEM_PROMPT: string = "You are a personal shop assistent for a fashion company, you want to help the customers to the best of your abilities.";

export class PersonalStylist {
    private readonly _aiModel: OllamaLLM;

    constructor(articlesInJson: string) {
        this._aiModel = new OllamaLLM(MODEL, SYSTEM_PROMPT);
    }

    public async addArticleToCart(article: string): Promise<string> {
        const prompt = `The customer has put ${article} in their cart, Please provide them with some usefull suggestions for other products they might like.`;
        return this._aiModel.generate(prompt);
    }

    public async respondToUserMessage(message: string): Promise<string> {
        return this._aiModel.generate(message);
    }
}
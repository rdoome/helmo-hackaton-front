import { OllamaLLM } from "./OllamaLLM";

const MODEL: string = "llama3.2";
// You can prompt engineer this further if that is needed
const SYSTEM_PROMPT: string = `You are a personal shop assistent for a fashion company, you want to help the customers to the best of your abilities.
Always give very short responses directly to the customer, do not contain metadata in your completion.
In Our store we have the following items:
`;

export class PersonalStylist {
    private readonly _aiModel: OllamaLLM;

    constructor(articlesInJson: string) {
        this._aiModel = new OllamaLLM(MODEL, SYSTEM_PROMPT + articlesInJson);
    }

    public async addArticleToCart(article: string): Promise<string> {
        const prompt = `The customer has put ${article} in their cart, Please provide them with some usefull suggestions for other products they might like. Include the Id's of the recommended products as follows \${id}`;
        return this._aiModel.generate(prompt);
    }

    public async respondToUserMessage(message: string): Promise<string> {
        return this._aiModel.generate(message);
    }
}
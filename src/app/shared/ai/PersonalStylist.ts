import {OllamaLLM} from "./OllamaLLM";
import {Injectable} from '@angular/core';
import {SuggestionItem, SuggestionsList} from '../../components/stylist-suggestions/stylist-suggestions.component';

const MODEL: string = "llama3.2";
// You can prompt engineer this further if that is needed
const SYSTEM_PROMPT: string = `You are a personal shop assistent for a fashion company, you want to help the customers to the best of your abilities.
Always give very short responses directly to the customer, do not contain metadata in your completion.
In Our store we have the following items:
`;

@Injectable({
  providedIn: 'root'
})
export class PersonalStylist {
  private readonly _aiModel: OllamaLLM;
  private readonly _updateFunctions: ((suggestions: SuggestionsList) => void)[] = [];
  private readonly _messageUpdateFunctions: ((message: string) => void)[] = [];

  constructor(articlesInJson: string) {
    this._aiModel = new OllamaLLM(MODEL, SYSTEM_PROMPT + articlesInJson);
  }

  public async addArticleToCart(article: string): Promise<string> {
    const prompt = `The customer has put ${article} in their cart, Please provide them with some useful suggestions for other products they might like. Include the Id's of the recommended products as follows \${id}`;
    const response = await this._aiModel.generate(prompt);
    this.extractSuggestions(response);
    this._messageUpdateFunctions.forEach(updater => updater(response));
    return response;
  }

  private extractSuggestions(response: string) {
    const articles: SuggestionItem[] = [];
    while (response.match("${*}")) {
      const id = this.getIdFromString(response);
      const articleData = this.getArticleDataById(id);
      response.replaceAll("${" + id + "}", this.getArticleDetails(articleData));
      articles.push(articleData);
    }
    this.updateSubscribers(articles);
  }

  private getArticleDetails(articleData: SuggestionItem): string {
    return `<b>${articleData.title}</b>`; //TODO this is a placeholder om te testen hé
  }

  private updateSubscribers(articles: SuggestionItem[]) {
    const suggestions = new SuggestionsList(articles);
    this._updateFunctions.forEach(func => func(suggestions));
  }

  private getIdFromString(text: string): string {
    const start = text.indexOf("${");
    const end = text.indexOf("}");
    return text.substring(start, end);
  }

  private getArticleDataById(id: string): SuggestionItem {
    //TODO get this data out of the data source
    throw new Error("notImplementedException");
  }

  public async respondToUserMessage(message: string): Promise<string> {
    const response = await this._aiModel.generate(message);
    this._messageUpdateFunctions.forEach(updater => updater(response));
    return response;
  }

  public subscribeToSuggestionUpdates(updateFunction: (suggestions: SuggestionsList) => void) {
    this._updateFunctions.push(updateFunction);
  }

  public subscribeToMessages(messageUpdateFunction: (message: string) => void) {
    this._messageUpdateFunctions.push(messageUpdateFunction);
  }
}

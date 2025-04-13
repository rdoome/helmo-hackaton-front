import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

interface EventData {
  type: string;
  payload?: any;
}

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private eventBus = new Subject<EventData>();

  emit(type: string, payload?: any) {
    this.eventBus.next({ type, payload });
  }

  on(type: string): Observable<any> {
    return this.eventBus.pipe(
      filter(event => event.type === type),
      map(event => event.payload)
    );
  }
}

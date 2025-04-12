import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylistSuggestionsComponent } from './stylist-suggestions.component';

describe('StylistSuggestionsComponent', () => {
  let component: StylistSuggestionsComponent;
  let fixture: ComponentFixture<StylistSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StylistSuggestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylistSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

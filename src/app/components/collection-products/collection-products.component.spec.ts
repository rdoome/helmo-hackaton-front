import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionProductsComponent } from './collection-products.component';

describe('CollectionProductsComponent', () => {
  let component: CollectionProductsComponent;
  let fixture: ComponentFixture<CollectionProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

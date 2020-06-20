import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardQuicklinkComponent } from './card-quicklink.component';

describe('CardQuicklinkComponent', () => {
  let component: CardQuicklinkComponent;
  let fixture: ComponentFixture<CardQuicklinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardQuicklinkComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardQuicklinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

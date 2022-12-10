import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponentComponentComponent } from './not-found-component-component.component';

describe('NotFoundComponentComponentComponent', () => {
  let component: NotFoundComponentComponentComponent;
  let fixture: ComponentFixture<NotFoundComponentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundComponentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

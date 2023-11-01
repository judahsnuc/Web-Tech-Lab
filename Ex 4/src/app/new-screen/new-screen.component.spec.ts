import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewScreenComponent } from './new-screen.component';

describe('NewScreenComponent', () => {
  let component: NewScreenComponent;
  let fixture: ComponentFixture<NewScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewScreenComponent]
    });
    fixture = TestBed.createComponent(NewScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

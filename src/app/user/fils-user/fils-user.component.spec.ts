import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilsUserComponent } from './fils-user.component';

describe('FilsUserComponent', () => {
  let component: FilsUserComponent;
  let fixture: ComponentFixture<FilsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilsUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

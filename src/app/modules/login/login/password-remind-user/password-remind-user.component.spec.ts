import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRemindUserComponent } from './password-remind-user.component';

describe('PasswordRemindUserComponent', () => {
  let component: PasswordRemindUserComponent;
  let fixture: ComponentFixture<PasswordRemindUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordRemindUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordRemindUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

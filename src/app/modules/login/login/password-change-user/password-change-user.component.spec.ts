import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordChangeUserComponent } from './password-change-user.component';

describe('PasswordChangeUserComponent', () => {
  let component: PasswordChangeUserComponent;
  let fixture: ComponentFixture<PasswordChangeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordChangeUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordChangeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

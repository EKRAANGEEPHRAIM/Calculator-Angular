import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyTouch } from './key-touch';

describe('KeyTouch', () => {
  let component: KeyTouch;
  let fixture: ComponentFixture<KeyTouch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyTouch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyTouch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

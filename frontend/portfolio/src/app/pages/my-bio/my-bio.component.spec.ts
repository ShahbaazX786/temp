import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBioComponent } from './my-bio.component';

describe('MyBioComponent', () => {
  let component: MyBioComponent;
  let fixture: ComponentFixture<MyBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

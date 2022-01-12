import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployementComponent } from './deployement.component';

describe('DeployementComponent', () => {
  let component: DeployementComponent;
  let fixture: ComponentFixture<DeployementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeployementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeployementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

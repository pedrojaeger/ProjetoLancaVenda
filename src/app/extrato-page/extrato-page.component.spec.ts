import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoPageComponent } from './extrato-page.component';

describe('ExtratoPageComponent', () => {
  let component: ExtratoPageComponent;
  let fixture: ComponentFixture<ExtratoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtratoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtratoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

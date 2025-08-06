import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreUtilFinance } from './core-util-finance';

describe('CoreUtilFinance', () => {
  let component: CoreUtilFinance;
  let fixture: ComponentFixture<CoreUtilFinance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreUtilFinance],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreUtilFinance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

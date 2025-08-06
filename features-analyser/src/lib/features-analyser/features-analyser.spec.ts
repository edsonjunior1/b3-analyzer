import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturesAnalyser } from './features-analyser';

describe('FeaturesAnalyser', () => {
  let component: FeaturesAnalyser;
  let fixture: ComponentFixture<FeaturesAnalyser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesAnalyser],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturesAnalyser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

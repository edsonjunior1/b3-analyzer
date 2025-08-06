import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreDataAccess } from './core-data-access';

describe('CoreDataAccess', () => {
  let component: CoreDataAccess;
  let fixture: ComponentFixture<CoreDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreDataAccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

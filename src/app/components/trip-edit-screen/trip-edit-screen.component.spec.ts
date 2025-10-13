import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripEditScreenComponent } from './trip-edit-screen.component';

describe('TripEditScreenComponent', () => {
  let component: TripEditScreenComponent;
  let fixture: ComponentFixture<TripEditScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripEditScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripEditScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsTwoComponent } from './films-two.component';

describe('FilmsTwoComponent', () => {
  let component: FilmsTwoComponent;
  let fixture: ComponentFixture<FilmsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

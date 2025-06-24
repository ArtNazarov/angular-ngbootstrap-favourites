import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzMenuComponent } from './nz-menu.component';

describe('NzMenuComponent', () => {
  let component: NzMenuComponent;
  let fixture: ComponentFixture<NzMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

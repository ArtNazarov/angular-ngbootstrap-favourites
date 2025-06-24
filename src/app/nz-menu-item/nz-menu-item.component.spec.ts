import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzMenuItemComponent } from './nz-menu-item.component';

describe('NzMenuItemComponent', () => {
  let component: NzMenuItemComponent;
  let fixture: ComponentFixture<NzMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzMenuItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

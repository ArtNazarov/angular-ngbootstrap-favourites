import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzHeaderComponent } from './nz-header.component';

describe('NzHeaderComponent', () => {
  let component: NzHeaderComponent;
  let fixture: ComponentFixture<NzHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

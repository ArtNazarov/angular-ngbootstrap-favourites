import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzRightAreaComponent } from './nz-right-area.component';

describe('NzRightAreaComponent', () => {
  let component: NzRightAreaComponent;
  let fixture: ComponentFixture<NzRightAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzRightAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzRightAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

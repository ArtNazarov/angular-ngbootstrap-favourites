import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzLeftAreaComponent } from './nz-left-area.component';

describe('NzLeftAreaComponent', () => {
  let component: NzLeftAreaComponent;
  let fixture: ComponentFixture<NzLeftAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzLeftAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzLeftAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

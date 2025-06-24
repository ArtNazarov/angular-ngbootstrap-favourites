import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzFooterComponent } from './nz-footer.component';

describe('NzFooterComponent', () => {
  let component: NzFooterComponent;
  let fixture: ComponentFixture<NzFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

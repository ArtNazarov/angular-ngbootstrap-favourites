import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzInfoListComponent } from './nz-info-list.component';

describe('NzInfoListComponent', () => {
  let component: NzInfoListComponent;
  let fixture: ComponentFixture<NzInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzInfoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

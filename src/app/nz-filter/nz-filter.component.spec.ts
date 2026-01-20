import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { NzFilterComponent } from './nz-filter.component';

describe('NzFilterComponent', () => {
  let component: NzFilterComponent;
  let fixture: ComponentFixture<NzFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzFilterComponent, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit filter text when onFilter is called', () => {
    spyOn(component.filterChange, 'emit');
    component.filterText = 'test';
    component.onFilter();
    expect(component.filterChange.emit).toHaveBeenCalledWith('test');
  });

  it('should clear filter text when clearFilter is called', () => {
    component.filterText = 'test';
    spyOn(component.filterChange, 'emit');
    component.clearFilter();
    expect(component.filterText).toBe('');
    expect(component.filterChange.emit).toHaveBeenCalledWith('');
  });
});
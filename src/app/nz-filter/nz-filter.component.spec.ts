import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
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

  it('should emit filter text on input change with debounce', fakeAsync(() => {
    spyOn(component.filterChange, 'emit');
    
    component.filterText = 't';
    component.onInputChange();
    
    component.filterText = 'te';
    component.onInputChange();
    
    component.filterText = 'tes';
    component.onInputChange();
    
    component.filterText = 'test';
    component.onInputChange();
    
    // Advance time by debounce time (300ms default)
    tick(300);
    
    // Should only emit the last value due to debounce
    expect(component.filterChange.emit).toHaveBeenCalledTimes(1);
    expect(component.filterChange.emit).toHaveBeenCalledWith('test');
  }));

  it('should emit immediately when onFilter is called', () => {
    spyOn(component.filterChange, 'emit');
    component.filterText = 'test';
    component.onFilter();
    expect(component.filterChange.emit).toHaveBeenCalledWith('test');
  });

  afterEach(() => {
    fixture.destroy();
  });
});
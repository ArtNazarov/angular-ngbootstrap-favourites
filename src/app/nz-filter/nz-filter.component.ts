// nz-filter.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nz-filter',
  imports: [FormsModule],
  templateUrl: './nz-filter.component.html',
  styleUrl: './nz-filter.component.css'
})
export class NzFilterComponent {
  @Input() placeholder: string = 'Фильтр по названию или содержанию...';
  @Output() filterChange = new EventEmitter<string>();
  
  filterText: string = '';

  onFilter() {
    this.filterChange.emit(this.filterText);
  }

  clearFilter() {
    this.filterText = '';
    this.filterChange.emit('');
  }
}
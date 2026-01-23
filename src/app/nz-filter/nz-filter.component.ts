// nz-filter.component.ts
import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-nz-filter',
  imports: [FormsModule],
  templateUrl: './nz-filter.component.html',
  styleUrl: './nz-filter.component.css'
})
export class NzFilterComponent implements OnDestroy {
  @Input() placeholder: string = 'Фильтр по названию или содержанию...';
  @Input() debounceTime: number = 300; // Optional: debounce time in ms
  @Output() filterChange = new EventEmitter<string>();
  
  filterText: string = '';
  private filterSubject = new Subject<string>();
  private filterSubscription: Subscription;

  constructor() {
    // Subscribe to filter changes with debounce
    this.filterSubscription = this.filterSubject
      .pipe(
        debounceTime(this.debounceTime),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.filterChange.emit(value);
      });
  }

  ngOnDestroy() {
    // Clean up subscription
    this.filterSubscription.unsubscribe();
  }

  onInputChange() {
    // Emit the current value through the subject
    this.filterSubject.next(this.filterText);
  }

  onFilter() {
    // Force immediate filter on button click or Enter key
    this.filterChange.emit(this.filterText);
  }

  clearFilter() {
    this.filterText = '';
    this.filterChange.emit('');
  }
}
// nz-info-list.component.ts
import { Component, Input } from '@angular/core';
import { NzInfoItemComponent } from '../nz-info-item/nz-info-item.component';
import { NzFilterComponent } from '../nz-filter/nz-filter.component';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

interface InformationItem {
  caption: string;
  link: string;
  content: string;
}

@Component({
  selector: 'app-nz-info-list',
  imports: [NzInfoItemComponent, NzFilterComponent, NgFor, NgIf],
  templateUrl: './nz-info-list.component.html',
  styleUrl: './nz-info-list.component.css'
})
export class NzInfoListComponent {
  @Input() items: InformationItem[] = [];
  @Input() enableFiltering: string = 'no'; // 'yes' or 'no'
  
  currentPage: number = 1;
  itemsPerPage: number = 3;
  filterString: string = '';
  
  get filteredItems(): InformationItem[] {
    if (!this.filterString.trim() || this.enableFiltering !== 'yes') {
      return this.items;
    }
    
    const searchTerm = this.filterString.toLowerCase();
    return this.items.filter(item => 
      item.caption.toLowerCase().includes(searchTerm) ||
      item.content.toLowerCase().includes(searchTerm)
    );
  }

  get paginatedItems(): InformationItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredItems.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredItems.length / this.itemsPerPage);
  }

  onFilterChange(filterText: string) {
    this.filterString = filterText;
    this.currentPage = 1; // Reset to first page when filtering
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
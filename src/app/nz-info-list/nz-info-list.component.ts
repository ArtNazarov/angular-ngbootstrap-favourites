// nz-info-list.component.ts
import { Component, Input } from '@angular/core';
import { NzInfoItemComponent } from '../nz-info-item/nz-info-item.component';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

interface InformationItem {
  caption: string;
  link: string;
  content: string;
}

@Component({
  selector: 'app-nz-info-list',
  imports: [NzInfoItemComponent, NgFor, NgIf],
  templateUrl: './nz-info-list.component.html',
  styleUrl: './nz-info-list.component.css'
})
export class NzInfoListComponent {
  @Input() items: InformationItem[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 3; // You can adjust this number
  
  get paginatedItems(): InformationItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.items.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.items.length / this.itemsPerPage);
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
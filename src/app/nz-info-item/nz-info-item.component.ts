import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nz-info-item',
  imports: [],
  templateUrl: './nz-info-item.component.html',
  styleUrl: './nz-info-item.component.css'
})
export class NzInfoItemComponent {
  @Input() caption!: string; // Заголовок
  @Input() link!: string; // Ссылка
  @Input() content!: string; // Текст
  @Input() filterText: string = ''; // New input for filter text

  // Method to highlight matches in text
  highlightText(text: string): string {
    if (!this.filterText || !text) {
      return text;
    }

    const searchTerm = this.filterText.toLowerCase();
    const lowerText = text.toLowerCase();
    
    // Escape special regex characters
    const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedTerm})`, 'gi');
    
    return text.replace(regex, '<span class="highlight">$1</span>');
  }

  // Check if we need to use safe HTML (when there are highlights)
  needsHighlighting(text: string): boolean {
    return this.filterText.trim() !== '' && 
           text.toLowerCase().includes(this.filterText.toLowerCase());
  }
}
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
}

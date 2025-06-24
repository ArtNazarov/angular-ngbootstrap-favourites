import { Component, Input } from '@angular/core';
import { NzInfoItemComponent } from '../nz-info-item/nz-info-item.component';
import { NgFor } from '@angular/common';

interface InformationItem {
  caption: string;
  link: string;
  content: string;
}

@Component({
  selector: 'app-nz-info-list',
  imports: [NzInfoItemComponent, NgFor],
  templateUrl: './nz-info-list.component.html',
  styleUrl: './nz-info-list.component.css'
})
export class NzInfoListComponent {
  @Input() items: InformationItem[] = [];
}

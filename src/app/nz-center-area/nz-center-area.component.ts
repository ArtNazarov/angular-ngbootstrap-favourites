import { Component } from '@angular/core';
import { NzInfoListComponent } from '../nz-info-list/nz-info-list.component';
import { LinksModel } from '../models/links'
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nz-center-area',
  standalone: true,
  imports: [NzInfoListComponent, RouterModule, CommonModule],
  templateUrl: './nz-center-area.component.html',
  styleUrls: ['./nz-center-area.component.css']
})
export class NzCenterAreaComponent {
  items: any[] = [];
  currentPath: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe(url => {
      this.currentPath = url[0]?.path || 'pinned';
      this.updateItems();
    });
  }

  private updateItems() {
    switch(this.currentPath) {
      case 'pinned':
        this.items = LinksModel.getPinnedToStartPage();
        break;
      case 'search_engines':
        this.items = LinksModel.getSearchEngines();
        break;
      case 'ai':
        this.items = LinksModel.getAI();
        break;
      case 'freelance':
        this.items = LinksModel.getFreelance();
        break;
      default:
        this.items = LinksModel.getPinnedToStartPage();
    }
  }
}
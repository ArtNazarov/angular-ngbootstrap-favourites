import { Component, OnInit, OnDestroy } from '@angular/core';
import { NzInfoListComponent } from '../nz-info-list/nz-info-list.component';
import { Subscription } from 'rxjs';
import { LinksService } from '../services/links.service';
import { ILink, LinkCategory } from '../models/links';

@Component({
  selector: 'app-nz-left-area',
  imports: [NzInfoListComponent],
  templateUrl: './nz-left-area.component.html',
  styleUrl: './nz-left-area.component.css'
})
export class NzLeftAreaComponent implements OnInit, OnDestroy {
  items: ILink[] = [];
  private dataSubscription: Subscription = new Subscription();

  constructor(private linksService: LinksService) {
    console.log('NzLeftAreaComponent - Service available:', !!this.linksService);
  }

  ngOnInit() {
    console.log('NzLeftAreaComponent ngOnInit');
    this.loadItems();
  }

  ngOnDestroy() {
    this.dataSubscription?.unsubscribe();
  }

  private loadItems() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }

    const category: LinkCategory = 'search_engines';
    console.log('Loading items for category:', category);

    this.dataSubscription = this.linksService.getLinks(category).subscribe({
      next: (data) => {
        console.log('Received data:', data);
        console.log('Number of items:', data.length);
        this.items = data;
      },
      error: (error) => {
        console.error('Error loading items:', error);
        this.items = [];
      },
      complete: () => {
        console.log('Data loading complete');
      }
    });
  }
}
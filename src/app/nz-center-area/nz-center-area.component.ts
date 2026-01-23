// nz-center-area.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NzInfoListComponent } from '../nz-info-list/nz-info-list.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

// Correct paths for your structure:
import { LinksService } from '../services/links.service'; // This is correct
import { ILink, LinkCategory } from '../models/links'; // This is correct

@Component({
  selector: 'app-nz-center-area',
  standalone: true,
  imports: [NzInfoListComponent, RouterModule, CommonModule],
  templateUrl: './nz-center-area.component.html',
  styleUrls: ['./nz-center-area.component.css']
})
export class NzCenterAreaComponent implements OnInit, OnDestroy {
  items: ILink[] = [];
  currentPath: string = '';
  private routeSubscription: Subscription = new Subscription();
  private dataSubscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private linksService: LinksService
  ) {
    console.log('NzCenterAreaComponent - Service available:', !!this.linksService);
  }

  ngOnInit() {
    console.log('NzCenterAreaComponent ngOnInit');
    
    this.routeSubscription = this.route.url.subscribe(url => {
      const path = url[0]?.path || 'pinned';
      console.log('Route changed to:', path);
      
      if (path !== this.currentPath) {
        this.currentPath = path;
        this.loadItems();
      }
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.dataSubscription?.unsubscribe();
  }

  private loadItems() {
    // Cancel previous subscription
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
    
    const category: LinkCategory = this.mapPathToCategory(this.currentPath);
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

  private mapPathToCategory(path: string): LinkCategory {
    switch(path) {
      case 'pinned': return 'pinned';
      case 'search_engines': return 'search_engines';
      case 'ai': return 'ai';
      case 'freelance': return 'freelance';
      default: return 'pinned';
    }
  }
}
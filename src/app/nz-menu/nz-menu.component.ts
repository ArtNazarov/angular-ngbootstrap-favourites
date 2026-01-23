import { Component, OnInit } from '@angular/core';
import { NzMenuItemComponent } from '../nz-menu-item/nz-menu-item.component';
import { CommonModule } from '@angular/common';
import { LinksService } from '../services/links.service';
import { IMenuItem } from '../models/links';

@Component({
  selector: 'app-nz-menu',
  standalone: true,
  imports: [NzMenuItemComponent, CommonModule],
  templateUrl: './nz-menu.component.html',
  styleUrls: ['./nz-menu.component.css']
})
export class NzMenuComponent implements OnInit {
  menuItems: IMenuItem[] = [];

  constructor(private linksService: LinksService) {}

  ngOnInit() {
    this.linksService.getMenuItems().subscribe({
      next: (items) => {
        this.menuItems = items;
      },
      error: (error) => {
        console.error('Error loading menu items:', error);
        // Items array will remain empty, which is fine
      }
    });
  }
}
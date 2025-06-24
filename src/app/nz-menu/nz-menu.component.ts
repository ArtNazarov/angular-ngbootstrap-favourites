import { Component } from '@angular/core';
import { NzMenuItemComponent } from '../nz-menu-item/nz-menu-item.component';
import { MenuItem, MenuModel } from '../models/links';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nz-menu',
  standalone: true,
  imports: [NzMenuItemComponent, CommonModule],
  templateUrl: './nz-menu.component.html',
  styleUrls: ['./nz-menu.component.css']
})
export class NzMenuComponent {
  menuItems: MenuItem[] = MenuModel.getMenuItems();
}
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nz-menu-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nz-menu-item.component.html',
  styleUrls: ['./nz-menu-item.component.css']
})
export class NzMenuItemComponent {
  @Input() title: string = '';
  @Input() path: string = '';
  @Input() icon: string = '';
}
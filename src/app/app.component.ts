import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
 
import { NzFooterComponent } from './nz-footer/nz-footer.component';
import { NzHeaderComponent } from './nz-header/nz-header.component';
import { NzRightAreaComponent } from './nz-right-area/nz-right-area.component';
import { NzLeftAreaComponent } from './nz-left-area/nz-left-area.component';
 
import { NzMenuComponent } from './nz-menu/nz-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzHeaderComponent,
    NzFooterComponent,  NzRightAreaComponent, 
  NzLeftAreaComponent, NzMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-test';
}

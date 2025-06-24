import { Component } from '@angular/core';
import { NzInfoListComponent } from '../nz-info-list/nz-info-list.component';
import { LinksModel } from '../models/links';
@Component({
  selector: 'app-nz-right-area',
  standalone: true,
  imports: [ NzInfoListComponent ],
  templateUrl: './nz-right-area.component.html',
  styleUrl: './nz-right-area.component.css'
})
export class NzRightAreaComponent {
    items = LinksModel.getAI()
}

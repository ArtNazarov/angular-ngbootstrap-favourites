import { Component } from '@angular/core';
import { NzInfoListComponent } from '../nz-info-list/nz-info-list.component';
import { LinksModel } from '../models/links';

@Component({
  selector: 'app-nz-left-area',
  imports: [NzInfoListComponent],
  templateUrl: './nz-left-area.component.html',
  styleUrl: './nz-left-area.component.css'
})
export class NzLeftAreaComponent {
    items = LinksModel.getSearchEngines()
}

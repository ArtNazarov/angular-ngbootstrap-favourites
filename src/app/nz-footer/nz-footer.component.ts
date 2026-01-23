import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nz-footer',
  standalone: true,
  imports: [],
  templateUrl: './nz-footer.component.html',
  styleUrl: './nz-footer.component.css'
})
export class NzFooterComponent implements OnInit {
  currentYear: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
}

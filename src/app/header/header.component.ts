import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'snr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public collapsed = true;
  
  constructor() { }

  ngOnInit() {
  }

}

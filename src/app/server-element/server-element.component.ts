import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // the following will override encapsulated styles
  // encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  // this is only for THIS component; cannot access outside
  // UNTIL add @Input; now are exposing this property to the world
  // any parent/component using this is now able to bind to this custom property
  // 'srvElement' is an alias that must be used outside this element
  @Input('srvElement') element: {type: string, name: string, content: string}; // type definition for property want to use in HTML code

  constructor() { }

  ngOnInit() {
  }

}

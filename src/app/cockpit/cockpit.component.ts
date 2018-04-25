import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // new properties
  // EventEmitter allows us to emit own events
  // add @Output so OTHERS can listen for our event
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>(); // a new EventEmitter property
  // add alias 'bpCreated'
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>(); // a new EventEmitter property
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

}

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
  // newServerName = ''; -- no longer needed after passing in local reference from HTML
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    /* receive the element with all its properties, so can use 'value' here to get the value from the input element */
    console.log(nameInput.value);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }

}

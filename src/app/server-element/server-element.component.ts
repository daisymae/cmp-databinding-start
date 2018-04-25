import { 
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ElementRef,
  ViewChild,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // the following will override encapsulated styles
  // encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  // this is only for THIS component; cannot access outside
  // UNTIL add @Input; now are exposing this property to the world
  // any parent/component using this is now able to bind to this custom property
  // 'srvElement' is an alias that must be used outside this element
  @Input('srvElement') element: { type: string, name: string, content: string }; // type definition for property want to use in HTML code
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  /* ContentChild is similar to ViewChild except is for content that 
  will be passed thru via <ng-content>. */
  @ContentChild('contentParagraph') paragraph: ElementRef;


  constructor() {
    console.log('constructor called!');
  }

  /* only hook that receives an argument */
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    // not available yet here
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);

  }

  /* called whenever Angular checks for any changes
  triggers: event, promise, etc.
  don't run powerful/expensive code here
   */
  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  /* called only once; for this component, when the information from ng-content is injected */
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    // expected here
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  // called after each change detection cycle
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    // expected here
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }

}

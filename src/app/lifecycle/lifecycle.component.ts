import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text?: string;

  constructor() {
    console.log('CONSTRUCTOR');
    console.log(this.text);
    // it's a bad practice to do any complex component initialization in this constructor funcion!
    // you should only do basic class initialization, like set some initial properties
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.text);
    // where you should do your main component initialization work
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
    // executes whenever the input value changes
  }

  ngDoCheck() {
    console.log('ngDoCheck');
    // is related do angular change detector mechanism
    // is invoked whenever angular thinks that an ui update is needed
  }

  ngAfterContentInit() {
    // content is any content that might be projected into a view with <ng-content />
    // so the "Content" is some other (partial) View data structure projected
    // into this component's View
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
    // runs everytime this component content has been checked for changes
  }

  ngAfterViewInit() {
    // the view of an angular component it's its template (.html file)
    // technically, the "View" is an internally managed data structure that holds references do the DOM
    // elements rendered by a component
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
    // runs everytime the component's view has been checked for changes
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    // is invoked right before this component instance is about to be thrown away
  }
}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>hello world</h1>',
  // styles: [`h1 { @apply text-teal-500; }`],
  // styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Demo 02';

  role = 'admin';

  // @ViewChild('user', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent)
  //   componentRef.instance.hotelName += ' from dynamc component'
  // }

  @ViewChild('name', { static: true }) name!: ElementRef

  ngOnInit() {
    console.log(this.name.nativeElement.innerHTML = "From Div ViewChild ElementRef");
  }
}

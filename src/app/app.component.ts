import { Component, ElementRef, ViewChild } from '@angular/core';
import { RoomsComponent } from './rooms/rooms/rooms.component';
import { Meta, Title } from '@angular/platform-browser';

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

  constructor(private _title: Title, private meta: Meta) { }

  // @ViewChild('user', { read: ViewContainerRef, static: true }) vcr!: ViewContainerRef

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent)
  //   componentRef.instance.hotelName += ' from dynamc component'
  // }

  @ViewChild('name', { static: true }) name!: ElementRef

  ngOnInit() {
    this._title.setTitle(this.title + ' | ' + 'Home')
    this.meta.addTags([
      { name: 'keywords', content: 'Angular, ngx, tutorial, course' },
      { name: 'description', content: 'Angular Demo 02: Course FreeCodeCamp' },
      { name: 'robots', content: 'index, follow' },
      { name: 'writer', content: 'Mohamed EL YONOUSI' },
      // { charset: 'UTF-8' }
    ])
    console.log(this.name.nativeElement.innerHTML = "From Div ViewChild ElementRef");
  }
}

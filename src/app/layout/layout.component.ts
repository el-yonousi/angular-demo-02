import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterContentInit {
  
  @ContentChild(NavComponent) navComponent!: NavComponent

  ngOnInit(): void {
    
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit', this.navComponent.darkLight);
  }
}

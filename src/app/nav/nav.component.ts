import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})

export class NavComponent {
  title: string = 'Helton Hotel'
  darkLight: string = "Dark"

  changeMode() {
    const colorSheme = document.documentElement
    if (colorSheme?.style.colorScheme === 'light') {
      colorSheme!.style.colorScheme = 'dark'
      colorSheme.classList.replace('light', 'dark')
      this.darkLight = "Dark"
    } else {
      colorSheme!.style.colorScheme = "light"
      colorSheme.classList.replace('dark', 'light')
      this.darkLight = "Light"
    }
  }
}

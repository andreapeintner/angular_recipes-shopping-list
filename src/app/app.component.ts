import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedSelected = 'recipe'

  onNav(selected: string) {
    this.loadedSelected = selected
  }
}

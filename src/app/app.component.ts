import { Component, Renderer } from '@angular/core';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private renderer: Renderer){

  }

  onDeactivate() {
    this.renderer.setElementProperty(document.body, "scrollTop", 0);
  }
}

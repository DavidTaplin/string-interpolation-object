import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'String Interpolation with an Object';

  heading: string = 'User Post';

  num: number = 1;


}

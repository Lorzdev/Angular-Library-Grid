import { Component } from '@angular/core';
import { BookComponent } from "./book/book.component";

@Component({
  selector: 'app-root',
  imports: [ BookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularLibraryGrid';
}

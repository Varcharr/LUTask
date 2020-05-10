import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` <footer>{{ currentYear | date: 'y' }} Learnupon</footer> `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date();
}

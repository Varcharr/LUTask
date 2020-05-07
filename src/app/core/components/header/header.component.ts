import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  items: any[];

  ngOnInit() {
    this.items = [
      {
        label: 'Pages',
        items: [
          { label: 'Home', command: () => this.router.navigateByUrl('/home') },
          {
            label: 'Users',
            command: () => this.router.navigateByUrl('/users'),
          },
        ],
      },
    ];
  }
}

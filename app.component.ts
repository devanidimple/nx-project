import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router) {}
  otherMenus = [
    { name: 'Dashboard', link: '/dashboard' },
    {
      name: 'Home',
      link: encodeURI('https://www.youtube.com/embed/c9F5kMUfFKk'),
    },
    {
      name: 'About',
      link: encodeURI(
        'https://www.youtube.com/embed/lTxn2BuqyzU?si=E5u5XETSJ4OetW8z'
      ),
    },
    {
      name: 'Contact',
      link: encodeURI(
        'https://www.youtube.com/embed/xTpv9lc_qMw?si=agxNCaMf4HBmUlLy'
      ),
    },
    {
      name: 'Services',
      link: encodeURI(
        'https://stackoverflow.com/questions/69377208/how-can-i-set-a-default-route-in-angular'
      ),
    },
    { name: 'Gallery', link: encodeURI('https://dbras.db.com/') },
    { name: 'Blog', link: encodeURI('https://dbras.db.com/'), other: true },
  ];

  navigateToChild(link: string) {
    console.log('link', link);
    if (link !== '/dashboard') this.router.navigate(['/render', link]);
    else this.router.navigate([link]);
  }

  logout() {
    alert('You have been logged out');
  }
}

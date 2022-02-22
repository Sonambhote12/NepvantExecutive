import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private menu:NbMenuService,private auth:AuthService, private router: Router) {}

  ngOnInit(): void {
    this.menu.onItemClick().subscribe((event) => {
      if(event.item.title === 'Logout'){
        this.auth.logout();
        console.log("Logout clicked");
        this.router.navigate(['/login']);
      }
    });
  }

  items: NbMenuItem[] = [
    {
      title: 'Profile',
      expanded: true,
      badge: {
        text: '30',
        status: 'primary',
      },
      children: [
        {
          title: 'Messages',
          badge: {
            text: '99+',
            status: 'danger',
          },
        },
        {
          title: 'Notifications',
          badge: {
            dotMode: true,
            status: 'warning',
          },
        },
        {
          title: 'Logout'
        },
      ],
    },
  ];

}

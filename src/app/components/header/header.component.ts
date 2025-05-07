import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  imports: [Menubar],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'Beers',
            icon: 'pi pi-trophy',
            routerLink: '/',
        },
        {
            label: 'Random',
            icon: 'pi pi-sync',
            routerLink: '/random',
        }
    ]
  }
}

import { ChangeDetectionStrategy, Component, effect, input, OnInit, output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [Menubar, Button],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // Cambiamos la estrategia de detección de cambios a OnPush
  standalone: true, //Angular19 ya por defecto es standalone por lo que no hay que ponerlo
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  
  title = input<number>(); // esto es un input signal
  onEmmit = output<number>(); // esto es un output signal

  //FORMA ANTIGUA 
  // @Input() title!: string;  // El título que recibes
  // @Output() onEmmit = new EventEmitter<void>(); // Definimos el Output

  constructor() {
    // console.log(this.title());
    // effect(() => {
    //     console.log(this.title(), 'effect'); // aqui ya está definido el input
    // });
  }

  ngOnInit() {
    // console.log(this.title(), 'ngOnInit');

    this.items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Features',
            icon: 'pi pi-star'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Components',
                    icon: 'pi pi-bolt',
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server'
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil'
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette'
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ]
  }

  onClick() {
    this.onEmmit.emit(1); 
}

}

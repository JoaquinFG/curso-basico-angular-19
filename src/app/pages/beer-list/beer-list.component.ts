import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beer-list',
  imports: [FormsModule, InputTextModule, ButtonModule],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeerListComponent {
  beerId: number | null = null;

  private readonly _router = inject(Router);

  goToBeer(): void {
    if (this.beerId) {
      this._router.navigate(['/beer', this.beerId]);
    }
  }
}

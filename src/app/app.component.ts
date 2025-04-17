import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArtService } from './core/services/art.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  //implements OnInit {
  //   constructor(private artService: ArtService) {}
  //   ngOnInit(): void {
  //     this.artService.getArtworkById(27992).subscribe({
  //       next: (artwork) => console.log('Fetched artwork:', artwork),
  //       error: (err) => console.error('Fetch error:', err),
  //     });
  //   }
  title = 'art-explorer';
}

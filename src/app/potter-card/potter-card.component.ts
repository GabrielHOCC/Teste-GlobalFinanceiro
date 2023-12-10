import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-potter-card',
  standalone: true,
  imports: [],
  templateUrl: './potter-card.component.html',
  styleUrl: './potter-card.component.css'
})
export class PotterCardComponent {
  @Input() public nome: string = "";
  @Input() public idade: string = "";
  @Input() public foto: string = "";
  @Input() public casa: string = "";
}

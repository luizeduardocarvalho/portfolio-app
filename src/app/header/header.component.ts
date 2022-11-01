import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          color: 'var(--tx-primary)',
          backgroundColor: 'var(--cl-primary)',
          transform: 'translateY(-1%)',
          height: '10vh',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          transform: 'translateY(-200%)',
          opacity: 0,
        })
      ),
      transition('open <=> closed', [animate('0.7s')]),
    ]),
  ],
})
export class HeaderComponent {
  faBars = faBars;
  isOpen = false;

  constructor() {}

  toggle() {
    console.log(this.isOpen);
    this.isOpen = !this.isOpen;
  }
}

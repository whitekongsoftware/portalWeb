import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { trigger, state, style, transition, animate, AUTO_STYLE } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('animateState', [
        state('onTop', style({
            backgroundColor: 'red'
        })),
        state('scrolled', style({
            backgroundColor: 'yellow',
            transform: 'translate(-50%, -130px) scale(0.4)',
        })),
        transition('* => *', animate(250))
    ])
]
})
export class HeaderComponent implements OnInit {
  public state = 'onTop';
  @HostListener('window:scroll', [])

  onWindowScroll() {
    if (window.scrollY === 0) {
      this.state = 'onTop';
    } else {
      this.state = 'scrolled';

    }
  }
  constructor() { }


  ngOnInit() {
  }


}

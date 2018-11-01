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
        })),
        state('scrolled', style({
            transform: 'translate(-60%, -265px) scale(0.4)',
        })),
        transition('* => *', animate(350))
    ])
]
})
export class HeaderComponent implements OnInit {
  public state = 'onTop';
  @HostListener('window:scroll', [])

  onWindowScroll() {
    const navbar = document.getElementById('navbar');
    const title = document.getElementById('titlePage');

    if (window.scrollY === 0) {
      this.state = 'onTop';
      navbar.classList.remove('scrolledNav');
      document.getElementById('subTitle').style.display = 'block';
      title.classList.remove('scrolledTitle');
      title.classList.add('topedTitle');
    } else {
      this.state = 'scrolled';
      navbar.classList.add('scrolledNav');
      document.getElementById('subTitle').style.display = 'none';
      title.classList.remove('topedTitle');
      title.classList.add('scrolledTitle');
    }
  }
  constructor() { }


  ngOnInit() {
  }


}

import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-herobox',
  templateUrl: './herobox.component.html',
  styleUrls: ['./herobox.component.scss']
})
export class HeroboxComponent implements OnInit {


  constructor(public hs: HeroService) { }

  ngOnInit(): void {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['really smart', 'super flexible', 'super hot', 'weather changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'chunk overstreet');

  submitted = false;

  onSubmit()
  {
    this.submitted = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

  get diagnostic() { return JSON.stringify(this.model); }

}

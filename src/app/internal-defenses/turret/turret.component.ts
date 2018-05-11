import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-turret',
  templateUrl: './turret.component.html',
  styleUrls: ['./turret.component.css']
})
export class TurretComponent implements OnInit {
  @Input('turretNumber') turretNumber: number;
  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
  }

}

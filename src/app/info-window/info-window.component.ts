import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {ActivatedRoute} from '@angular/router';
// import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})
export class InfoWindowComponent implements OnInit {
  dataBanks: any;
  turretNumber: number;
  constructor(
    private http:Http,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.forEach( 
      param => this.findTurret(param.id) )
  }

  findTurret(turretNumber){
    console.log(turretNumber);
    this.http.get('http://localhost:3000/api/turret/' + turretNumber)
    .toPromise()
    .then(response => this.dataBanks = response.json());
  }


}

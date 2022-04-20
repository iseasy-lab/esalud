//tslint:disable
import { Component, OnInit } from '@angular/core';
import {DoctorService} from "../../services/doctor.service";

@Component({
  selector: 'app-doctor-route',
  templateUrl: './doctor-route.component.html',
  styleUrls: ['./doctor-route.component.css']
})
export class DoctorRouteComponent implements OnInit {

  constructor(
    private readonly _doctorService: DoctorService
  ) { }

  ngOnInit(): void {
  }



}

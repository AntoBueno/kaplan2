import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from "../../servicios/auth.service";
import { from } from 'rxjs';
import {Router} from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { ApirestService } from '../../servicios/apirest.service';
import { codigo, kine, nutricion } from '../../datosapi/datosapi.models';
import { AngularFirestore} from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-datospaciente',
  templateUrl: './datospaciente.html',
  styleUrls: ['./datospaciente.scss'],
})
export class DatospacientePage implements OnInit {
 
  nutricion: nutricion = new nutricion();

  constructor(
    private apiRest: ApirestService,
    private route: Router
  ) {}

  goAgregarNutricion() {
  this.apiRest.doAgregarNutricion(this.nutricion).subscribe(res => {
    this.route.navigateByUrl("/vernutricion");
    alert('Se ha creado la ficha exitosamente');
  }, err => {
   alert( "No se ha logrado registrar ");
   })
}
  
  ngOnInit() {}
 
  back(){
    this.route.navigateByUrl("/vernutricion");
  }
}

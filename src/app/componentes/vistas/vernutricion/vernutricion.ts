import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../../../servicios/apirest.service';
import { interconsulta } from '../../../datosapi/datosapi.models';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { AuthService } from "../../../servicios/auth.service";

@Component({
  selector: 'app-vernutricion',
  templateUrl: './vernutricion.html',
  styleUrls: ['./vernutricion.scss'],
})
export class VernutricionPage implements OnInit {
  public user: Object;
  public largo : Number;
  public nombre:string
  public apellido:string
  public i : number;
  public  inter = new Array();
  public nutricion: Object
  public largo2 : Number

  constructor(  
    private apiServices : ApirestService,
    private route : Router,
    private storage: Storage,
    private db: AngularFirestore,
    private authService: AuthService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.apiServices.doVernutricion().subscribe((fichas)=>{
    this.nutricion = fichas; 
    console.log(fichas);
 },error=>{
 console.log("errorrrrrrr") })

 var persona;
//var rut_paciente = String

this.storage.get('name').then((val)=>{

 this.db.doc('codigo/'+val).snapshotChanges().subscribe(data=>{
 
   persona= data.payload.get("rut");
   this.apellido = data.payload.get("apellido")
   this.nombre = data.payload.get("name")
    console.log(this.nombre+" "+this.apellido+" "+" "+persona)
        
         this.apiServices.doVernutricion().subscribe((fichas)=>{
           this.user = fichas;
           this.largo = Object.keys(this.user).length;      
                 for( this.i = 0 ; this.i < this.largo ; this.i++  ){    
                   console.log( persona )             
                         if(this.user[this.i].rut == persona ){
                                    this.inter.push(this.user[this.i])
                         }
                 }       
           },error=>{
               }
           )
     })

    })
   


}

 goAgregar(){
  this.route.navigateByUrl("/datospaciente");
 }
 
back(){
this.route.navigateByUrl("/user");
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.navCtrl.pop();
      console.log("Exito cierre de sesión", res);
    }, (err => {
      console.log("Error cierre de sesión", err);
    }));
  }

}

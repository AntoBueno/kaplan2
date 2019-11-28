import { Injectable } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  errorMessage: string = '';
  
  constructor(
    private AFauth : AngularFireAuth,
    public route: Router,
    public db : AngularFirestore
    ) {}

 
  doRegister(nombre: string, rut: string, email: string, password: string){

    return new Promise<any>((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        const uid = res.user.uid;
        this.db.collection('doctor').doc(uid).set({
          uid: uid,
          nombre: nombre,
          rut: rut
        })
        resolve(res);
      }, err => reject(err))
    })
   }

   doLogin(email: string, password: string){
    return new Promise<any>((resolve, reject) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
   }

   doLogout(){
    return new Promise<any>((resolve, reject) => {
        this.AFauth.auth.signOut()
        .then(res => {
          resolve(res);
          this.route.navigateByUrl("/home");
        }, err => reject(err))
    });
   }

   doBuscar(rutpaciente: string, codigo:string, especialidad: string){
     var token
     var token2
          this.db.doc('codigo/'+rutpaciente).snapshotChanges().subscribe(data=>{
              token=data.payload.get("codigo")
              token2=data.payload.get("especialidad")
              if(codigo==token && codigo!=null ){
                console.log("Si es correcto");
                if (token2=="psicologia"){
                  this.route.navigateByUrl("/verpsicologia");
                }
                if (token2=="kinesiologia"){
                  this.route.navigateByUrl("/verfichamedica");
                }
                if (token2=="interconsulta"){
                  this.route.navigateByUrl("/verinterconsulta");
                }                      
                if (token2=="nutricion"){
                  this.route.navigateByUrl("/vernutricion");
                }            
                alert ("se ha verificado exitosamente")
              }
              else{
                console.log("caduco o incorrecto");
                alert("No se logro ingresar, porfavor intentelo nuevamente")
                this.errorMessage = "Codigo o rut invalido";
              }
          })
   }

   

}

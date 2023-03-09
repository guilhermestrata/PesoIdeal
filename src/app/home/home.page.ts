import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  res:number=0;
  altura:string='';
  radioSelecionada:string="";

  constructor(public toastController: ToastController, public alertController: AlertController) {}

  verificarRadio(){
    if(this.radioSelecionada == "Homem"){
    this.pesoH();
  }else if(this.radioSelecionada == "Mulher"){
    this.pesoM();
  }
    this.exibirAlerta();
  }

  pesoH(){
      this.res = 72.7*parseFloat(this.altura)-58;
  }
  pesoM(){
      this.res = 62.1*parseFloat(this.altura)-44.7;
    }




  async exibirAlerta(){
    const alerta = await this.alertController.create({
      header: this.radioSelecionada,
      subHeader:"Seu peso ideal é:",
      message:""+Math.round(this.res),
      buttons:["Ok"]
    });
    alerta.present();
  }}

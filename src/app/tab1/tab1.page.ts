import { NavigationExtras, Router } from '@angular/router';

import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false
})
export class Tab1Page {

  constructor(
    public router: Router,
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

  listaFilmes: IFilme[] = [
    {
nome: 'O Espetacular Homem-Aranha (2012)',
      lancamento: '06/07/2012',
      duracao: '2h16m',
      classificacao: 8,
      cartaz: 'https://themoviedb.org',
      generos: ['Ação', 'Ficção científica', 'Aventura'],
      pagina: '/the-amazing-spider-man',
      favorito: false
    },
    {
nome: 'Batman: O Cavaleiro das Trevas (2008)',
      lancamento: '18/07/2008',
      duracao: '2h32m',
      classificacao: 10,
      cartaz: 'https://themoviedb.org',
      generos: ['Ação', 'Crime', 'Thriller'],
      pagina: '/the-dark-knight',
      favorito: false
    }
  
  ];

  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = { state: {paramFilme: filme}};
    this.router.navigate(['filme-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}

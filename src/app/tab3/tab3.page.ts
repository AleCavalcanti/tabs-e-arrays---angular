import { Component } from '@angular/core';
import { IAtor } from '../model/IAtor';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false
})
export class Tab3Page {

  listaAtores: IAtor[] = [
    {
      nome: 'Cillian Murphy',
      nascimento: '25/05/1976',
      nacionalidade: 'Irlandês',
      popularidade: 9,
      foto: 'https://tmdb.org',
      filmesFamosos: ['Oppenheimer', 'A Origem', 'Batman Begins'],
      favorito: false
    },
    {
      nome: 'Pedro Pascal',
      nascimento: '02/04/1975',
      nacionalidade: 'Chileno-Americano',
      popularidade: 10,
      foto: 'https://tmdb.org',
      filmesFamosos: ['Gladiador II', 'The Mandalorian', 'O Protetor 2'],
      favorito: false
    }
  ];

  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  async exibirAlertaFavorito(ator: IAtor) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: `Deseja realmente favoritar o actor ${ator.nome}?`,
      buttons: [
        { text: 'Cancelar', role: 'cancel', handler: () => { ator.favorito = false; } },
        { text: 'Sim, favoritar.', handler: () => { ator.favorito = true; this.apresentarToast(); } }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Ator adicionado aos favoritos...',
      duration: 2000,
      color: 'success'
    });
    await toast.present();
  }
}
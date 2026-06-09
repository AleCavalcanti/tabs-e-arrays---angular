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
      nome: 'Ryan Gosling',
      nascimento: '12/11/1980',
      nacionalidade: 'Canadense',
      popularidade: 9,
      foto: 'https://tmdb.org',
      filmesFamosos: ['La La Land', 'Blade Runner 2049', 'Barbie'],
      favorito: false
    },
    {
      nome: 'Leonardo DiCaprio',
      nascimento: '11/11/1974',
      nacionalidade: 'Estadunidense',
      popularidade: 10,
      foto: 'https://tmdb.org',
      filmesFamosos: ['Titanic', 'A Origem', 'O Lobo de Wall Street'],
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
      message: `Deseja realmente favoritar o ator ${ator.nome}?`,
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

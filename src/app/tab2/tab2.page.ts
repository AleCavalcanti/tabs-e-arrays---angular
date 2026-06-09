import { Component } from '@angular/core';
import { ISerie } from '../model/ISerie';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false
})
export class Tab2Page {

  listaSeries: ISerie[] = [
    {
      nome: 'Breaking Bad',
      lancamento: '20/01/2008',
      temporadas: '5 Temporadas',
      classificacao: 9,
      cartaz: 'https://tmdb.org',
      generos: ['Drama', 'Crime'],
      favorito: false
    },
    {
      nome: 'Stranger Things',
      lancamento: '15/07/2016',
      temporadas: '4 Temporadas',
      classificacao: 8,
      cartaz: 'https://tmdb.org',
      generos: ['Sci-Fi', 'Mistério'],
      favorito: false
    }
  ];

  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  async exibirAlertaFavorito(serie: ISerie) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a série?',
      buttons: [
        { text: 'Cancelar', role: 'cancel', handler: () => { serie.favorito = false; } },
        { text: 'Sim, favoritar.', handler: () => { serie.favorito = true; this.apresentarToast(); } }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Série adicionada aos favoritos...',
      duration: 2000,
      color: 'success'
    });
    await toast.present();
  }
}

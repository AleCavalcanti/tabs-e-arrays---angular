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
      nome: 'The Last of Us',
      lancamento: '15/01/2023',
      temporadas: '1 Temporada',
      classificacao: 9,
      cartaz: 'https://tmdb.org',
      generos: ['Drama', 'Ficção científica', 'Ação'],
      favorito: false
    },
    {
      nome: 'Better Call Saul',
      lancamento: '08/02/2015',
      temporadas: '6 Temporadas',
      classificacao: 9,
      cartaz: 'https://tmdb.org',
      generos: ['Drama', 'Crime'],
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
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
      cartaz: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0uZB07sSznX1iX2dB_C7yCCWSu8R1SknwQ&s',
      generos: ['Drama', 'Ficção científica', 'Ação'],
      favorito: false
    },
    {
      nome: 'Better Call Saul',
      lancamento: '08/02/2015',
      temporadas: '6 Temporadas',
      classificacao: 9,
      cartaz: 'https://m.media-amazon.com/images/M/MV5BNDdjNTEzMjMtYjM3Mi00NzQ3LWFlNWMtZjdmYWU3ZDkzMjk1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
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

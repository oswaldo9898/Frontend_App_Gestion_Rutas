import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class UtilityProviderService {
  constructor(
    private toast: ToastController,
    private alert: AlertController,
    ) {}

  async showToast(header?: string,message?: string, overrideOptions?: any): Promise<HTMLIonToastElement> {
    const toastOptions = { header, message, position: 'top', duration: 6000 };
    const options = Object.assign(toastOptions, overrideOptions);
    const result = await this.toast.create(options);
    return result;
  }

  async showAlert(header?: string,message?: string, buttons?: string): Promise<HTMLIonAlertElement> {
    const result = await this.alert.create({
      header,
      message,
      buttons:[buttons]
    });
    return result;
  }
}

import { Component, inject } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SubscriptionSuccessModalComponent } from '../modals/subscription-success-modal/subscription-success-modal.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ViewportScroller } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'mc-contact',
  imports: [ReactiveFormsModule, ToastModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [DialogService, MessageService]
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly dialogService = inject(DialogService);
  private readonly messageService = inject(MessageService);
  private ref: DynamicDialogRef | undefined;
  private scroller = inject(ViewportScroller);

  public form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  onSendSubscription(): void {
    if (!this.form.valid) return;

    const { email } = this.form.getRawValue();
    const formName = 'contact';
    const formData = new FormData();

    formData.append('form-name', formName);
    formData.append('email', email);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(<any>formData).toString()
    }).then(() => {
      this.onShowModal(email);
      this.form.reset();
    }).catch((error) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema al enviar tu suscripción. Por favor, intenta nuevamente más tarde.' });
    })
  }

  onShowModal(email: string): void {
    this.ref = this.dialogService.open(SubscriptionSuccessModalComponent, {
      data: {
        email,
      },
      width: '772px',
      modal: true,
      // focusOnShow: false
      closable: true,
      styleClass: 'modal-subscription-success',
      contentStyle: { overflow: 'auto' },
      breakpoints: {
        '1919px': '690px',
        '1439px': '734px',
        '1023px': '540px',
        '767px': '334px',
      }
    });
    this.ref.onClose.subscribe({
      next: (result) => {
        if (result === 'goToServicesSection') {
          this.scroller.scrollToAnchor('services');
        }
      }
    })
  }
}

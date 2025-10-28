import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'mc-subscription-success-modal',
  imports: [NgOptimizedImage],
  templateUrl: './subscription-success-modal.component.html',
  styleUrl: './subscription-success-modal.component.scss'
})
export class SubscriptionSuccessModalComponent {
  public readonly config = inject(DynamicDialogConfig);
  private ref = inject(DynamicDialogRef);

  onApplyDiscount(): void {
    this.ref.close('goToServicesSection');
  }
}

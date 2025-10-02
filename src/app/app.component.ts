import { Component } from '@angular/core';
import { HeaderComponent } from './feature/landing/header/header.component';
import { FooterComponent } from './feature/landing/footer/footer.component';
import { HeroComponent } from './feature/landing/hero/hero.component';
import { CountdownComponent } from './feature/landing/countdown/countdown.component';
import { SocialMediaComponent } from './feature/landing/social-media/social-media.component';
import { ServicesComponent } from './feature/landing/services/services.component';
import { ContactComponent } from './feature/landing/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, ServicesComponent, CountdownComponent, ContactComponent, SocialMediaComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landing-page';
}

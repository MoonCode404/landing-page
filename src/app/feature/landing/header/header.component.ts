import { Component } from '@angular/core';

@Component({
  selector: 'mc-header',
  imports: [],
  template: `
    <header class="w-full flex justify-center items-center p-5 bg-white shadow-brand xl:p-[22px] 2xl:p-7">
      <a href="/" aria-label="Moon Code 404 Home">
        <img src="/img/mooncode-logo.svg" alt="Moon Code 404 Creative Studio Logo" width="259" height="32"
          class="w-full h-6 md:h-5 lg:h-6 xl:h-7 2xl:h-8">
      </a>
    </header>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

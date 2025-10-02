import { Component } from '@angular/core';

@Component({
  selector: 'mc-footer',
  imports: [],
  template: `
    <footer class="w-full bg-blue-dark p-5 py-8 text-center md:py-[27px] lg:py-[26px] xl:py-[30px] 2xl:py-[34px]" role="contentinfo">  
      <div class="flex flex-col items-center gap-[20px] md:gap-2 lg:flex-row lg:justify-between lg:max-w-[732px] lg:mx-auto xl:max-w-[926px] 2xl:max-w-[1246px]">
        <a href="/" aria-label="Moon Code 404 Home">
          <img src="img/mooncode-logo-white.svg" alt="Moon Code 404 Creative Studio Logo" width="226" height="28"
            class="w-full h-5 md:h-[18px] lg:h-5 2xl:h-7">
        </a>
        <div class="flex flex-col max-w-full font-normal text-base leading-[20px] text-white md:text-xs md:block lg:text-sm xl:text-base 2xl:text-lg">
          <span>&copy;2025 Moon Code 404. </span>
          <span>Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}

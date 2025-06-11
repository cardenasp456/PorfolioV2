import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslation } from './translate.config';

export const appConfig: ApplicationConfig = {
    providers: [
      provideHttpClient(),
      provideAnimationsAsync(),
      provideTranslation(),
      providePrimeNG({
            theme: {
                preset: Aura,
            }
        })
    ]
};
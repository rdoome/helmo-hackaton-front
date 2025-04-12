/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { persistState } from '@datorama/akita';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  
    persistState({
      include: ['cartSession'], // Name must match @StoreConfig({ name: 'cartSession' }) in CartStore
      key: 'myAkitaStores',     // This is the key used in local storage
    });
    

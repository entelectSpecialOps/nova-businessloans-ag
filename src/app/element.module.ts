import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { ClientsModule } from './clients/clients.module';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
    imports: [
        BrowserModule,
        ClientsModule
    ],
    providers: [],
})
export class ElementModule implements DoBootstrap {
    constructor(
        private injector: Injector
    ) {}

    ngDoBootstrap(appRef: ApplicationRef) {
        if (!customElements.get('clients-provider')) {
            // Register only if 'clients-provider' entry is not found in the registry
            
            // Step 3: ClientsComponent stores the constructor class
            const clientsComponent = createCustomElement(ClientsComponent, {
                injector: this.injector,    // This injector is used to load the component's factory
            });
            
            // Step 4: Registering custom tag 'clients-provider' with the obtained custom class
            customElements.define('clients-provider', clientsComponent);
        }
    }

}
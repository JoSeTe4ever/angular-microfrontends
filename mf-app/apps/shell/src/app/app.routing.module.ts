import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES =
    [
        {
            path: '',
            component: HomeComponent
        },
    ];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, { relativeLinkResolution: 'legacy', initialNavigation: 'enabledBlocking' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes =
    [
        {
            path: '',
            component: HomeComponent
        },
        {
            path: 'gallery',
            loadChildren: () =>
                import('gallery/Module').then((m) => m.RemoteEntryModule),
        },
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabledBlocking' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

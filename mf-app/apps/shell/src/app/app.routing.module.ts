import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

const routes =
    [
        {
            path: '',
            component: HomeComponent
        },
        //dynamic routes loaded here, instead of using import we use the dynamic runtime plugin 474110
        {
            path: 'gallery',
            loadChildren: () =>
                // import('gallery/Module').then((m) => m.RemoteEntryModule),
                loadRemoteModule({
                    remoteName: 'gallery',
                    remoteEntry: 'http://localhost:5000/remoteEntry.js',
                    exposedModule: './Module',
                }).then((m) => m.RemoteEntryModule)
        },
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabledBlocking' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

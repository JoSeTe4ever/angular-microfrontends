import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryFacade } from '@mf-app/shared/data-store';
import { APP_ROUTES } from './app.routing.module';

@Component({
  selector: 'mf-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private galleryFacade: GalleryFacade, private router: Router) {

    //talk to backend about micro-frontends
    //dynamic routes loaded here, instead of using import we use the dynamic runtime plugin 474110
    const microfrontends = [{      
      path: 'gallery',
      loadChildren: () =>
        // import('gallery/Module').then((m) => m.RemoteEntryModule),
        loadRemoteModule({
          remoteName: 'gallery',
          remoteEntry: 'http://localhost:5000/remoteEntry.js',
          exposedModule: './Module',
        }).then((m) => m.RemoteEntryModule)
    }]

    const allRoutes = [...microfrontends, ...APP_ROUTES];
    router.resetConfig(allRoutes);
  }


  ngOnInit(): void {
    this.galleryFacade.init();
  }
}
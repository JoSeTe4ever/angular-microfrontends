import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MicroFrontendRuntime } from '@mf-app/interfaces';
import { GalleryFacade } from '@mf-app/shared/data-store';
import { DiscoveryService } from '../services/discovery.service';
import { APP_ROUTES } from './app.routing.module';

@Component({
  selector: 'mf-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  allRoutesPaths: Array<string | undefined> = [];

  constructor(private galleryFacade: GalleryFacade,
    private router: Router,
    private discoveryService: DiscoveryService) {

    this.discoveryService.discover().subscribe((readyMicroFrontends: Array<MicroFrontendRuntime>) => {
      const microfrontends = readyMicroFrontends.map(e => {
        return {
          path: e.path,
          loadChildren: () =>
            loadRemoteModule(e.remoteOptions).then((m) => m.RemoteEntryModule)
        };
      })

      const allRoutes = [...microfrontends, ...APP_ROUTES];
      this.allRoutesPaths = allRoutes.map(e => `/${e.path}`);
      this.router.resetConfig(allRoutes);
    });
  }


  ngOnInit(): void {
    this.galleryFacade.init();
  }
}
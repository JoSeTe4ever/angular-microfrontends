import { loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation-runtime';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryFacade } from '@mf-app/shared/data-store';
import { DiscoveryService } from '../services/discovery.service';
import { APP_ROUTES } from './app.routing.module';

@Component({
  selector: 'mf-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private galleryFacade: GalleryFacade, private router: Router,
    private discoveryService: DiscoveryService) {

    this.discoveryService.discover().subscribe((readyMicroFrontends) => {
      // TODO - add logic to handle the discovered micro frontends using map 
      const promises: any[] = [];
      const microfrontends = [{
        path: 'gallery',
        loadChildren: () => {

          readyMicroFrontends.forEach((element: LoadRemoteModuleOptions) => {
            promises.push(loadRemoteModule(element));
          });

          return Promise.all(promises).then((m: any) => m.RemoteEntryModule);
        }
      }];

      const allRoutes = [...microfrontends, ...APP_ROUTES];
      this.router.resetConfig(allRoutes);
    });

  }


  ngOnInit(): void {
    this.galleryFacade.init();
  }
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GalleryStoreModule } from '@mf-app/shared/data-store';
import { RemoteEntryComponent } from './entry.component';


@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    GalleryStoreModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}

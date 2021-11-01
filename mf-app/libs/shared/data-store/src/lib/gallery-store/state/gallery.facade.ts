import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as GalleryActions from './gallery.actions';
import * as GallerySelectors from './gallery.selectors';
import { map } from 'rxjs/operators';

@Injectable()
export class GalleryFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(GallerySelectors.getGalleryLoaded));
  allGallery$ = this.store.pipe(select(GallerySelectors.getAllGallery));
  selectedGallery$ = this.store.pipe(select(GallerySelectors.getSelected));
  selectedCats$ = this.store.pipe(select(GallerySelectors.getSelectedCats));

  constructor(private readonly store: Store) { }

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(GalleryActions.init());
  }

  isCatSelected(catId: any) {
    return this.selectedCats$.pipe(
      map((selectedCats) => selectedCats.has(catId))
    );
  }

  toggleSelectCat(cat: any) {
    this.store.dispatch(GalleryActions.toggleSelectCat({ cat }));
  }
}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiSelectors } from '@rm-company/poi';

@Component({
  selector: 'rm-company-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  poi$ = this.store.select(PoiSelectors.selectEntity);

  constructor(private store: Store) {}
}

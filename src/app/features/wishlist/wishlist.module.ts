import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { WishlistRoutingModule } from './wishlist.routing';
import { WishlistComponent } from './wishlist.component';

const components = [WishlistComponent];
const modules = [SharedModule, WishlistRoutingModule];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules
  ]
})
export class WishlistModule { }

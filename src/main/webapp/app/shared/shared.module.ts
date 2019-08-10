import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InventorySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [InventorySharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [InventorySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InventorySharedModule {
  static forRoot() {
    return {
      ngModule: InventorySharedModule
    };
  }
}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipmonogwtSharedModule } from 'app/shared';
import { GWT_RPC_ROUTE, GwtRpcComponent } from './';

@NgModule({
    imports: [JhipmonogwtSharedModule, RouterModule.forChild([GWT_RPC_ROUTE])],
    declarations: [GwtRpcComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GwtRpcModule {}

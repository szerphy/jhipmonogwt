import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipmonogwtSharedModule } from 'app/shared';
import { GWTDISPATCH_ROUTE, GwtDispatchComponent } from './';

@NgModule({
    imports: [JhipmonogwtSharedModule, RouterModule.forChild([GWTDISPATCH_ROUTE])],
    declarations: [GwtDispatchComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GwtDispatchModule {}

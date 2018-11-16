import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipmonogwtSharedModule } from 'app/shared';
import { GWTREST_ROUTE, GwtRestComponent } from './';

@NgModule({
    imports: [JhipmonogwtSharedModule, RouterModule.forChild([GWTREST_ROUTE])],
    declarations: [GwtRestComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GwtRestModule {}

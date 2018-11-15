import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipmonogwtSharedModule } from 'app/shared';
import { GWT_ROUTE, GwtComponent } from './';

@NgModule({
    imports: [JhipmonogwtSharedModule, RouterModule.forChild([GWT_ROUTE])],
    declarations: [GwtComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GwtModule {}

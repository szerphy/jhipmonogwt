import { NgModule } from '@angular/core';

import { JhipmonogwtSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipmonogwtSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipmonogwtSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipmonogwtSharedCommonModule {}

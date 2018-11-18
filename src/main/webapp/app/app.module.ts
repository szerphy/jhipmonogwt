import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { Ng2Webstorage, LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { JhipmonogwtSharedModule } from 'app/shared';
import { JhipmonogwtCoreModule } from 'app/core';
import { JhipmonogwtAppRoutingModule } from './app-routing.module';
import { JhipmonogwtHomeModule } from './home/home.module';
import { JhipmonogwtAccountModule } from './account/account.module';
import { JhipmonogwtEntityModule } from './entities/entity.module';
import { GwtRpcModule } from './gwt-rpc';
import { GwtRestModule } from './gwt-rest';
import { GwtDispatchModule } from './gwt-dispatch';
import * as moment from 'moment';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent, NavbarComponent, FooterComponent, PageRibbonComponent, ErrorComponent } from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipmonogwtAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
        JhipmonogwtSharedModule,
        JhipmonogwtCoreModule,
        JhipmonogwtHomeModule,
        JhipmonogwtAccountModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
        JhipmonogwtEntityModule,
        GwtRpcModule,
        GwtRestModule,
        GwtDispatchModule
    ],
    declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
            deps: [LocalStorageService, SessionStorageService]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [Injector]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
            deps: [JhiEventManager]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true,
            deps: [Injector]
        }
    ],
    bootstrap: [JhiMainComponent]
})
export class JhipmonogwtAppModule {
    constructor(private dpConfig: NgbDatepickerConfig) {
        this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
    }
}

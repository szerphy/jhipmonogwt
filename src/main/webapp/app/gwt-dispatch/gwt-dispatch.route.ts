import { Route } from '@angular/router';

import { GwtDispatchComponent } from './';

export const GWTDISPATCH_ROUTE: Route = {
    path: 'gwt-dispatch',
    component: GwtDispatchComponent,
    data: {
        authorities: [],
        pageTitle: 'GWT Dispatch'
    }
};

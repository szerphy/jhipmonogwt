import { Route } from '@angular/router';

import { GwtRestComponent } from './';

export const GWTREST_ROUTE: Route = {
    path: 'gwt-rest',
    component: GwtRestComponent,
    data: {
        authorities: [],
        pageTitle: 'GWT Rest'
    }
};

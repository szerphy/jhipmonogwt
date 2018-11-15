import { Route } from '@angular/router';

import { GwtComponent } from './';

export const GWT_ROUTE: Route = {
    path: 'gwt',
    component: GwtComponent,
    data: {
        authorities: [],
        pageTitle: 'GWT Container'
    }
};

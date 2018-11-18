import { Route } from '@angular/router';

import { GwtRpcComponent } from './';

export const GWT_RPC_ROUTE: Route = {
    path: 'gwt-rpc',
    component: GwtRpcComponent,
    data: {
        authorities: [],
        pageTitle: 'GWT RPC'
    }
};

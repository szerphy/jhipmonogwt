package com.zerphy.jhipmonogwt.gwtrest.client;

import org.fusesource.restygwt.client.dispatcher.DefaultFilterawareDispatcher;

public class RestDispatcher extends DefaultFilterawareDispatcher {

    public RestDispatcher() {
        addFilter(new JwtAuthDispatcherFilter());
    }
}

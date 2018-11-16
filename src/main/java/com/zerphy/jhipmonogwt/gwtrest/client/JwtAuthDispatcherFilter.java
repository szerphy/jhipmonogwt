package com.zerphy.jhipmonogwt.gwtrest.client;

import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.storage.client.Storage;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.dispatcher.DispatcherFilter;

public class JwtAuthDispatcherFilter implements DispatcherFilter {

    @Override
    public boolean filter(Method method, RequestBuilder builder) {
        Storage sessionStorage = Storage.getSessionStorageIfSupported();
        String jwtToken = sessionStorage.getItem("jhi-authenticationtoken")
            .replaceAll("^\"|\"$", "");
        builder.setHeader("Authorization","Bearer " + jwtToken);
        return true;
    }
}

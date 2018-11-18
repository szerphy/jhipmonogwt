package com.zerphy.jhipmonogwt.gwtrpc.client;

import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.user.client.rpc.AsyncCallback;

/**
 * The async counterpart of <code>GreetingService</code>.
 */
public interface GreetingServiceAsync {
  RequestBuilder greetServer(String input, AsyncCallback<String> callback)
      throws IllegalArgumentException;
}

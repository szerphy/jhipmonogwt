package com.zerphy.jhipmonogwt.gwtrest.client;

import com.google.gwt.http.client.RequestBuilder;
import org.fusesource.restygwt.client.MethodCallback;
import org.fusesource.restygwt.client.RestService;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import java.util.List;

public interface PersonService extends RestService {
    @GET
    @Path("api/people")
    void getAllPeople(MethodCallback<List<Person>> callback);
}

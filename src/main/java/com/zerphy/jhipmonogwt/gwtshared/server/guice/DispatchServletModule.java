package com.zerphy.jhipmonogwt.gwtshared.server.guice;

import net.customware.gwt.dispatch.server.guice.GuiceStandardDispatchServlet;

import com.google.inject.servlet.ServletModule;

public class DispatchServletModule extends ServletModule {
	@Override
	protected void configureServlets(){
		serve("/gwtdispatch/dispatch").with(GuiceStandardDispatchServlet.class);
	}
}

package com.zerphy.jhipmonogwt.gwtshared.server.guice;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.servlet.GuiceServletContextListener;
import net.customware.gwt.dispatch.server.guice.ServerDispatchModule;

public class GuiceServletConfig extends GuiceServletContextListener {

	@Override
	protected Injector getInjector() {
		return Guice.createInjector(new ServerDispatchModule(), new ActionsModule(), new DispatchServletModule());
	}
}

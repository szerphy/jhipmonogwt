package com.zerphy.jhipmonogwt.gwtshared.server.guice;

import com.zerphy.jhipmonogwt.gwtdispatch.server.handlers.GetAllPeopleHandler;
import com.zerphy.jhipmonogwt.gwtdispatch.shared.actions.GetAllPeople;
import net.customware.gwt.dispatch.server.guice.ActionHandlerModule;

public class ActionsModule extends ActionHandlerModule{

	@Override
	protected void configureHandlers() {
		bindHandler(GetAllPeople.class, GetAllPeopleHandler.class);
	}
}

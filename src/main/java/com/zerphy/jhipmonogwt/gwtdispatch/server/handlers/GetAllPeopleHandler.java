package com.zerphy.jhipmonogwt.gwtdispatch.server.handlers;

import com.google.common.collect.Lists;
import com.zerphy.jhipmonogwt.gwtdispatch.shared.actions.GetAllPeople;
import com.zerphy.jhipmonogwt.gwtdispatch.shared.dtos.PersonDto;
import com.zerphy.jhipmonogwt.gwtdispatch.shared.results.GetAllPeopleResult;
import com.zerphy.jhipmonogwt.repository.PersonRepository;
import com.zerphy.jhipmonogwt.service.RepositoryUtility;
import net.customware.gwt.dispatch.server.ActionHandler;
import net.customware.gwt.dispatch.server.ExecutionContext;
import net.customware.gwt.dispatch.shared.DispatchException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class GetAllPeopleHandler
		implements ActionHandler<GetAllPeople, GetAllPeopleResult> {

	private final Logger logger = LoggerFactory.getLogger(GetAllPeopleHandler.class);

	@Override
	public GetAllPeopleResult execute(GetAllPeople action, ExecutionContext context)
			throws DispatchException {
        PersonRepository personRepository = RepositoryUtility.getRepository(PersonRepository.class);
        List<PersonDto> people = Lists.newLinkedList();
        personRepository.findAll().forEach(person -> {
            people.add(new PersonDto()
                .id(person.getId())
                .name(person.getName())
                .age(person.getAge()));
        });
        GetAllPeopleResult result = new GetAllPeopleResult();
        result.setPeople(people);
        return result;
	}

	@Override
	public Class<GetAllPeople> getActionType() {
		return GetAllPeople.class;
	}

	@Override
	public void rollback(GetAllPeople action, GetAllPeopleResult result,
                         ExecutionContext context) throws DispatchException {
		// do nothing
	}
}

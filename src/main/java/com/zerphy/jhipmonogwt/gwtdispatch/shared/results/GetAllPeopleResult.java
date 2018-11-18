package com.zerphy.jhipmonogwt.gwtdispatch.shared.results;

import com.zerphy.jhipmonogwt.gwtdispatch.shared.dtos.PersonDto;
import net.customware.gwt.dispatch.shared.Result;

import java.util.List;

public class GetAllPeopleResult implements Result {

    private List<PersonDto> people;

    public List<PersonDto> getPeople() {
        return people;
    }

    public void setPeople(List<PersonDto> people) {
        this.people = people;
    }
}

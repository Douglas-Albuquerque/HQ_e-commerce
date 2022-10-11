import React from "react"
import { mount } from "cypress"
import RareCard from '../../src/Components/Cards/RareCard';

it('click card', () => {
  mount(<RareCard />)
  cy.get("#img").click();
});

import React from 'react';
import { Router, createMemoryHistory } from 'react-router';
import routes from './routes';
import { shallow } from 'enzyme';

import Home from './containers/Home.react';
import About from './containers/About.react';


const history = createMemoryHistory(['/']);
const location = history.createLocation('/');

function setup() {
  return shallow(<Router routes={routes} history={history} location={location}/>);
}

describe('routes', () => {
  let routes;

  beforeEach(() => {
    const wrapper = setup();
    routes = wrapper.props("routes").routes[0];
  });

  test('Sets the index route to be Home', () => {
    expect(routes.indexRoute.component).toBe(Home);
  });

  test('Sets the about route to be About', () => {
    expect(routes.childRoutes[0].path).toBe("about");
    expect(routes.childRoutes[0].component).toBe(About);
  });

});



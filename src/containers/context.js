import React, { PropTypes, Component } from "react";
import Rx from "rxjs";

export class RxContextProvider extends Component {
  getChildContext() {
    return { store$: this.props.store$ };
  }

  render() {
    return this.props.children;
  }
}

RxContextProvider.propTypes = {
  store$: PropTypes.object.isRequired,
};

RxContextProvider.childContextTypes = {
  store$: PropTypes.object.isRequired,
};

export function connect(selector = state => state) {
  return function wrapWithConnect(WrappedComponent) {
    class Connect extends Component {
      componentWillMount() {
        this.subscription = this.context.store$.map(selector).subscribe(this.setState.bind(this));
      }
      componentWillUnmount() {
        this.subscription.unsubscribe();
      }
      render() {
        return (
          <WrappedComponent {...this.state} {...this.props} />
        );
      }
    };

    Connect.contextTypes = {
      store$: PropTypes.object.isRequired,
    };

    return Connect;
  };
}

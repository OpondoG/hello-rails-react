import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchGreeting } from "../actions/greetingsActions";

const Greeting = ({ greeting, fetchGreeting }) => {
  useEffect(() => {
    fetchGreeting();
  }, [fetchGreeting]);

  return <h1>{greeting}</h1>;
};

const mapStateToProps = (state) => ({
  greeting: state.greetings.greeting,
});

export default connect(mapStateToProps, { fetchGreeting })(Greeting);

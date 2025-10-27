import { Info } from "./components/Info/Info";
import { Field } from "./components/Field/Field";
import s from "./App.module.css";
import { Component } from "react";
import { connect } from "react-redux";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.startButton = (
      <button
        disabled={!this.props.field.includes("")}
        onClick={() => this.props.handleReplay()}
        className={s.restartButton}
      >
        ↺
      </button>
    );
  }
  render() {
    return (
      <>
        <div className={s.main}>
          <Info />
          <Field />
          {this.startButton}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  field: state.field,
});
const mapDispatchToProps = (dispatch) => ({
  handleReplay: () => dispatch({ type: "RESTART" }),
});

const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default App;

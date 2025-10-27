// import PropTypes from "prop-types";
import s from "./Info.module.css";
import { connect } from "react-redux";
import { Component } from "react";

class InfoLayoutContainer extends Component {
  render() {
    return (
      <>
        <div className={s.status}>
          {this.props.isDraw === true ? (
            <div className={s.draw}>Ничья</div>
          ) : this.props.isGameEnded === true ? (
            <div className={s.win}> Победил {this.props.currentPlayer}</div>
          ) : (
            `Ходит ${this.props.currentPlayer}`
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currentPlayer: state.currentPlayer,
  isDraw: state.isDraw,
  isGameEnded: state.isGameEnded,
});

export const InfoLayout = connect(mapStateToProps)(InfoLayoutContainer);

// InfoLayout.propTypes = {
// 	currentPlayer: PropTypes.string,
// 	isDraw: PropTypes.bool,
// 	isGameEnded: PropTypes.bool,
// };

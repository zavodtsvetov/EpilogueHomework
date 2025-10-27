import "./Info.css";
import { connect } from "react-redux";
import { Component } from "react";

class InfoLayoutContainer extends Component {
  render() {
    return (
      <>
        <div className="text-[50px]">
          {this.props.isDraw === true ? (
            <div className="text-[50px] text-blue-300">Ничья</div>
          ) : this.props.isGameEnded === true ? (
            <div className="text-[50px]  text-green-700">
              {" "}
              Победил {this.props.currentPlayer}
            </div>
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

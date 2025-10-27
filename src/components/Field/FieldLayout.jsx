import "./Field.css";
import { connect } from "react-redux";
import { IS_GAME_ENDED, IS_DRAW, SET_FIELD, SET_STEP } from "../actions/index";
import { checkWinner } from "../checkWinner";
import { Component } from "react";

let nextId = 0;

class FieldLayoutContainer extends Component {
  handleCLick(item, idx) {
    if (item === "" && this.props.isGameEnded === false) {
      const newField = [...this.props.field];
      newField[idx] = this.props.currentPlayer;
      const isWinner = checkWinner(newField);

      if (isWinner) {
        this.props.dispatch(IS_GAME_ENDED);
      } else if (!isWinner && !newField.includes("")) {
        this.props.dispatch(IS_DRAW);
      } else {
        this.props.dispatch(SET_STEP(this.props.currentPlayer));
      }

      this.props.dispatch(SET_FIELD(newField));
    }
  }
  render() {
    return (
      <>
        <div className="mt-2 ml-auto mr-auto w-[400px] h-[400px] ">
          <div className="grid grid-cols-3 grid-rows-3 ">
            {this.props.field.map((item, index) => {
              return (
                <button
                  onClick={() => {
                    this.handleCLick(item, index);
                  }}
                  className="w-[134px] h-[134px] text-[70px]  bg-black-500 active:bg-[#d3f6d2] border border-black p-4 "
                  key={nextId++}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  field: state.field,
  currentPlayer: state.currentPlayer,
  isGameEnded: state.isGameEnded,
});

export const FieldLayout = connect(mapStateToProps)(FieldLayoutContainer);

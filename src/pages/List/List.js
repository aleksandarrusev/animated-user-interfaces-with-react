import React from "react";
import "./List.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Form from "../../components/Form/Form";

class List extends React.Component {
  state = {
    list: [
      { name: "Do this" },
      { name: "Do that" },
      { name: "Don't forget about this" }
    ]
  };

  addToList = item => {
    this.setState(state => ({ list: [item, ...state.list] }));
  };
  removeFromList = index => {
    const newList = this.state.list.filter((item, i) => index !== i);
    this.setState({ list: newList });
  };

  render() {
    return (
      <TransitionGroup className="list">
        <Form submitTodo={this.addToList} />
        {this.state.list.map((item, index) => (
          <CSSTransition
            key={item.name}
            timeout={500}
            classNames="slide-down"
            unmountOnExit
          >
            <div className="list-card-wrapper">
              <div
                className="list-card"
                onClick={() => this.removeFromList(index)}
              >
                <span>{item.name}</span>
              </div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}

export default List;

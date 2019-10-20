import React, {useState} from "react";
import './List.css';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Form from "../../components/Form/Form";

const List = () => {
    const [list, setList] = useState([
        {name: 'Do this'},
        {name: 'Do that'},
        {name: 'Don\'t forget about this'},
    ]);

    const addToList = (item) => {
        setList([item, ...list,])
    };

    const removeFromList = (index) => {
        const newList = list.filter((item, i) => index !== i);
        setList(newList);
    };

    return <TransitionGroup className="list">
        <Form submitTodo={addToList}/>
        {list.map((item, index) =>
            <CSSTransition
                key={item.name}
                timeout={500}
                classNames="list-card"
                unmountOnExit
            >
                <div className="list-card-wrapper">
                    <div className="list-card" onClick={() => removeFromList(index)}>
                        <span>{item.name}</span>
                    </div>
                </div>
            </CSSTransition>
        )}
    </TransitionGroup>
};

export default List;
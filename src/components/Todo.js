import React from "react";

import style from './todo.module.css';

function Todo(props) {
    const {title, desc} = props.todo;
    const { id } = props;

    const clickHandler = (id) => {
        props.onRemove(id);
    }

    return <article className={style.todo}>
       <div>
           <h3>{title}</h3>
           <p>{desc}</p>
       </div>
        <button className={style.btn}
            onClick={ () => {
                clickHandler(id)}
            }
        >
            <i className="fa fa-trash fa-2x"></i>
        </button>
    </article>
}

export default Todo;
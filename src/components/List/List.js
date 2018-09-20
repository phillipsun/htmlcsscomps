import React, { Component } from "react";

import ToDo from "./../ToDo/ToDo";

import "./List.css";

class List extends Component {
  constructor() {
    super();

    this.state = {
      list_name: "My ToDo List",
      list_items: [
        {
          item_id: 1,
          item_label: "vacuum"
        },
        {
          item_id: 2,
          item_label: "go to work"
        },
        {
          item_id: 3,
          item_label: "wash car"
        }
      ]
    };
  }

  render() {
    let items = this.state.list_items.map(el => {
      return <ToDo label={el.item_label} id={el.item_id} />;
    });

    return (
      <div className="list">
        <div className="list__sub-header">
          <h3 className="list__title">{this.state.list_name}</h3>
          <button className="list__button">
            <div className="list__plus-icon" /> Add New ToDo
          </button>
        </div>
        <div className="todos">{items}</div>
      </div>
    );
  }
}

export default List;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Card.css';

class Card extends Component {
  static propTypes = {
    details: PropTypes.shape({
      id: PropTypes.number.isRequired,
      header: PropTypes.string.isRequired,
      subheader: PropTypes.string.isRequired,
      info: PropTypes.arrayOf(React.PropTypes.object).isRequired,
      isEditable: PropTypes.bool,
      isClickable: PropTypes.bool,
    }).isRequired,
  }

  constructor(props) {
    super(props);

    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onCardClick = this.onCardClick.bind(this);
  }

  onEditClick(e) {
    e.preventDefault();
    e.stopPropagation();
    global.console.log(`Edit card icon was clicked: ${this.props.details.header}`);
  }

  onDeleteClick(e) {
    e.preventDefault();
    e.stopPropagation();
    global.console.log(`Delete card icon was clicked: ${this.props.details.header}`);
  }

  onCardClick(e) {
    e.preventDefault();
    global.console.log(`Clickable card, on card click: ${this.props.details.header}`);
  }

  render() {
    return (
      <div className="Card" role="presentation" onClick={this.props.details.isClickable ? this.onCardClick : () => {}}>
        <div className="Card-headers">
          <p className="Card-header">
            {this.props.details.header}
          </p>
          <p className="Card-subheader">
            {this.props.details.subheader}
          </p>
        </div>
        {this.props.details.isEditable &&
          <div className="Card-actions">
            <span role="presentation" className="Card-edit edit-icon" onClick={this.onEditClick} />
            <span role="presentation" className="Card-delete delete-icon" onClick={this.onDeleteClick} />
          </div>}
        <ul className="Card-info">
          {this.props.details.info.map(item => (
            <li className={`Card-info-item ${item.icon}`} key={item.id}>
              {item.text}
            </li>
          ))}
        </ul>
        {this.props.details.isClickable && <div className="Card-go-details right-arrow-icon" />}
      </div>
    );
  }
}

export default Card;

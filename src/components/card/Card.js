import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Card.css';

class Card extends Component {
  onEditClick(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('Edit card icon was clicked');
  }

  onDeleteClick(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('Delete card icon was clicked');
  }

  onCardClick(e) {
    e.preventDefault();
    console.log('Clickable card, on card click');
  }

  render() {
    return (
      <div className="Card" onClick={this.props.details.isClickable ? this.onCardClick : () => {}}>
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
            <a className="Card-edit edit-icon" onClick={this.onEditClick} />
            <a className="Card-delete delete-icon" onClick={this.onDeleteClick} />
          </div>}
        <ul className="Card-info">
          {this.props.details.info.map((item, i) => {
            return (
              <li className={'Card-info-item ' + item.icon} key={i}>
                {item.text}
              </li>
            );
          })}
        </ul>
        {this.props.details.isClickable && <div className="Card-go-details right-arrow-icon" />}
      </div>
    );
  }
}

Card.PropTypes = {
  details: PropTypes.object.isRequired
};

export default Card;

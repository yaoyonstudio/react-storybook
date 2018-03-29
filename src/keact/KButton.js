import React, { Component } from 'react';
import styled, { css } from 'styled-components';

class KButton extends Component {
  render() {
    const Button = styled.button`
      background-color: #fff;
      border: 1px solid #d33;
      border-radius: 3px;
      color: #d33;
      cursor: pointer;
      display: inline-block;
      padding: .5rem 0;
      width: 10rem;
      box-sizing: border-box;

      &:hover {
        color: #fff;
        background-color: #d33 !important;
      }

      ${props => this.props.primary && css`
        background-color: #d33;
        color: #fff;
      `}

      ${props => this.props.gradient && css`
        background-image: linear-gradient(90deg, #ff8e2b, #ffa308);
        border-color: #ff8e2b;
        color: #fff;
      `}
    `
    return (
      <Button onClick={this.props.onClick}>{this.props.children}</Button>
    );
  }
}

export default KButton;

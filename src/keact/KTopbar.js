import React, { Component } from 'react';
import styled, { css } from 'styled-components';

class KTopbar extends Component {
  render() {
    const Div = styled.div`
      width: 100vw;
      height: 44px;
    `
    return (
      <Div>
        <h2>{this.props.children}</h2>
      </Div>
    );
  }
}

export default KTopbar;

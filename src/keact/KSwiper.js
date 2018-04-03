import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Swiper from 'react-id-swiper';
import './style/swiper.css';

class KSwiper extends Component {
  render() {
    const Div = styled.div`

      ${props => this.props.current && css`}
        img {
          filter: grayscale(100%);
        }
      `}

    `
    return (
      <Div>
        <Swiper {...this.props.config}>
          {this.props.data.map((item, index) => {
            return (
              <div key={index}><img src={item.slide_img} alt={item.slide_title} /></div>
            )
          })}
        </Swiper>
      </Div>
    );
  }
}

export default KSwiper;

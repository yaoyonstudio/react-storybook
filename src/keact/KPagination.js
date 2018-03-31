import React, { Component } from 'react';
import styled, { css } from 'styled-components';

class KPagination extends Component {
  render() {
    let pageItems = []
    let pageCount = 1
    let currentPage = 1

    if (this.props.count < this.props.pagesize) {
      pageItems.push(1)
      pageCount = 1
    } else {
      pageCount = Math.ceil(this.props.count / this.props.pagesize)
      if (pageCount <= this.props.showpages) {
        for (let i = 0, l = pageCount; i < l; i++) {
          pageItems.push(i + 1)
        }
      } else {
        for (let i = 0; i < this.props.showpages; i++) {
          pageItems.push(i + 1)
        }
      }
    }

    if (this.props.page < 1) {
      currentPage = 1
    } else if (this.props.page > this.props.pageCount) {
      currentPage = pageCount
    } else {
      currentPage = this.props.page
    }

    const Div = styled.div`
      ul {
        text-align: center;
      }

      li {
        list-style: none;
        margin: 0;
        padding: 0;
        background-color: #fff;
        display: inline-block;
        width: 32px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        margin: 0 4px;
        font-size: 16px;
        color: #333;
        border-radius: 4px;
        cursor: pointer;
      }

      a {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #333;
      }

      .prev, .next {
        font-size: 12px;
        width: auto;
        padding: 0 10px;
        min-width: 32px;
      }

      .current {
        background-color: #d33;
        a {
          color: #fff;
        }
      }

      ${props => this.props.width && css`}
        width: ${this.props.width}
      `}

      ${props => this.props.bdcolor && css`}
        border-color: ${this.props.bdcolor}
      `}

      ${props => this.props.height && css`}
        height: ${this.props.height}
      `}

      ${props => this.props.bgcolor && css`}
        background-color: ${this.props.bgcolor}
      `}

      ${props => this.props.color && css`}
        color: ${this.props.color}
      `}

    `
    return (
      <Div>
        <ul>
          <li className="prev">{this.props.prev ? this.props.prev : ' < '}</li>
          {pageItems.map((item, index) => {
            return (
              <li key={index} className={this.props.page == item ? 'current' : ''}><a page={item} onClick={this.props.href}>{item}</a></li>
            )
          })}
          <li className="next">{this.props.next ? this.props.next : ' > '}</li>
        </ul>
      </Div>
    );
  }
}

export default KPagination;

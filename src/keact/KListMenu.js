import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const groupBy = (arr, group) => {
  let map = {}
  let dest = []
  for (let i = 0, l = arr.length; i < l; i++) {
    let ai = arr[i]  
    if (!map[ai[group]]) {  
      dest.push({  
        group: ai[group],
        data: [ai]
      })
      map[ai[group]] = ai  
    } else {  
      for (let j = 0, k = dest.length; j < k; j++) {  
        let dj = dest[j]
        if (dj[group] == ai[group]) {  
          dj.data.push(ai)
          break
        }  
      }  
    }  
  }
  return dest
}

class KListMenu extends Component {
  render() {
    const _data = groupBy(this.props.data, 'group')
    console.log(_data)

    const Nav = styled.nav`
      ul {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
      }

      li {
        list-style: none;
        background-color: #fff;
        padding: 0 12px;
        &:not(:last-child) {
          a {
            border-bottom: 1px solid #eee;
          }
        }
      }

      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 44px;
        text-decoration: none;
        color: #666;
        font-size: 14px;
      }

      span {
        width: 32px;
        display: block;
        text-align: center;
        margin-right: 10px;
      }

      img {
        height: 20px;
        max-width: 24px;
        margin: 0 auto;
      }

      p {
        flex: 1;
      }

      ${props => this.props.color && css`}
        p {
          color: ${this.props.color}
        }
      `}

      ${props => this.props.bgcolor && css`}
        background-color: ${this.props.bgcolor};
      `}

      ${props => this.props.acolor && css`}
        .currentTab a p {
          color: ${this.props.acolor} !important;
        }
      `}
    `
    return (
      <Nav>
        <ul>
          {_data.map(section => {
            if (section.data && section.data.length) {
              section.data.map((item, index) => {
                console.log(item)
                return (
                  <li key={index}>
                    <a href={item.link}>
                      {item.icon && <span><img src={item.icon} alt={item.title} /></span>}
                      <p>{item.title}</p>
                    </a>
                  </li>
                )
              })
            }
          })}
        </ul>
      </Nav>
    );
  }
}

export default KListMenu;

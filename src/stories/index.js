import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import { Viewport, withViewport } from '@storybook/addon-viewport';
import backgrounds from '@storybook/addon-backgrounds';

import { KButton, KTopbar, KTabs, KListMenu } from '../keact'

import './story.css';

addDecorator(withViewport('iphone6p'))
addDecorator(
  backgrounds([
    { name: 'lightGray', value: '#f4f4f4', default: true },
    { name: 'white', value: '#ffffff' },
    { name: 'gray', value: '#333'}
  ])
)

const callback = () => {
  console.log('callback')
}

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

/**
 * 
 * KButton
 * 
 */

storiesOf('KButton', module)
  .addDecorator(withKnobs)
  .add('normal button', withNotes('this is a normal button, which without any attributions')(() => <KButton onClick={action('clicked')}>Normal Button</KButton>
  ))
  .add('hover button', withNotes('this is a hover button, which "hover" any attributions')(() => <KButton hover onClick={action('clicked')}>Hover Button</KButton>))
  .add('primary button', () => <KButton primary onClick={action('clicked')}>Primary Button</KButton>)
  .add('custom height button', () => <KButton primary height="24px" onClick={action('clicked')}>Normal Button</KButton>)
  .add('full width button', () => <KButton primary full onClick={action('clicked')}>Normal Button</KButton>)
  .add('Knobs button', () => <KButton primary disabled={boolean('Disabled', false)} onClick={action('clicked')}>{text('Label', 'Knobs Button')}</KButton>)
  .add('disabled button', () => <KButton disabled onClick={action('clicked')}>Disabled Button</KButton>)
  .add('gradient button', () => <KButton gradient onClick={action('clicked')}>Gradient Button</KButton>)


/**
 * 
 * KTopbar
 * 
 */

storiesOf('KTopbar', module)
  .add('fixed topbar', () => <KTopbar title="这是一个标题"></KTopbar>)
  .add('with custom bgcolor & color topbar', () => <KTopbar bgcolor="#333" color="#fff" title="这是一个标题"></KTopbar>)
  .add('with default back topbar', () => <KTopbar back title="这是一个标题"></KTopbar>)
  .add('with custom backIcon topbar', () => <KTopbar back icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAsCAMAAAAQPRtoAAAAPFBMVEVHcEz///////////////////////////////////////////////////////////////////////////+PybD1AAAAE3RSTlMAIzYV2QNDeoEpC1aWifWp4sJzXjMh/AAAAE1JREFUSMdjYBgFQxCw8TORqINTWICJVB0sJNvBwjpi7RihOtiEBUlNvOzCQgyk62EnWQ/HqJ5RPWA9vFyk6uHhYyNVCyM382jFNBAAADPFA/r1atLtAAAAAElFTkSuQmCC" title="这是一个标题"></KTopbar>)
  .add('with custom back event topbar', () => <KTopbar back callback={callback} title="这是一个标题"></KTopbar>)
  .add('with slot element topbar', () => (
    <KTopbar back callback={callback} title="这是一个标题">
      <span onClick={callback} style={{
        background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAMAAABhTZc9AAABNVBMVEVHcEz0lB30lB30lBz0lB30lB30lB30lB30lB30lB30lB30lB30lB30lB30lB30lB30lBz0lB30lB30lB30lB30lB30lB30lB30lB30lB30lB30lB30lB30lB30lB30lB30lB30lB30lB30lBz0lB30lB30lB30lB30lB30lB30lB30lB30lB30lB30lB30lB30lB30lB30lB30lB30lB30lB70khf0jQz0kxr0jhD0lR70kBT0kxz0nC/z///z+//0lSD0min0iwnz9/z0pUP0sFr0yZL0q0/0oDb09PDz4MX0zJn0vXn02LT0t2vz7N/0vHT0oTv0tWfz9Pb0uW70zp30hAHz8OX0oz/02br0iQLzmCT0xIj01a/zxoz0xIr00qf0jQ7z8O30mCXzoz3zwYPz7uhntceVAAAANHRSTlMA7x/7BtiK9Cre66v4dQkO5r9R4Z1mQBg7LKjMuoHPSALUtsRdsDaSerxtJJuFh3ajy7BUkD0IaQAAAexJREFUGBldwIVa21AYBuC/mlSF4sPdN+D7T06SuiveIg+Ddnb/l7DGOsZLnqA6N5sJZUOZkzk1SJ+oXw+zvjiD477sSuKYPlqY20rDxRDpi50UTanhCDzMugkOHfjJpc5iiqUpn8oCSthPtoV9TLHUzbvXW81AIJEiSyIKD3PFvLpulDUDiMzQxF4GHkO+yN518UaYDPCsnygVVuBgQ7yU3x4Lj01dMIDsTpD2zuFgqVdag3ah+tzSYTtZoqM0XELUvleL1ftuWWdYtnfomw82Fka9Uyy2qz9uSibDEjqjTYYtN77tFIr399XrZk4wLNFl8sGR02ud/p9CodppCQkLK4ekwMbCqHfzd/12sf/ThEPJkA82Y5zv9YbD/KjdgAlHdJdCDItRqTXq2lD0Rk0p4IjsU0yBRWr1br5Sfm3UdAnX+RGtpmEx5cOb1uo2fmkCnq11molggvX8w8Pt4HdLFzm4lNUF8scCAFh7eh+83+THZonh2l7cIJoJYaJSf+7flTRRYriURJKIkmEFwPhqdDXWUIKHYypZlpbjyOWatbFuMDzxtXmybSyuACyFMPDPl/UkOYKLy4CQYHg4Np+kKfVgOwCG53x1iT5Kzp9ubUYDQCC6uRJeT9H/NvyXZ7trkcjaxenlcZBcfwGHhYryUOlgZQAAAABJRU5ErkJggg==) no-repeat center center",
        backgroundSize: 'contain',
        width: '26px',
        height: '26px',
        position: 'absolute',
        top: '9px',
        right: '10px'
        }}></span>
    </KTopbar>
  ))


/**
 * 
 * KTabs
 * 
 */
const tabsData = [
  {id: 1, title: 'Home', icon: 'https://jkxg.tigonetwork.com/img/demo/icon1.png', link: '/home'},
  {id: 1, title: 'Post', icon: 'https://jkxg.tigonetwork.com/img/demo/icon2.png', link: '/post'},
  {id: 1, title: 'About', icon: 'https://jkxg.tigonetwork.com/img/demo/icon3.png', link: '/about'},
  {id: 1, title: 'My', icon: 'https://jkxg.tigonetwork.com/img/demo/icon4.png', link: '/my'}
]

storiesOf('KTabs', module)
  .add('icon tabs', () => <KTabs data={tabsData}></KTabs>)
  .add('icon tabs with current', () => <KTabs current="/about" data={tabsData}></KTabs>)
  .add('icon tabs with custom color', () => <KTabs current="/home" acolor="#d33" color="#0a8acd" bgcolor="#333" data={tabsData}></KTabs>)


/**
 * 
 * KListMenu
 * 
 */
const listMenuData = [
  {id: 1, title: '我的档案', icon: 'https://jkxg.tigonetwork.com/img/member/icon/my_icon_1.png', link: '/profile', group: 1},
  {id: 2, title: '我的订单', icon: 'https://jkxg.tigonetwork.com/img/member/icon/my_icon_9.png', link: '/order', group: 1},
  {id: 3, title: '我的卡券', icon: 'https://jkxg.tigonetwork.com/img/member/icon/my_icon_2.png', link: '/card', group: 1},
  {id: 4, title: '我的服务', icon: 'https://jkxg.tigonetwork.com/img/member/icon/my_icon_3.png', link: '/service', group: 2},
  {id: 5, title: '关于我们', icon: 'https://jkxg.tigonetwork.com/img/member/icon/my_icon_7.png', link: '/about', group: 2},
  {id: 6, title: '反馈', icon: 'https://jkxg.tigonetwork.com/img/member/icon/my_icon_8.png', link: '/feedback', group: 2},
  {id: 7, title: '帮助', icon: 'https://jkxg.tigonetwork.com/img/member/icon/my_icon_10.png', link: '/help', group: 2},
  {id: 8, title: '设置', icon: 'https://jkxg.tigonetwork.com/img/member/icon/my_icon_11.png', link: '/config', group: 2}
]

storiesOf('KListMenu', module)
  .add('listmenu', () => <KListMenu data={listMenuData}></KListMenu>)







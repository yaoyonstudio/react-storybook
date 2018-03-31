import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs/react';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import { Viewport, withViewport } from '@storybook/addon-viewport';
import backgrounds from '@storybook/addon-backgrounds';

import { KButton, KTopbar, KTabs, KListMenu, KIconList, KUpload, KListItem, KCard, KPagination } from '../keact'

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

// eslint-disable-next-line react/prop-types
const Panel = ({ children }) => <div className="panel">{children}</div>;

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
  {id: 6, title: '反馈', icon: 'https://jkxg.tigonetwork.com/img/member/icon/my_icon_8.png', link: '/feedback', group: 2},
  {id: 1, title: '我的档案', icon: 'https://jkxg.tigonetwork.com/img/member/icon/my_icon_1.png', link: '/profile', group: 1},
  {id: 5, title: '关于我们', icon: 'https://jkxg.tigonetwork.com/img/member/icon/my_icon_7.png', link: '/about', group: 2},
  {id: 2, title: '我的订单', icon: 'https://jkxg.tigonetwork.com/img/member/icon/my_icon_9.png', link: '/order', group: 1},
  {id: 3, title: '我的卡券', icon: 'https://jkxg.tigonetwork.com/img/member/icon/my_icon_2.png', link: '/card', group: 1},
  {id: 4, title: '我的服务', icon: 'https://jkxg.tigonetwork.com/img/member/icon/my_icon_3.png', link: '/service', group: 2},
  {id: 7, title: '帮助', icon: 'https://jkxg.tigonetwork.com/img/member/icon/my_icon_10.png', link: '/help', group: 2},
  {id: 8, title: '设置', icon: 'https://jkxg.tigonetwork.com/img/member/icon/my_icon_11.png', link: '/config', group: 2}
]

storiesOf('KListMenu', module)
  .add('listmenu', () => <KListMenu data={listMenuData}></KListMenu>)
  .add('listmenu with arrow', () => <KListMenu arrow data={listMenuData}></KListMenu>)
  .add('listmenu with custom arrow', () => <KListMenu arrow icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAWCAMAAADHE10VAAAAgVBMVEVHcEz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTz/iTwgGspcAAAAKnRSTlMA3bpnDwYa/gHiI/r0odApMI1FbvAU1+n3toWpm8sKwYN9YUw2PVxVvJPqw8xrAAAAhElEQVQYGUXARQKDQBBE0SLIYDGcuMu//wGzGOg8bYex1V8JXS5TA/1G5lVAWclUDRQ3mU0GXGWSDjikmkVnYDxpFu+BY6tZugWCXKZ2EMiEDjJN0h2QreXFS2CVyIsWwCKSl6yAZSxvnQGXVN6zARdq8i5guGsSOugfmpUQ5DJf92llftr4DYHC23YXAAAAAElFTkSuQmCC
" data={listMenuData}></KListMenu>)


/**
 * 
 * KIconList
 * 
 */
const iconListData = [
  {id: 1, title: '项目一', icon: 'https://jkxg.tigonetwork.com/img/member/profile_icon_1.png', link: '/'},
  {id: 2, title: '项目二', icon: 'https://jkxg.tigonetwork.com/img/member/profile_icon_2.png', link: '/'},
  {id: 3, title: '项目三', icon: 'https://jkxg.tigonetwork.com/img/member/profile_icon_3.png', link: '/'},
  {id: 4, title: '项目四', icon: 'https://jkxg.tigonetwork.com/img/member/profile_icon_4.png', link: '/'},
  {id: 5, title: '项目五', icon: 'https://jkxg.tigonetwork.com/img/member/profile_icon_5.png', link: '/'},
  {id: 6, title: '项目六', icon: 'https://jkxg.tigonetwork.com/img/member/profile_icon_6.png', link: '/'}
]

storiesOf('KIconList', module)
  .add('icon list', () => <KIconList data={iconListData}></KIconList>)
  .add('wrap icon list', () => <KIconList column="3" data={iconListData}></KIconList>)


/**
 * 
 * KUpload
 * 
 */
storiesOf('KUpload', module)
  .add('upload component', () => <KUpload></KUpload>)
  .add('custom upload component', () => <KUpload text="上传文件" width="200px" height="100px" bgcolor="#d33" bdcolor="#0a8acd" color="#fff" icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEVHcEzn5+fm5ubl5eXq6urm5ubl5eXv7+/m5ubn5+fm5ubn5+fm5ubm5ubm5ubn5+fm5ubm5uaiMGo4AAAAEXRSTlMAYKCAMMDQEPBA4CBQkLB/cMOJW+4AAARCSURBVHja7VtJkuQgDGQ1i8E2///sHKabzeBCLBXREdbdpURISUpQCL322mt/0nZ1nT+m1P5d38LYzaUmuTXiSyu/cufeDrweA656/29ELQ091u6j8XUQsHRNxtekJOOu1eS1wP/lIMZnZ6M4CuvknFBKD84LsZFsbvjz5ONUJWvccc4M0sz0L7NyL0fpSmHiaf5N7F/Sh+1VZAUCFv8o/ZBdSk/Pgzj+LRVOIwQzamGP/F9QxNsEABs8ohECOuzfhtW0x3MPqEfTwPT4R0jISZsgdJd/hNSkWqTdFUWnVMLu1wHnVT4jDz2v2QHwAyHwv6HFCHo8HoAukeUrYRsOABnMYDXKQZ0ST/gU1vzsEexyLAAIpSpqs6yTBLvZ1OQ6TV+iIwUHyPQu4+W5g78e4FJbkuxnYxS8DhqgUlaU7NqAioiPnCWVTo60LIqDVFCtm+G8iEE3JPYoiySjDHpIaNfgt2+aticS1DXgGSnw2NzjthwkaKZdshmBnSZr602uaSkCjCZb1Oc96rxtXhHUNfuD0MFuGQAkAoKK1Iv77BUTpwhBMQ3OOFWXzJsCAl1goHTSsWbgFTon+mkWtWjop2qinbjvAAiKlT77d2wRAH9Sy7qKlAc1y/yHTcCV9ROD1tov1x538nHOkfU3ECrXfNFgRTP0BdsyzaXXDXorZ3O6B2G6RtB3TCR1ELiJo2/ZFrMt6RwGzSAjkwxj4OmviGVDdUDrzNhiuHsqvEeqQHd3onhgLh2yTnXPc37ZowuB9ABIXR+0+e8bZHEPQHdmgIhajY7y8QBEZysuEvUER+ABmM4UzO6pSDcA2zcQvckX0puEvGsifJdP0BxyOQAFJ4DMQGXMPGzeMQvA5ekLBIHxADqGEax2awwgpHAYwQGw6k0+gBIPjxkMQDy8JJA7sAgcAgMIBIT9VjAMJSTlbkwsoASEY/BQBBH7AMswucmJokdhqk4HrxY0lLQJ8cXbRyCUqKIvr1uT0lKAHOUAAgLTXgNH9JsSIud/djoB4LPz81L2hLog14MmFSBpBf0iONoTScTh4M3J4/kmK+EfhlDNASApsbeQiDji7jHnEKabHrAcKXULWAExdTtSXTQSpnvzOeQd9t9Rdk3VA5WrvLbA4rYLwHaPOO+VVT0ASGEGxgZlFQRAmAQcRVR4MYCz/MwnOuLtUgCkdmEQXbQeYhmAeBJsa6eccxKvASDOuJOqTu6cc0633rcDAOzJHL4gW9JWzx2nYrMA7Cp/ilyUTeL5za4+QQDOpye4lVHkBwSlU7YK4PENbF02kmcEqhkAfnz+/HROPT4eps0A7EP4n088QRYDsB/r6+EJsxndAtk2h99tOYM5IAm3wef37Dpu/yEoBa8KQKSboPOnyI3SRQVjYCJiv5+uvP6Y/dDhBfACeAG8AF4AYNvm/ZOgz+iSF1cQO5rna6sMW6vQa6+99rftH7a+zQyemOznAAAAAElFTkSuQmCC
"></KUpload>)


/**
 * 
 * KListItem
 * 
 */
const listItemData = {
  id: 1,
  title: '于丹：生命来来往往，来日并不方长',
  excerpt: '懂得珍惜，并不是与生俱来的能力。在长大的过程中，总有些猝不及防的变故让人扼腕喟叹：有时候，没有赶紧完成的心愿，一转眼就来不及了。',
  thumb: 'https://jkxg.tigonetwork.com/img/demo/thumb1.png',
  author: '佚名',
  source: '网络',
  views: 99,
  comments: 893,
  tag: ['人生', '感悟'],
  date: '2016-03-12'
}
storiesOf('KListItem', module)
  .addDecorator(withKnobs)
  .add('left img list item', () => <KListItem data={listItemData}></KListItem>)
  .add('right img list item', () => <KListItem reverse data={listItemData}></KListItem>)
  .add('no broder img list item', () => <KListItem noborder data={listItemData}></KListItem>)
  .add('round img list item', () => <KListItem borderRadius="6px" data={listItemData}></KListItem>)
  .add('custom list item', () => <KListItem data={object('data', listItemData)}></KListItem>)


/**
 * 
 * KCard
 * 
 */
const cardData = {
  thumb: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522485055877&di=29e5f84d860d3698354b7f2ca6129a66&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F9922720e0cf3d7ca7533225ef91fbe096a63a9d4.jpg',
  title: '内心没有方向的人，去哪里都是逃离',
  excerpt: '对于自己内心没有方向的人，去哪里都是逃离，而对于生命有方向的人，走向哪里都是追寻。',
  author: 'Ken Yao',
  wechat:'@ken_yao',
  avatar: 'http://up.qqya.com/allimg/201710-t/17-101804_132321.jpg'
}
storiesOf('KCard', module)
  .add('card', () => <Panel><KCard data={cardData}></KCard></Panel>)


/**
 * 
 * KPagination
 * 
 */
const pageInfo = {
  page: 1,
  pagesize: 10,
  showpages: 5,
  count: 63,
  prev: '上一页',
  next: '下一页'
}
const hrefTo = (e) => {
  console.log(parseInt(e.target.getAttribute('page'), 10))
  pageInfo.page = parseInt(e.target.getAttribute('page'), 10)
}
storiesOf('KPagination', module)
  .addDecorator(withKnobs)
  .add('normal pagination', () => <Panel><KPagination href={hrefTo} url="/post?page=" page={number('page', pageInfo.page)} pagesize={number('pagesize', pageInfo.pagesize)} showpages={number('showpages', pageInfo.showpages)} count={number('count', pageInfo.count)}></KPagination></Panel>)
  .add('custom pagination', () => <Panel><KPagination href={hrefTo} url="/post?page=" page={number('page', pageInfo.page)} pagesize={number('pagesize', pageInfo.pagesize)} showpages={number('showpages', pageInfo.showpages)} count={number('count', pageInfo.count)} prev={text('prev', pageInfo.prev)} next={text('next', pageInfo.next)}></KPagination></Panel>)


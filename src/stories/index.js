import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withViewport, Viewport } from '@storybook/addon-viewport';

console.log(withViewport)
console.log(Viewport)
console.log(addDecorator)

// import { linkTo } from '@storybook/addon-links';
// import { Button, Welcome } from '@storybook/react/demo';

import { KButton, KTopbar } from '../keact'


// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Here's My Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('KButton', module)
  .add('primary', () => <KButton primary onClick={action('clicked')}>My Button</KButton>)
  .add('border', () => <KButton onClick={action('clicked')}>My Button</KButton>)
  .add('gradient', () => <KButton gradient onClick={action('clicked')}>My Gradient Button</KButton>)

storiesOf('KTopbar', module)
  // .addDecorator(withViewport('iphone5'))
  .add('no back icon', () => <KTopbar>顶栏标题</KTopbar>)
  //   <Viewport name="iphone6p">
  //     <KTopbar>顶栏标题</KTopbar>)
  //   </Viewport>
  // ))

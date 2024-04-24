import React, { PureComponent } from 'react';
import News from './News';

export default class Sports extends PureComponent {
  render() {
    return (
        <>
        <News pageSize={20} country="in" category="sports"/>
       </>
    )
  }
}

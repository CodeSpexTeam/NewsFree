import React, { PureComponent } from 'react';
import News from './News';

export default class Health extends PureComponent {
  render() {
    return (
        <>
        <News pageSize={20} country="in" category="health"/>
       </>
    )
  }
}

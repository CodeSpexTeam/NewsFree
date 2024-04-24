import React, { PureComponent } from 'react';
import News from './News';

export default class Entertainment extends PureComponent {
  render() {
    return (
        <>
        <News pageSize={20} country="in" category="entertainment"/>
       </>
    )
  }
}

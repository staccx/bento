import React from 'react'
import { List, Odometer, SplitListItem, Wrapper } from '@staccx/base'
import { inject, observer } from 'mobx-react'

@inject('apiStore') @observer
class DataTest extends React.Component {
  render () {
    const {apiStore} = this.props
    const {forecastedAnnualReturn} = apiStore
    return (
      <Wrapper>
        <List>
          <SplitListItem>
            {`Forecasted annual return`}
            {<Odometer number={forecastedAnnualReturn || 0} size={32}/>}
          </SplitListItem>
        </List>
      </Wrapper>
    )
  }
}

export default DataTest

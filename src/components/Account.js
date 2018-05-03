import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import { color, font } from '@staccx/theme'
import { Box } from '@staccx/base'

@inject('account')
@observer
class Account extends React.Component {
  static defaultProps = {
    title: 'På konto'
  }

  static propTypes = {
    account: PropTypes.object.isRequired,
    title: PropTypes.string
  }

  render () {
    const {account, title} = this.props
    const {earned, selectedAccount} = account
    if (!selectedAccount) {
      return null
    }
    const {availableBalance} = selectedAccount
    return (
      <Box variant="accountBox">
        <Title>{title}</Title>
        <Balance>{availableBalance}</Balance>
        <Earned>{earned}</Earned>
      </Box>
    )
  }
}

const Title = styled.h3`
  font-size: ${font.input};
  font-weight: bold;
  color: ${color.wcag};
`

const Balance = styled.div`
  font-size: ${font.h1};
  font-weight: bold;
  color: ${color.primary};
`

const Earned = styled.div`
  font-size: ${font.input};
  font-weight: bold;
  color: ${color.secondary};
`

export default Account

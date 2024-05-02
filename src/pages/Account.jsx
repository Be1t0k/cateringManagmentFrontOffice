import React from 'react'
import Subscriptions from '../components/Subscriptions/Subscriptions'
import Savings from '../components/Savings/Savings'
const Account = () => {
  
  return (
    <div className="content-grid-two">
            <div className="grid-two-item">
              <div className="subgrid-two">
                <Subscriptions />
                <Savings />
              </div>
            </div>
        </div>
  )
}

export default Account
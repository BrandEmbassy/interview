import React from 'react'
import Item from '../Component/Detail/Item'

class Detail extends React.Component {
  render() {
    return (
      <div className="detail">
        <Item {...this.props} />
      </div>
    )
  }
}

export default Detail

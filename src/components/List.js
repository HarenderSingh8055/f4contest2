import React from 'react'
import './List.css'

const List = ({rowData}) => {
  return (
    <tr>
        <td> <img src={rowData.image} alt="" /></td>
        <td>{rowData.name}</td>
        <td>{rowData.symbol.toUpperCase()}</td>
        <td>${rowData.current_price}</td>
        <td>${rowData.total_volume}</td>
        <td style={{color: rowData.price_change_percentage_24h<0?"red":"green"}}>{rowData.price_change_percentage_24h}%</td>
        <td>Mkt Cap : {rowData.market_cap}</td>

    </tr>
  )
}

export default List
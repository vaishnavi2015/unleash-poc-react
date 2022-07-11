import React from 'react'
import './widgetlarge.css'
import personalImage from '../../images/Photo.jpg'
import { findTextColorCSS } from '../../Utils'
import { useFlag, useVariant } from '@unleash/proxy-client-react'
import { useParams } from 'react-router-dom'
export default function WidgetLarge() {
  const params = useParams()
  const Button=({type}) =>  {
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }
  var variant = useVariant('lloydsABTestingForBrand')  
  return (
    // <div className={'widgetlarge ' + findTextColorCSS(variant)}>
    <div className='widgetlarge'>
      <span className="widgetLGTitle">All Transaction</span>
      <table className="widgetLGTable">
        <tr className="widgetLGTr">
          <th className="widgetLgTh">DESCRIPTION</th>
          <th className="widgetLgTh">TYPE</th>
          <th className="widgetLgTh">IN(£)</th>
          <th className="widgetLgTh">OUT(£)</th>
          <th className="widgetLgTh">BALANCE(£)</th>
        </tr>
        <tr className="widgetLGTr">
         <td className="widgetLgUser">
           <div>15 Jun 22</div>
           <div className="widgetLgName">FOOD WRAP SUBWAY</div>
         </td>
         <td className="widgetLgDate">DEB</td>
         <td></td>
         <td>185.06</td>
         <td>22.10</td>
        </tr>
        <tr className="widgetLGTr">
         <td className="widgetLgUser">
           <div>14 Jun 22</div>
           <div className="widgetLgName">D John</div>
         </td>
         <td className="widgetLgDate">KJL</td>
         <td>133.00</td>
         <td></td>
         <td>142.98</td>
        </tr>
      </table>
    </div>
  )
}

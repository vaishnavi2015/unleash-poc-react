import React, { useEffect } from 'react'
import './featuredinfo.css'

import { ArrowDownward, ArrowUpward, ArrowForwardIos } from '@material-ui/icons'
import { useParams } from 'react-router-dom'
import { useFlag, useVariant } from '@unleash/proxy-client-react'
import { findBGColorCSS, findTextColorCSS } from '../../../Utils'

export default function FeaturedInfo() {
  const params = useParams()
  const userId = params.userId
  
  var variant = useVariant('lloydsABTestingForBrand') 
  return (
    <div className={'featured'}>
      <div className="featuredItem">
          <div className="featuredTitle">
            <h3 className="featuredTitle1">Renting?</h3>
          </div>
          <div className="featuredMoneyContainer">
              <div className="featuredMoney">
                Protect your things with Flexible Contents Insurance. Monthly cover you can manager online 24/7. Make changes or cancel anytime without fees.
              </div>
              {/* <span className="featuredMoneyRate">
                  -11.4 <ArrowDownward className='featuredIcon negative'/>
                </span> */}
          </div>
          <div align='center'>
            <button className={'featuredQuoteButton '+findBGColorCSS(variant)}><div className='featuredQuoteButtonText'>Get a quote</div><ArrowForwardIos className='featureInfoForwardArrow'/></button>
          </div>
      </div>
      <div className="featuredItem2">
          <div className="featuredQuickTransfer">Make a quick Transfer</div>
            <div className="moneyTransferText">Transfer money between your accounts held with Lloyds Bank</div>
              <div class="needsValidation">
                  <input type="text" className="quick-form-control input-form-control" placeholder="£" name="amount"/>
                  <div className='quick-form-Text'>From</div>
                  <select type="select" className="quick-form-control input-form-control" placeholder="From Ac" name="fromAccount">
                      <option value="pleaseSelect">Please select</option>
                      <option value="87392221">87392221</option>
                      <option value="38737321">87392221</option>
                  </select>
                  <div className='quick-form-Text'>To</div>
                  <select type="select" className="quick-form-control input-form-control" placeholder="From Ac" name="toAccount">
                      <option value="pleaseSelect">Please select</option>
                      <option value="87392221">87392221</option>
                      <option value="38737321">87392221</option>
                  </select>
                </div>
          <div className="featuredSubInfo">For example, £1.23</div>
          <button className={'featuredTransferButton '+findBGColorCSS(variant)}>Transfer</button>
      </div>
      {/* <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2,225</span>
              <span className="featuredMoneyRate">
                  +2.4 <ArrowUpward className='featuredIcon positive'/>
                </span>
          </div>
          <span className={"featuredSub " + findTextColorCSS(variant)}>Compared to Last Month</span>
      </div> */}
    </div>
  )
}

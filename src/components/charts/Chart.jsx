import './chart.css'
import React from 'react';
import { 
  LineChart, 
  Line,   
  XAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { useFlag, useVariant } from '@unleash/proxy-client-react';
import { findBGColorCSS, findBorderOnPanel, findColorCode, findTextColorCSS } from '../../Utils';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
import { GridExpandMoreIcon } from '@mui/x-data-grid';
import AccordionCustom from '../accordion/AccordionCustom';
import { accordionChart, accordionChartForHalifax, morgageAccordionHalifax, morgageAccordionLloyd } from '../../dummyData';
import { ArrowForwardIos } from '@material-ui/icons';
import FeaturedInfo from '../pages/featuredinfo/FeaturedInfo';

export default function Chart({title, data, dataKey, grid}) {
  const params = useParams();
  var variant = useVariant('lloydsABTestingForBrand') 
  var creditCardAccordion = variant.name === 'BlueVariant' ? accordionChartForHalifax : accordionChart
  var mortgageAccordion = variant.name === 'BlueVariant' ? morgageAccordionHalifax : morgageAccordionLloyd
  const customActivationStrategy = useFlag('mortgageReleaseCustomFeature')
  const killSwitchFeatureFlag = useFlag('languageSettingFeatureFlag')

  return (
    <div>
      {variant.name==='GreenVariant' && <FeaturedInfo/>}
      <div className='chart'>
          <div className={'creditCardAccount '+findBorderOnPanel(variant)}>
            <div className="creditCardAccountPane">
              <div className="creditCardAccountLeftPane">
                <div className="creditCardTitle">
                  <div className={"creditCardTitleText "+findTextColorCSS(variant)}>
                    cash isa saver<span className="accountNumberSortCode">&nbsp;&nbsp;11-00-88&nbsp;&nbsp;13987969</span>
                  </div>
                  <div className="creditCardTitleAmount">
                    £ 100.00<span className="accountCurrentBalanceText">Current Balance</span>
                  </div>
                  <div className='accountRemainingAlllowance'>
                    <span className='accountRemainingAlllowanceText'>£ 20,000.00</span> <span className="accountCurrentBalanceText">Remaining Allowance</span>
                  </div>
                </div>
              </div>
              <div className="creditCardAccountRightPane">
                <AccordionCustom accordions={creditCardAccordion}/>
              </div>
            </div>
          </div>

          {customActivationStrategy && <div className={'mortgageAccount '+findBorderOnPanel(variant)}>
            <div className="mortgageAccountPane">
              <div className="mortgageAccountLeftPane">
                <div className="mortgageTitle">
                  <div className={"mortgageTitleText "+findTextColorCSS(variant)}>
                    mortgage<span className="accountNumberSortCode">&nbsp;&nbsp;11-00-88&nbsp;&nbsp;13987969</span>
                  </div>
                  <div className="mortgageTitleAmount">
                    £ 420,000.00<span className="accountCurrentBalanceText">Current Balance</span>
                  </div>
                  <div className='mortgageRemainingAlllowance'>
                    <span className="accountCurrentBalanceText">More than one mortgage? Combine Them. <a className={findTextColorCSS(variant)} href="#">Find out more</a></span>
                  </div>
                </div>
              </div>
              <div className="mortgageAccountRightPane">
                <AccordionCustom accordions={mortgageAccordion}/>
              </div>
            </div>
          </div>}
          {killSwitchFeatureFlag && <div className={'personalLoanOffer '+findBorderOnPanel(variant)}>
            <div className='loanAccount'>
              <div className={"loanTitleText "+findTextColorCSS(variant)}>
                your personalised loan offer
              </div>
              <div className="loanAccountPane">
                <div className="loanLeftPane">
                  <div className='c-decorated-header loanFeature1'>
                    <h3><span>Representative APR</span></h3>
                    <div className='c-decorated-header_link-view-more'>
                        9.60% APR
                    </div>
                  </div>

                  <div className='c-decorated-header loanFeature2'>
                    <h3><span>Loan amount</span></h3>
                    <div className='c-decorated-header_link-view-more'>
                        £16,500.00
                    </div>
                  </div>
                  <div className='c-decorated-header loanFeature3'>
                    <h3><span>Loan terms</span></h3>
                    <div class='c-decorated-header_link-view-more'>
                        6 months
                    </div>
                  </div>
                  <div className='c-decorated-header loanFeature4'>
                    <h3><span>Monthly repayment</span></h3>
                    <div className='c-decorated-header_link-view-more'>
                        £629.79
                    </div>
                  </div>
                  <div className='c-decorated-header loanFeature5'>
                    <h3><span>Total repayment</span></h3>
                    <div className='c-decorated-header_link-view-more'>
                      £11,336.22
                    </div>
                  </div>
                  <div className='c-decorated-header loanFeature6'>
                    <h3><span>Annual interest rate (fixed)</span></h3>
                    <div className='c-decorated-header_link-view-more'>
                        8.60%
                    </div>
                  </div>
                  </div>
                  <div className="loanRightPane">
                    <button className={'loanApplyNowButton '+findBGColorCSS(variant)}>Apply Now</button>
                    <button className={'loanApplyTailorYourLoanButton '+findBGColorCSS(variant)}>Tailor your loan</button>
                    <div className={'findoutMore '+findTextColorCSS(variant)}><a href="" className={"findoutMoreText"}>Find out more</a><div className="findoutMoreIcon"><ArrowForwardIos className='featureInfoForwardArrow'/></div></div>
                  </div>
                </div>
            </div>
            <div className={"loanDialog"}>
                Account Subject to Status. You must me a UK Resident and aged 18 or over. "Figures are estimates and may be subject to change Lorem Ipsum dolor sit amet, consectetur adispicing elit. Nunc saplen magna."
            </div>
          </div>}
      </div>
      {variant.name==='BlueVariant' && <FeaturedInfo/>}
      
      {/* <div className='piChart'>
        <h3 className={"chartTitle " + findTextColorCSS(variant)}>{title}</h3>
        <ResponsiveContainer aspect={3/1}>
          <LineChart data={data}>
            <XAxis dataKey={'name'} stroke={findColorCode(variant)}></XAxis>
            <Line type={'monotone'} dataKey={dataKey} stroke={findColorCode(variant)}></Line>
            <Tooltip></Tooltip>
            {grid &&<CartesianGrid stroke={findColorCode(variant)} strokeDasharray='5 5'></CartesianGrid>}
          </LineChart>
        </ResponsiveContainer>
      </div> */}
    </div>
    
  )
}

{/* <div className='chart'>
      <div className='lineChart'>
        <h3 className={"chartTitle " + findTextColorCSS(variant)}>{title}</h3>
        <ResponsiveContainer aspect={3/1}>
          <LineChart data={data}>
            <XAxis dataKey={'name'} stroke={findColorCode(variant)}></XAxis>
            <Line type={'monotone'} dataKey={dataKey} stroke={findColorCode(variant)}></Line>
            <Tooltip></Tooltip>
            {grid &&<CartesianGrid stroke={findColorCode(variant)} strokeDasharray='5 5'></CartesianGrid>}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="piChart">
        <PIChart/>
      </div>
    </div> */}


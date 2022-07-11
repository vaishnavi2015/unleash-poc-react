import React from 'react'
import './widgetsmall.css'
import { findBGColorCSS, findColorCode } from '../../Utils'
import { useVariant } from '@unleash/proxy-client-react'
import { useParams } from 'react-router-dom'
import AccordionCustom from '../accordion/AccordionCustom'
import { accordionHelpNSupport } from '../../dummyData'


export default function WidgetSmall() {
  const params = useParams()
  var variant = useVariant('lloydsABTestingForBrand') 

  accordionHelpNSupport.forEach((element, index) => {
            element['textColor']=findColorCode(variant)
            element['iconColor']=findColorCode(variant)
    })
  
  return (
    // <div className={'widgetsmall ' + findTextColorCSS(variant)}>
    <div className='widgetsmall'>
      <div className={"widgetsmallTitle "+findBGColorCSS(variant)}>Help &amp; Support</div>
      <div className={"widgetsmallAccordion"}>
        <AccordionCustom accordions={accordionHelpNSupport}/>
      </div>
    </div>
  )
}

import './home.css'
import React, {useEffect} from 'react'
import FeaturedInfo from '../featuredinfo/FeaturedInfo'
import Chart from '../../charts/Chart'
import { userData } from '../../../dummyData'
import WidgetLarge from '../../widgetlarge/WidgetLarge'
import WidgetSmall from '../../widgetsmall/WidgetSmall'
import { useParams } from 'react-router-dom'
import {useUnleashContext, useFlag} from '@unleash/proxy-client-react';

export default function Home() {
  const params = useParams()
  const updateContext = useUnleashContext()
  const userId = params.username
  // console.log('userId=>', userId)
  useEffect(() => {
    // context is updated with userId
    updateContext({ userId })
  }, [])
  
  const userStatisticsPermissionFlag = useFlag('permission-test-feature-flag')
  const killSwitchFeatureFlag = useFlag('killswitch-feature-flag')
  
  return (
      <div className='home'>
          <div>
            {killSwitchFeatureFlag&&<Chart data={userData} title='User Spending' grid dataKey={'Active User'}/>
            }
          </div>
          <div className='homeWidgets'>
            <WidgetSmall/>
            <WidgetLarge/>
          </div>
      </div>
  )
}

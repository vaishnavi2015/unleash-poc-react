import React from 'react'
import './sidebar.css'
import {
    LineStyle, 
    Timeline, 
    TrendingUp, 
    Report, 
    WorkOutline,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    Message,
    Feedback,
    AssignmentLate,
    Close
} from '@material-ui/icons';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import FeatureFlagService from '../../api/FeatureFlagService';
import { useFlag, useVariant } from '@unleash/proxy-client-react';
import { findBGColorCSS, findColorCode } from '../../Utils'
import AccordionCustom from '../accordion/AccordionCustom';
import { accordionProductServices } from '../../dummyData';

export default function Sidebar() {
    const params = useParams()
    const [state, setState] = React.useState({ num: 0 })
    const [staffReleaseFeatureFlag, setStaffReleaseFeatureFlag] = useState(false)
    // const staffReleaseFeatureFlag = useFlag('release-feature-flag')

    
    var variant = useVariant('lloydsABTestingForBrand') 
    accordionProductServices.forEach((element, index) => {
            element['tabColor']=findColorCode(variant)
            element['iconColor']= (variant.name==='BlueVariant') ? 'white' : '#74a61a'
    })
    useEffect(() => {
        // context is updated with userId
        // updateContext({ userId })
        setStaffReleaseFeatureFlag(false)
        
        // refreshFeatureFlags()
        // const timer = setTimeout(() => setState({ num: state.num + 1 }), 1000000)
        // return () => clearTimeout(timer)
    }, [])

    const flag = useFlag('homeInsuranceFeatureFlag')
    var accordion = [...accordionProductServices];
    if(!flag) {
        accordion.splice(4, 1);
    }
    const customActivationStrategy = useFlag('mortgageReleaseCustomFeature')
    if(!customActivationStrategy) {
        accordion.splice(3, 1);
    }
    
    
    const refreshFeatureFlags = () => {
        FeatureFlagService.retrieveEnabledFeatureFlags()
            .then(
                response => {
                    for (var i = 0; i < response.data.toggles.length; i++) {
                        if(response.data.toggles[i].name === 'release-feature-flag'){
                            setStaffReleaseFeatureFlag(true)
                            break;
                        } 
                    }
                }
            )
    }

  return (
    <div className={'sidebar'}>
        {/* <div className="sidebarWrapper"> */}
            <div className="sidebarMenu">
                {variant.name==='BlueVariant' && <div className="workNumberChangedHalifax">
                    <div className="closeIcon">
                        <Close className="closeIcon"/>
                    </div>
                    <div class="workNumberWarningHalifax">
                        WELCOME TO YOUR NEW LOOK ONLINE BANKING.
                    </div>
                    <div className='sidebarPhoneHalifaxChangeText'><button className={'loanFindoutHalifaxButton'}>Find out how to</button></div>
                    
                </div>}
                <div className="sidebarProductServices">
                    <div className={"sidebarProductTitle "+findBGColorCSS(variant)}>
                        OUR PRODUCTS AND SERVICES
                        <div className='sideBarUnderline'></div>
                    </div>
                    <AccordionCustom accordions={accordion}/>
                </div> 
                {variant.name==='GreenVariant' && <div className="workNumberChangedPopup">
                    <div class="workNumberWarningSection">
                        <div className='sidebarWarningIcon'>
                            <AssignmentLate style={{ backgroundColor: '#fff', marginTop: '10px' }}/>
                        </div>
                        <div className='sidebarWarningText'>
                            Your work number has changed
                        </div>
                    </div>
                    <div className='sidebarPhoneChangeText'>Your work number was changed to +448228288223 on 30th Jun 22 at 07:32 AM</div>
                    <div className='sidebarRecognizeSection'>
                        <div className='sidebarRecognizeSection1'>Don't recognise this?</div>
                        <div className='sidebarRecognizeSection2'>Call us immediately on:</div>
                        <div className='sidebarRecognizeSection3'>0345 300 0116 or</div>
                        <div className='sidebarRecognizeSection4'>+44 (0)1733 232030 from abroad</div>
                    </div>
                </div>}
                
                             
            </div>
            <div className="sidebarSpaceWrapper">

            </div>
            {/* <div className="sidebarMenu">
                <div className="sidebarTitle">Quick Menu</div>
                <ul className='sidebarList'>
                    <Link to={`/loggedin/${params.username}/users`} className='link'>
                        <li className='sidebarListItem active'>
                            <PermIdentity className='sidebarIcon'/>
                            Users
                        </li>
                    </Link>
                    <Link to={`/loggedin/${params.username}/products`} className='link'>
                        <li className='sidebarListItem'>
                            <Storefront/>
                            Products
                        </li>
                    </Link>
                    <li className='sidebarListItem'>
                        <AttachMoney/>
                        Transactions
                    </li>
                    <li className='sidebarListItem'>
                        <BarChart/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <div className="sidebarTitle">Notifications</div>
                <ul className='sidebarList'>
                    <li className='sidebarListItem active'>
                        <PermIdentity className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className='sidebarListItem'>
                        <Feedback/>
                        Feedback
                    </li>
                    <li className='sidebarListItem'>
                        <Message/>
                        Messages
                    </li>
                </ul>
            </div>
            {flag && <div className="sidebarMenu">
                <div className="sidebarTitle">Staff</div>
                <ul className='sidebarList'>
                    <li className='sidebarListItem active'>
                        <WorkOutline className='sidebarIcon'/>
                        Manage
                    </li>
                    <li className='sidebarListItem'>
                        <Timeline/>
                        Analytics
                    </li>
                    <li className='sidebarListItem'>
                        <Report/>
                        Reports
                    </li>
                </ul>
            </div>} */}
        {/* </div> */}
    </div>
  )
}

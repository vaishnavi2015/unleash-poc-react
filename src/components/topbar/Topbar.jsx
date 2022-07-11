import React, { useEffect, useState } from 'react'
import './topbar.css'
import personalPhoto from '../../images/Photo.jpg'
import lloydsLogo from '../../images/lloydlogo.png'
import halifaxLogo from '../../images/halifax.png'
import {NotificationsNone,Language, Settings, Edit, InsertEmoticon, ExitToApp, LocationOn, MailOutline, MobileFriendly} from '@material-ui/icons';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Stack from '@mui/material/Stack'
import {useNavigate, useParams} from 'react-router-dom'
import AuthenticationService from '../login/authentication/AuthenticationService';
import { useFlag, useUnleashContext, useVariant } from '@unleash/proxy-client-react'
import { findBGColorCSS, findBrandBasedOnVariant } from '../../Utils'
import { Avatar, makeStyles } from '@material-ui/core'
import { Password } from '@mui/icons-material'
import { userProfileData } from '../../dummyData'

export default function Topbar() {
  const updateContext = useUnleashContext()
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)
  const [staffReleaseFeatureFlag, setStaffReleaseFeatureFlag] = useState(false);
  const experimentFeatureFlag = useFlag('lloydsABTestingForBrand')
  const killSwitchFeatureFlag = useFlag('languageSettingFeatureFlag')
  
  const params = useParams()
  const userId = params.username
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  };

  const handleClose = (event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target)
    ) {
      return;
    }

    setOpen(false);
  };

  const logoutApp = (event)=>{
    handleClose(event)
    AuthenticationService.logout()
    navigate(`/`)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  useEffect(() => {
    updateContext({ userId })
  }, [])

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    setStaffReleaseFeatureFlag(true)
    if (prevOpen.current === true && open === false && anchorRef.current) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  const useStyles = makeStyles({
    customWidth: {
        '& div': {
            // this is just an example, you can use vw, etc.
            width: '250px',
        }
    }
  });

  var variant = useVariant('lloydsABTestingForBrand') 
  var userDetails = userProfileData[userId]
  if(!userDetails) {
    userDetails = {'email' : userId, 'image':'https://images.pexels.com/photos/12656616/pexels-photo-12656616.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130', 'mobile': '03839232472'}
  }

  return (
     <div className={'topbar ' + findBGColorCSS(variant)}>
      {staffReleaseFeatureFlag && <div className='topbarWrapper'>
        <div className='topLeft'>
            <img src={findBrandBasedOnVariant(variant) === 'lloyds' ? lloydsLogo : halifaxLogo} className='logo'></img>
        </div>
        <div className='topRight'>
            {killSwitchFeatureFlag&&<div className='topbarIconContainer'>
                <NotificationsNone/>
                <span className='topIconBag'>2</span>
            </div>}
            {killSwitchFeatureFlag&&<div className='topbarIconContainer'>
                <Language/>
                <span className='topIconBag'>2</span>
            </div>}
            {killSwitchFeatureFlag&&<div className='topbarIconContainer'>
                <Settings/>
            </div>}
              <Stack direction="row" spacing={2}>
                <div>
                  <img 
                    src={userDetails.image}
                    alt=""
                    className="topAvatar"
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    />
                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={open}
                              id="composition-menu"
                              aria-labelledby="composition-button"
                              onKeyDown={handleListKeyDown}
                              className='topBarMenuList'
                            >
                              <div className={"topbarProfileUser " + findBGColorCSS(variant)}>
                                <InsertEmoticon className='tobarProfileMenu'/>
                                <div className={"topbarProfileUsername "+findBGColorCSS(variant)}>
                                  {userDetails.fullName}
                                </div>
                              </div>
                              <div className="yourContactDetails">Your contact details</div>
                              <div className="topbarMenuItemAddress">
                                <div onClick={handleClose} className='topbarMenuItemAddressMenu'>
                                  <div className='topbarMenuItemAddressText'>
                                    <MobileFriendly className='topbarLocationAddressIcon'/>
                                    <div className='topbarLocationAddressIconText'>{'Mobile: ' + userDetails.mobile}</div>
                                  </div>
                                </div>
                                <Edit className={'topbarMenuItemAddressEdit ' + findBGColorCSS(variant)}/>
                              </div> 
                              <div className="topbarMenuItemAddress">
                                <div onClick={handleClose} className='topbarMenuItemAddressMenu'>
                                  <div className='topbarMenuItemAddressText'>
                                    <LocationOn className='topbarLocationAddressIcon'/>
                                    <div className='topbarLocationAddressIconText'>20 The Edward Gotolab Obto ST2 OSU</div>
                                  </div>
                                </div>
                                <Edit className={'topbarMenuItemAddressEdit ' + findBGColorCSS(variant)}/>
                              </div>  
                              <div className="topbarMenuItemAddress">
                                <div onClick={handleClose} className='topbarMenuItemAddressMenu'>
                                  <div className='topbarMenuItemAddressText'>
                                    <MailOutline className='topbarLocationAddressIcon'/>
                                    <div className='topbarLocationAddressIconText'>{'Change email address ' + userDetails.email}</div>
                                  </div>
                                </div>
                                <Edit className={'topbarMenuItemAddressEdit ' + findBGColorCSS(variant)}/>
                              </div>  
                              <div className="topbarMenuItemAddress">
                                <div onClick={handleClose} className='topbarMenuItemAddressMenu'>
                                  <div className='topbarMenuItemAddressText'>
                                    <Password className='topbarLocationAddressIcon'/>
                                    <div className='topbarLocationAddressIconText'>Change my password</div>
                                  </div>
                                </div>
                                <Edit className={'topbarMenuItemAddressEdit ' + findBGColorCSS(variant)}/>
                              </div>  
                              <div className="topbarMenuItemAddress">
                                <div onClick={handleClose} className='topbarMenuItemAddressMenu'>
                                  <div className='topbarMenuItemAddressText'>
                                    <MailOutline className='topbarLocationAddressIcon'/>
                                    <div className='topbarLocationAddressIconText'>Change letter/statement preferences</div>
                                  </div>
                                </div>
                                <Edit className={'topbarMenuItemAddressEdit ' + findBGColorCSS(variant)}/>
                              </div> 
                              {/* <MenuItem onClick={handleClose}><div className="topbarMenuItem">My account</div></MenuItem> */}
                              <MenuItem onClick={logoutApp}><div className="topbarMenuItemLogout"><button className={'logoutButton '+findBGColorCSS(variant)}><ExitToApp className="logoutButtonMenu"/><span className="logoutButtonText">Logout</span></button></div></MenuItem>
                              
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
              </Stack>
        </div>
      </div>}
    </div>
  )
}

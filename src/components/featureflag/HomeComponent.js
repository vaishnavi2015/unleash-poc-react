import {useUnleashContext, useFlag, useVariant} from '@unleash/proxy-client-react';
import React, { useEffect, useState } from 'react';
import FeatureFlagService from '../../api/FeatureFlagService';
import { Table } from "react-bootstrap";
import {findColorForCells} from '../../Utils'
const HomeComponent = ({ userId }) => {

    const [featureFlags, setFeatureFlags] = useState([]);
    const updateContext = useUnleashContext();

    const [state, setState] = React.useState({ num: 0 });
    // const counter = React.useRef(0);
    
    useEffect(() => {
        // context is updated with userId
        updateContext({ userId })
        refreshFeatureFlags()
        const timer = setTimeout(() => setState({ num: state.num + 1 }), 10000)
        return () => clearTimeout(timer)
    }, [state])

    const permissionFeatureFlag = useFlag('permission-test-feature-flag')
    const killSwitchFlag = useFlag('sample-kill-switch-flag')

    const refreshFeatureFlags = () => {
        
        FeatureFlagService.retrieveEnabledFeatureFlags()
            .then(
                response => {
                    
                    //console.log(response);
                    var tempFeatureFlags = [
                        {
                            "name": "release-feature-flag",
                            "enabled": false,
                            "strategy":"Gradual rollout",
                            "variant": {
                                "name": "disabled",
                                "enabled": false
                            },
                            "impressionData": true
                        },
                        {
                            "name": "sample-kill-switch-flag",
                            "enabled": false,
                            "strategy":"Standard",
                            "variant": {
                                "name": "fontSize",
                                "payload": {
                                    "type": "string",
                                    "value": "20"
                                },
                                "enabled": true
                            },
                            "impressionData": false
                        },
                        {
                            "name": "virtusa-exp-test-toggle",
                            "enabled": false,
                            "strategy":"Standard",
                            "variant": {
                                "name": "disabled",
                                "enabled": false
                            },
                            "impressionData": false
                        },
                        {
                            "name": "test123",
                            "enabled": false,
                            "strategy":"TimeStampStrategy",
                            "variant": {
                                "name": "disabled",
                                "enabled": false
                            },
                            "impressionData": true
                        },
                        {
                            "name": "operational-feature-flag",
                            "enabled": false,
                            "strategy":"Standard",
                            "variant": {
                                "name": "backgroundColor",
                                "payload": {
                                    "type": "string",
                                    "value": "#008000"
                                },
                                "enabled": true
                            },
                            "impressionData": false
                        },
                        {
                            "name": "experiment-feature-flag",
                            "enabled": false,
                            "strategy":"Standard",
                            "variant": {
                                "name": "disabled",
                                "enabled": false
                            },
                            "impressionData": true
                        },
                        {
                            "name": "permission-test-feature-flag",
                            "enabled": false,
                            "strategy":"UserIDs",
                            "variant": {
                                "name": "disabled",
                                "enabled": false
                            },
                            "impressionData": true
                        }
                    ];
                    console.log('Initial featureflgs => ', tempFeatureFlags)
                    var featureFlagMap = {};
                    var toggles = response.data.toggles;
                    
                    for (var i = 0; i < toggles.length; i++) {
                        featureFlagMap[toggles[i].name]=toggles[i].enabled;
                    }
                    console.log('featureFlagMap=>',featureFlagMap);
                    for(var i = 0; i < tempFeatureFlags.length; i++) {
                        if(tempFeatureFlags[i].name === 'permission-test-feature-flag') 
                            tempFeatureFlags[i].enabled = permissionFeatureFlag;
                        else if(tempFeatureFlags[i].name === 'sample-kill-switch-flag') 
                            tempFeatureFlags[i].enabled = !killSwitchFlag;
                        else if(featureFlagMap[tempFeatureFlags[i].name])
                            tempFeatureFlags[i].enabled = featureFlagMap[tempFeatureFlags[i].name];
                        
                    }
                    console.log('featureflgs => ', tempFeatureFlags)
                    // setFeatureFlags(previousState => {
                    //     return { ...previousState, tempFeatureFlags }
                    //   });
                    setFeatureFlags(tempFeatureFlags);
                }
            )
    }

    const variant = useVariant('virtusa-exp-test-toggle')
    console.log('variant=>', variant)

    return(
        <div style={{'backgroundColor': 'lightcyan'}}>
            <div style={{'backgroundColor' : 'white'}}>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>
                                <div className='container'>
                                    <h2>All Feature Flags</h2>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="container">
                <Table striped bordered hover>
                    <thead>
                        <tr style={{'backgroundColor': '#FFFFE0'}}>
                            <th>Feature flag</th>
                            <th>Strategy</th>
                            <th>Enabled</th>
                            <th>impressionData</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            featureFlags.map(
                                flag =>
                                    <tr key={flag.name} style={{'backgroundColor': findColorForCells(flag)}}>
                                        <td>{flag.name}</td>
                                        <td>{flag.strategy}</td>
                                        <td>{flag.enabled.toString()}</td>
                                        <td>{flag.impressionData.toString()}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
            <div style={{'backgroundColor' : 'white'}}>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>
                                <div className='container'>
                                {state.num}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
  };
   
    // const enabled = useFlag('operational-feature-flag');
    // const test123 = useFlag('test123');
    // const expFeatureFlag = useFlag('experiment-feature-flag');
    // const variant = useVariant('operational-feature-flag');
    // console.log('enabled=>', enabled);
    // console.log('variant=>', variant);
    // return (
    //     <div>
    //     {/* <div>Hello</div>
    //         {variant.payload &&
    //         <div style={{ height: '100vh', backgroundColor: variant.payload.value}} >
    //             Hi
    //         </div>} */}
    //         <Shape/>
    //     </div>
    // );

export default HomeComponent;
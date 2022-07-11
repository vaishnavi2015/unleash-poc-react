import React from 'react'
import {useFlag} from '@unleash/proxy-client-react';
const FooterComponent = () => {
    const footerKilled = useFlag('footer-kill-feature-flag');
    return (
        <footer>
            {!footerKilled && <div className="justify-content-center">
                <span className="text-muted">All Rights Reserved 2022</span>
            </div>}
        </footer>
    )
}

export default FooterComponent
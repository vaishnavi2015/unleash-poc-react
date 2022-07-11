import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FlagProvider, {UnleashClient} from '@unleash/proxy-client-react';
import posthog from 'posthog-js';
import useAnalyticsEventTracker from './ga/useAnalyticsEventTracker';

const root = ReactDOM.createRoot(document.getElementById('root'));
const config = {
  appName: 'unleash-proxy',
  clientKey: 'proxy-secret',
  url: 'http://localhost:3000/proxy',
  refreshInterval: 5
};

export const unleash = new UnleashClient(config);

// listen for impression events
unleash.on("impression", (event) => {
  // console.log('Inside impression events....', event);
  //Send event to google analytics
  const gaEventTracker = useAnalyticsEventTracker(event.featureName);
  gaEventTracker(event.enabled);
  // Integration with posthog events - capture and transform events
  posthog.capture(event.eventType, {
      ...event.context,
      distinct_id: event.context?.userId,
      featureName: event.featureName,
      enabled: event.enabled,
      variant: event.variant,
  });
});

root.render(
  <React.StrictMode>
    <FlagProvider unleashClient={unleash}>
      <App />
    </FlagProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

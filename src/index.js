import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as AWS from 'aws-sdk';


AWS.config.update({
      region: 'ap-south-1',
      endpoint: 'dynamodb.ap-south-1.amazonaws.com',
      accessKeyId: 'AKIAWBWAT2R2HIBU64H6',
      secretAccessKey: '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'
    });
    
    




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
  
  </React.StrictMode>
);



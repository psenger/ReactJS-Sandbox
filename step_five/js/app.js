/**
 * Created by psenger on 5/21/16.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Timer } from './componet/Timer';
import { MessageBox } from './componet/MessageBox';

ReactDom.render(
    <div>
        <MessageBox name="Bill"/>
        <br/>
        <Timer />
    </div>,
    document.getElementById('container')
);

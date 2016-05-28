/**
 * Created by psenger on 5/21/16.
 */
import React from 'react';
import ReactDom from 'react-dom';

import { Field } from './componet/Field';

let sides = [
    {
        goal: { score: 0, misses: { wild: 0, target: 0 } },
        team: {
            name: 'Epping Eastwood Tigers',
            players: [
                { name: 'Ben', id: 8 },
                { name: 'Toby', id: 16 }
            ]
        }
    },
    {
        goal: { score: 0, misses: { wild: 0, target: 0 } },
        team: {
            name: 'Redbacks',
            players: [
                { name: 'unknown', id: 8 },
                { name: 'unknown', id: 16 }
            ]
        }
    }
];
let field = {
    sides
};
let game = {
    field
};

ReactDom.render(
    <div>
        <Field {...game.field} />
    </div>,
    document.getElementById('container')
);

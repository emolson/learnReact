import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                addIngredient={() => props.addIngredient(ctrl.type)}
                removeIngredient={() => props.removeIngredient(ctrl.type)}
                disabled={props.disabledIngredients[ctrl.type]}
            />
        ))}
        <button disabled={!props.purchasable}
                className={classes.OrderButton}
                onClick={props.purchaseHandler}>ORDER NOW
        </button>
    </div>
);

export default buildControls;
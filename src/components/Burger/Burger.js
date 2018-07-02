import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // transform ingredients, object with key value pairs, into an array
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // ...Array(#) instatiates an empty array with # of elements
            // .map(_,i) : use _ for unused element, i for index
            return [...Array(props.ingredients[igKey])].map((_, i) =>
                <BurgerIngredient key={igKey + i} type={igKey}/>
            )
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add ingredients</p>
    };
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={'bread-top'}/>
                {transformedIngredients}
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
    );
};

export default burger;
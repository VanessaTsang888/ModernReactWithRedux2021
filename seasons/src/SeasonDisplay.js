import './SeasonDisplay.css';
import React from 'react';

/* 
check that I have my latitude property down in the 'SeasonDisplay' component which is the child component using:
console.log(props.lat);
*/ 

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
// To get access to the 2 config objects, we reference them here:
// Will return the text and the iconName inside of it. Destructure out the text and iconName from seasonConfig at season.
// Refer to iconName that's in the seasonConfig object.
// 'massive' is the size from:  https://semantic-ui.com

    const { text, iconName } = seasonConfig[season]; 

    return (
        <div className={ `season-display ${season}`} >
            <i className= { `icon-left massive ${iconName} icon` } /> 
            <h1>{ text }</h1>
            <i className= { `icon-right massive ${iconName} icon` } />
        </div>
    );
};


/* 
seasonConfig object:
This is refactored from the two Ternary Expressions that I had written before as a lot of the code was duplicated within them and not efficent.
The first object will tell the App what text and what icon to use if it is summer. The second object will tell the App what text and what icon to use if it is winter.
*/

const seasonConfig = {
    summer: {
        text: "Let's hit the beach Vanessa! ", /* I'm using dbl quotes to escape the apostrohe rahter than using the backslash as its just easier in the typing department */
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold. Put on more clothes',
        iconName: 'snowflake'
    }
}

/*
Determin the current season as a string: I want a simple string that says either Summer or Winter:
1. write a new fn that will determin what the season is.
2. This fn will call the current latitute and the current month - the arguments inside the parenthises.
3. Put the lodgic inside the body of the fn to return either the string Summer or the string Winter. There is a number of ways we can write this logic, i.e. a JS Ternary Expression
*/

// Now my getSeason fn will get the current latitude and the current month.
// if-statement to handle the Summer months: if the month is greater than 2 and the month is less than 9, to determin if user is in the Northern Hemisphere (summer) or in the Southern Hemisphere (winter), using a
// JS Ternary Expression -> is lat greater than 0. If so, the user must be in the Northern Hemisphere. Then we want to return string 'Summer'. Otherwise, return the string 'Winter'.
// So this will get evaluated: late > 0. If true, then the string 'Summer' will get return to the UI. Otherwise if lat is less than '0', the string 'Winter' will get returned instead.
// Therefore, if user is in the Northern Hemisphere and their month is greater than '0', return 'Summer'. Otherwise, return 'Winter'.
// Make this a return statement using the 'return' key word.
// if-statement to handle the Winter months using the else clause: using the same Ternary Expression but using the Winter months on the diagram.
// Northern Hemisphere: months between 0 - 2, and months between 9 - 11. Southern Hemisphere: months between 3-8. Then return the appropriate string.
// Reverse the order of months: 
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    // If user is in the Northern Hemisphere during month that is greater than 0, then it must be 'Winter'. Otherwise, it must be 'Summer'.
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

export default SeasonDisplay;
/**************************************************************************
Pass down a prop of type into this component as we going to receive it.
Print out whatever type is.

********************************************************************************/

// Pass down a prop of type
function AnimalShow({ type }) {
  return <div>{type}</div>; // Print out whatever type is.
}

export default AnimalShow;

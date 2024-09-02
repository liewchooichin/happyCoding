
import PropTypes from "prop-types"

import { HomeCard } from './HomeCard'
import { About, Credits } from './About'

/**
 * Display a page component according to the anchor.
 */
PageToDisplay.propTypes = {
    anchor: PropTypes.string
}
function PageToDisplay({anchor="home"}){
  if(anchor==="home"){
    return(<HomeCard></HomeCard>)
  }
  else if(anchor==="about"){
    return(<About></About>)
  }
  else if(anchor==="credits"){
    return(<Credits></Credits>)
  }
  else{
    return(<HomeCard></HomeCard>)
  }
}

/**
 * Main content below the navigation bar.
 */
MainContent.propTypes = {
    anchor: PropTypes.string
}
export function MainContent({anchor="home"}){
    return(
        <PageToDisplay anchor={anchor}></PageToDisplay>
    )
}

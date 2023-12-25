import React, { Fragment } from 'react'
import { CirclesWithBar} from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Fragment>

<CirclesWithBar
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor=""
  innerCircleColor=""
  barColor=""
  ariaLabel="circles-with-bar-loading"
/>

    </Fragment>
  )
}
export default Loader

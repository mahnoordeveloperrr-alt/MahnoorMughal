import { forwardRef } from 'react'

const Loader = forwardRef(({ titleRef }, ref) => (
  <div className="loader" ref={ref}>
    <h1 className="loader-title" ref={titleRef}>MAHNOOR</h1>
  </div>
))
Loader.displayName = 'Loader'
export default Loader
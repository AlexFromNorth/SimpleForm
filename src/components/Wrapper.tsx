import React from 'react'

const Wrapper: React.FC = ({children}) => {
  return (
    <div className='wrapper'>
        {children}
    </div>
  )
}

export default Wrapper
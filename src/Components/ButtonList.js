import React from 'react'
import Button from './Button'

const list1 = ["All", "Music", "Movies", "Games", "live-stream", "Comedy", "Song", "Movies1", "Games1", "live-stream1", "Comedy1",]

const ButtonList = () => {
  return (  
    <div>
      {list1.map(n => (
        <Button key={n} name={n} />
      ))}
    </div>
  )
}

export default ButtonList;

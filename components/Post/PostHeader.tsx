import React from 'react'
import Image from 'next/image'
function PostHeader({title, image}) {
  return (
    <header className="py-10">
      <h2 className="w-[80%]">{title}</h2>
    </header>

  )
}

export default PostHeader

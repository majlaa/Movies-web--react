import React from 'react'

function Hashtag(props) {
  return (
    <div class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      <div>#{props.tag}</div>
    </div>
  )
}

export default Hashtag

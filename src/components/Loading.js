import React from 'react'
import ReactLoading from "react-loading";


export default function Loading() {
  return (
    <div>
      <ReactLoading type="spin" color="white"
                height={100} width={50} />
    </div>
  )
}

import React from 'react'
import LottiePlayer from '../Components/SignSidebar';


const NoNavLayout = ({children}) => {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="hidden lg:block pl-10">
        <LottiePlayer />
      </div>
      <div className="lg:col-span-1 mt-8 self-center">{children}</div>
    </div>
  );
}

export default NoNavLayout

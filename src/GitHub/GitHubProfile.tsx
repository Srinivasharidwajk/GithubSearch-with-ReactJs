
import React, { useState } from 'react'
import { IProfile } from './InterFace/IProfile'
import GitHubProfileCard from './GitHubProfileCard'
import GitHubProfileDetails from './GitHubProfileDetails'
interface IProps{
    profile:IProfile
}
const GitHubProfile:React.FC <IProps>= ({profile}) => {
   
  return (
    <>
     <div className="row">
        <div className="col-md-3">
<GitHubProfileCard profile={profile}/>
        </div>
        <div className="col-md-9">
<GitHubProfileDetails profile={profile}/>
        </div>
     </div>
    </>
  )
}

export default GitHubProfile
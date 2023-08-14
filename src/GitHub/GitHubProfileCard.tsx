import React from 'react'
import { IProfile } from './InterFace/IProfile'
interface IProps{
    profile:IProfile
}

const GitHubProfileCard:React.FC <IProps>= ({profile}) => {
  return (
    <>
       <div className="card">
                <img src={profile.avatar_url} alt="" className="img-fluid"/>
                <div className="card-body">
                    <p className="h3">{profile.name}</p>
                    <small>{profile.bio}</small>
                </div>
            </div>
    </>
  )
}

export default GitHubProfileCard
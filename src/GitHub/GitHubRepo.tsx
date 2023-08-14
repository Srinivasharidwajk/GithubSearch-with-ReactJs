import React from 'react'
import { IRepo } from './InterFace/IRepo'
interface IProps{
  repos:IRepo[]
}
const GitHubRepo:React.FC<IProps> = ({repos}) => {
  return (
    <>
    <div className="card">
                <div className="card-header">
                    <p className="h4">Your Repositories</p>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        {
                            repos.map(repo => {
                                return(
                                    <li className="list-group-item" key={repo.git_url}>
                                        <div className="d-flex justify-content-between">
                                                    <span className="h5">
                                                        <a href={repo.html_url} target="_blank">{repo.name}</a>
                                                    </span>
                                            <span className="badge badge-success">{repo.stargazers_count} Stars </span>
                                            <span className="badge badge-warning">{repo.watchers_count} Watchers </span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
    </>
  )
}

export default GitHubRepo
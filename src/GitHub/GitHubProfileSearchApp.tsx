import React, { useState } from 'react'
import { IProfile } from './InterFace/IProfile';
import { IRepo } from './InterFace/IRepo';
import gitCred from './gitCred';
import axios from 'axios';
import GitHubProfile from './GitHubProfile';
import GitHubRepo from './GitHubRepo';
interface IProps{

}
interface IState{
    githubUsername:string;
    profile:IProfile;
    repos:IRepo[];
}

const GitHubProfileSearchApp:React.FC = () => {
    const [state, setState] = useState<IState>({
        githubUsername: "",
        profile: {} as IProfile,
        repos: [] as IRepo[],
      });
    
      const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          githubUsername: event.target.value,
        });
      };
    
      const submitSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepo(state.githubUsername);
        searchProfile(state.githubUsername);
      };
    
      const searchProfile = (githubUsername: string): void => {
        const dataURL = `https://api.github.com/users/${githubUsername}?client_id=${gitCred.clientID}&client_secret=${gitCred.clientSecret}`;
        axios
          .get(dataURL)
          .then((response) => {
            setState((prevState) => ({
              ...prevState,
              profile: response.data,
            }));
          })
          .catch((error) => {
            console.error(error);
          });
      };
    
      const searchRepo = (githubUsername: string): void => {
        const dataURL = `https://api.github.com/users/${githubUsername}/repos?client_id=${gitCred.clientID}&client_secret=${gitCred.clientSecret}`;
        axios
          .get(dataURL)
          .then((response) => {
            setState((prevState) => ({
              ...prevState,
              repos: response.data,
            }));
          })
          .catch((error) => {
            console.error(error);
          });
      };
  return (
    <>
    <nav className=' nav navbar-dark bg-primary navbar-xl p-3 shadow-lg '>
<div className="navbar-brand">
    <h5>GitHub Profile Search</h5>
</div>
    </nav>

<pre>{JSON.stringify(state)}</pre>
    <section>
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <p className='h2'>GitHub Search App</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure itaque nam ab. Nam expedita deleniti, iure repellendus assumenda nemo sit beatae ex aliquid voluptas voluptates ullam cum quasi! Ut vel quam repellendus! Cumque dolore distinctio minima reprehenderit exercitationem ipsum saepe!</p>
                </div>
            </div>
            <div className="row">
<form action="" onSubmit={submitSearch}>

<div className="row">
  <div className="col-md-6">
  <div className="input-group">
  <input value={state.githubUsername} onChange={updateInput}  type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="submit" className="btn btn-outline-primary">  <i className="bi bi-search"></i>Search</button>
</div>
</div>
</div>

</form>
            </div>
        </div>
    </section>
    <section>
        <div className="container">
            <div className="row">
                <div className="col">
                    {
                        Object.keys(state.profile).length > 0 &&
                        <GitHubProfile profile={state.profile}/>
                    }
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="container">
            <div className="row">
                <div className="col">
                    {
                        state.repos.length > 0 &&
                        <GitHubRepo repos={state.repos}/>
                    }
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default GitHubProfileSearchApp
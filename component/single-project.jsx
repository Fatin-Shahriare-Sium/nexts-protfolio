
import React from 'react'
import Image from 'next/image'
import GithubIcon from './icon/githubIcon'

const SingleProject = () => {
    return (
        <div className='single-project'>
            <div className="single-project-img">
                <div className='single-project-img__wrapper'>
                    <Image src='https://res.cloudinary.com/sium/image/upload/v1625940318/Screenshot_2021-07-11_at_00-03-29_React_App_1_xdkxzw.png' height='500' width='700' objectFit='contain' />
                </div>
            </div>
            <div className="single-project-details">
                <p className='project-name'>Nextjs-Blog Website</p>
                <div className='project-description'>
                    <p>
                        A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.
                    </p>
                </div>
                <div className='project-technologies'>
                    <p>Nextjs . Github</p>

                </div>
                <div className='project-link'>
                    {/* Github Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='white' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    {/* link Icon */}
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill='white' clip-rule="evenodd"><path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z" /></svg>
                </div>
            </div>
        </div>
    )
}

export default SingleProject;

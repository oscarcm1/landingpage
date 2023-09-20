import React from 'react'
import { Icon } from '@iconify/react';
import "./css/resume.css"

function Resume() {
    return (
        <div className='box'>
            <div className='resume'>
                <div className='skills'>
                    <h2>Software Skills</h2>
                    <div className='box-skills'>
                        <div className='list-skill'>
                            <span><Icon icon="ri:reactjs-line" /></span> <p>React js</p> <input readOnly type="range" id="react" name="react" min="0" max="100" value={"50"} />
                        </div>
                        <div className='list-skill'>
                            <span><Icon icon="akar-icons:html-fill" /></span> <p>Html</p> <input readOnly type="range" id="html" name="react" min="0" max="100" value={"90"} />
                        </div>
                        <div className='list-skill'>
                            <span><Icon icon="akar-icons:css-fill" /></span> <p>CSS</p> <input  readOnly type="range" id="css" name="react" min="0" max="100" value={"90"} />
                        </div>
                        <div className='list-skill'>
                            <span><Icon icon="fluent:javascript-16-filled" /></span> <p>Javascript</p> <input readOnly type="range" id="javascript" name="react" min="0" max="100" value={"50"} />
                        </div>

                        <div className='list-skill'>
                            <span><Icon icon="mdi:bootstrap" /></span> <p>Bootstrap</p> <input  readOnly type="range" id="react" name="bootstrap" min="0" max="100" value={"70"} />
                        </div>
                        <div className='list-skill'>
                            <span><Icon icon="fa6-brands:square-git" /></span> <p>Git, Github</p> <input readOnly type="range" id="git" name="react" min="0" max="100" value={"80"} />
                        </div>
                        <div className='list-skill'>
                            <span><Icon icon="bxl:java" /></span> <p>Java</p> <input readOnly type="range" id="react" name="java" min="0" max="100" value={"60"} />
                        </div>
                        <div className='list-skill'>
                            <span><Icon icon="simple-icons:mysql" /></span> <p>Mysql</p> <input readOnly type="range" id="mysql" name="react" min="0" max="100" value={"50"} />
                        </div>
                        <div className='list-skill'>
                            <span><Icon icon="devicon-plain:jira-wordmark" /></span> <p>Jira</p> <input  readOnly type="range" id="jira" name="react" min="0" max="100" value={"80"} />
                        </div>
                        <div className='list-skill'>
                            <span><Icon icon="formkit:wordpress" /></span> <p>Wordpress</p> <input readOnly type="range" id="wordpress" name="react" min="0" max="100" value={"60"} />
                        </div>
                        <div className='list-skill'>
                            <span><Icon icon="uiw:linux" /></span> <p>Linux</p> <input  readOnly type="range" id="react" name="linux" min="0" max="100" value={"50"} />
                        </div>
                        <div className='list-skill'>
                            <span><Icon icon="simple-icons:microsoftoffice" /></span> <p>Office365</p> <input readOnly type="range" id="oficce" name="react" min="0" max="100" value={"90"} />
                        </div>
                        <div className='list-skill'>
                            <span><Icon icon="basil:adobe-photoshop-solid" /></span> <p>Photoshop</p> <input readOnly type="range" id="photoshop" name="react" min="0" max="100" value={"100"} />
                        </div>
                        <div className='list-skill'>
                            <span><Icon icon="basil:adobe-illustrator-solid" /></span> <p>Adobe illustrator</p> <input readOnly type="range" id="illustrator" name="react" min="0" max="100" value={"60"} />
                        </div>
                    </div>


                </div>


                <div className='experience'>
                    <h2>Education</h2>
                    <div className='university'>
                        <p>UAEM autonomous Mexico State University</p>
                    </div>
                    <h2>Experience</h2>
                </div>


                <div className='aditional'>
                    <h2>  Languages</h2>
                    <div className='languages'>
                        <div className='language'>
                        <p>Spanish</p> <input readOnly type="range" id="illustrator" name="react" min="0" max="100" value={"100"} />
                        </div>
                        <div className='language'>
                        <p>English</p> <input readOnly type="range" id="illustrator" name="react" min="0" max="100" value={"50"} />
                        </div>
                    </div>
                    <h2>Hobbies & Interest</h2>
                    <div className='hobbies'>
                        <div className='list-hobbies'>
                        <span><Icon icon="material-symbols:travel" /></span> <p>Travel</p>
                        </div>

                        <div className='list-hobbies'>
                        <span><Icon icon="mdi:paint-outline" /></span> <p>Drawing</p>
                        </div>

                        <div className='list-hobbies'>
                        <span><Icon icon="solar:camera-bold" /></span> <p>Photography</p>
                        </div>
                        <div className='list-hobbies'>
                        <span><Icon icon="fluent:games-16-filled" /></span> <p>Videogames</p>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Resume
import classes from './page.module.scss'

import axios from 'axios'

import logo from './img/logo.png'
import arrow_header_right from './img/arrow_right.png'
import arrow_right_black from './img/arrow_right_black.png'
import logo_header_1 from './img/logo_header_1.png'
import logo_header_2 from './img/logo_header_2.png'
import logo_header_3 from './img/logo_header_3.png'
import logo_header_4 from './img/logo_header_4.png'
import cross from './img/cross.png'
import graph from './img/graph.png'
import sect_three_one from './img/sect_three_one.png'
import sect_three_two from './img/sect_three_two.png'
import sect_three_three from './img/sect_three_three.png'
import sect_four_img from './img/sect_four_img.png'

import face_one from './img/face_one.png'

import Comment from './comment'
import Plan from './plan'
import Blog from './blog'

import sect_seven_1 from './img/sect_seven_1.png'
import sect_seven_2 from './img/sect_seven_2.png'
import sect_seven_3 from './img/sect_seven_3.png'
import logo_white from './img/logo_white.png'

import insta from './img/insta.png'
import face from './img/face.png'
import twit from './img/twit.png'
import block from './img/block.png'
import time from './img/time.png'
import head from './img/head.png'
import { useEffect, useState } from 'react'


    
export default function MainPage(){

    const [blogs, setBlogs] = useState([])
    const [plans, setPlans] = useState([])
    const [comments, setComments] = useState([])

    const [email, setEmail] = useState()

    function Subscribe(){
        let body = new FormData()
        body.append('email', email)

        axios({
            method: "post",
            url: "http://localhost:5000/subscribes",
            data: body,
            headers: { "Content-Type" : 'application/x-www-form-urlencoded' },
        })
        .then(function (response) {
            console.log(response);
            alert("Subscribed!")
        })
        .catch(function (response) {
            console.log(response);
        });
    }

useEffect(()=>{
        axios({
            method: 'GET',
            url: 'http://localhost:5000/blogs',
            headers: {'Content-Type': "application/json"}
        })
        .then(function (response) {
            setBlogs(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });

        axios({
            method: 'GET',
            url: 'http://localhost:5000/plans',
            headers: {'Content-Type': "application/json"}
        })
        .then(function (response) {
            setPlans(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });

        axios({
            method: 'GET',
            url: 'http://localhost:5000/comments',
            headers: {'Content-Type': "application/json"}
        })
        .then(function (response) {
            setComments(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    },[])

    function CloseTopSection(){
        let topSection = document.getElementById("top-section")
        topSection.style.display = "none"
    }

    return(
        <>
            <div className={classes.top_section} id='top-section'>
                <div className={classes.top_con}>
                    <p>Explore all our services.</p>
                    <img src={cross} alt="" onClick={CloseTopSection}/>
                </div>
            </div>
            <header>
                <nav>
                    <div className={classes.nav_con}>
                        <div className={classes.nav_left}>
                            <img src={logo} alt="" />
                        </div>
                        <div className={classes.nav_right}>
                            <div className={classes.nav_links}>
                                <a href="">Our Story</a>
                                <a href="">Blog</a>
                                <a href="">Contact</a>
                                <a href="">Pricing</a>
                            </div>
                            <div className={classes.nav_buttons}>
                                <button type="button">Log in</button>
                                <button type="button">Try for free</button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={classes.header_con}>
                    <div className={classes.header_content}>
                        <div className={classes.header_text}>
                            <p>
                                Head start your business today!
                            </p>
                            <p>
                                Consectetur adipiscing elit. Integer sagittis quam magna, quis sollicitudin lorem ornare ut. Nulla et scelerisque mauris.
                            </p>
                        </div>
                        <div className={classes.header_buttons}>
                            <button type="button">Get started</button>
                            <button type="button">Try for free <img src={arrow_header_right} alt="" /></button>
                        </div>
                        <div className={classes.header_logos}>
                            <img src={logo_header_1} alt="" />
                            <img src={logo_header_2} alt="" />
                            <img src={logo_header_3} alt="" />
                            <img src={logo_header_4} alt="" />
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section className={classes.sect_one}>
                    <div className={classes.sect_one_bg}></div>
                    <div className={classes.sect_one_con}>
                        <button type="button">Watch Introduction</button>
                    </div>
                </section>
                <section className={classes.sect_two}>
                    <div className={classes.sect_two_con}>
                        <div className={classes.sect_two_left}>
                            <div className={classes.sect_two_left_block}>
                                <div className={classes.sect_two_left_block_text}>
                                    <p>86%</p>
                                    <p>Increased in sales</p>
                                </div>
                                <div className={classes.sect_two_left_block_img}>
                                    <img src={graph} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={classes.sect_two_right}>
                            <div className={classes.sect_two_right_con}>
                                <div className={classes.tag}>
                                    <p>Speed</p>
                                </div>
                                <div className={classes.title}>
                                    <p>Faster than ever before</p>
                                </div>
                                <div className={classes.desc}>
                                    <p>Morbi tristique cursus diam, at viverra felis malesuada eu. Duis iaculis velit ac urna fermentum interdum. Ut auctor vitae nisi eget varius. Phasellus rutrum pellentesque lectus pulvinar dapibus aenean dui justro, tempus sed oido.</p>
                                </div>
                                <div className={classes.buttons}>
                                    <button type="button">Get started</button>
                                    <button type="button">Try for free<img src={arrow_right_black} alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={classes.sect_three}>
                    <div className={classes.con}>
                        <div className={classes.text}>
                            <p>
                                Building your very own Startup has never been simpler
                            </p>
                            <p>
                                Aenean dui justo, tempus sed odio ut, convallis accumsan nunc. Phasellus mauris sem, porta eu turpis vel, maximus condimentum turpis.
                            </p>
                        </div>
                        <div className={classes.cards}>
                            <div className={classes.card}>
                                <img src={sect_three_one} alt="" />
                                <p>Better results</p>
                                <p>Vestibulum posuere odio id purus maximus, vel condimentum nunc tincidunt. Duis sit amet vulputa.</p>
                            </div>
                            <div className={classes.card}>
                                <img src={sect_three_two} alt="" />
                                <p>Less paper work</p>
                                <p>Duis convallis eros eu dolor posuere, sit amet mollis turpis elementum. Aliquam ut sapien enim.</p>
                            </div>
                            <div className={classes.card}>
                                <img src={sect_three_three} alt="" />
                                <p>More profit</p>
                                <p>Donec tincidunt est pellentesque, ullamcorper quam sed, aliquam eros. Proin finibus luctus nisi.</p>
                            </div>
                        </div>
                        <div className={classes.buttons}>
                            <button type="button">Get started</button>
                            <button type="button">Try for free<img src={arrow_right_black} alt="" /></button>
                        </div>
                    </div>
                </section>
                <section className={classes.sect_four}>
                    <div className={classes.con}>
                        <div className={classes.left}>
                            <div className={classes.tag}>
                                <p>Efficient</p>
                            </div>
                            <div className={classes.text}>
                                <p>Straight to the point</p>
                                <p>Vivamus ante dolor, condimentum eget dignissim vitae, malesuada sed urna. Aenean consequat risus tortor, quis porta.</p>
                            </div>
                            <div className={classes.adds}>
                                <div className={classes.add}>
                                    <div className={classes.image}>
                                        <img src={block} alt="" />
                                    </div>
                                    <div className={classes.title}>
                                        <p>No meetings</p>
                                    </div>
                                    <div className={classes.desc}>
                                        <p>Porta non eros. Ut finibus viverra neque, sed vestibulum tellus volutpat ac cras at massa.</p>
                                    </div>
                                </div>
                                <div className={classes.add}>
                                    <div className={classes.image}>
                                        <img src={time} alt="" />
                                    </div>
                                    <div className={classes.title}>
                                        <p>24/7 customer support</p>
                                    </div>
                                    <div className={classes.desc}>
                                        <p>Praesent consequat erat in orci lobortis, in accumsan orci vestibulum nam et dictum.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.buttons}>
                                <button type="button">Get started</button>
                                <button type="button">Try for free<img src={arrow_right_black} alt="" /></button>
                            </div>
                        </div>
                        <div className={classes.right}>
                            <div className={classes.box}>
                                <div className={classes.text}>
                                    <p>74%</p>
                                    <p>Increased in productivity</p>
                                </div>
                                <div className={classes.img}>
                                    <img src={head} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={classes.sect_five}>
                    <div className={classes.con}>
                        <div className={classes.top_text}>
                            <p>A words from our customers</p>
                            <p>Eu turpis vel, maximus condimentum turpis faucibus dictum accumsan.</p>
                        </div>
                        <div className={classes.comments}>
                            <Comment
                                rating={comments[0] == undefined ? null : comments[0].rating}
                                text={comments[0] == undefined ? null : comments[0].text}
                                image={comments[0] == undefined ? null : comments[0].photo}
                                name={comments[0] == undefined ? null : comments[0].name}
                                position={comments[0] == undefined ? null : comments[0].position}
                            />
                            <Comment
                                rating={comments[1] == undefined ? null : comments[1].rating}
                                text={comments[1] == undefined ? null : comments[1].text}
                                image={comments[1] == undefined ? null : comments[1].photo}
                                name={comments[1] == undefined ? null : comments[1].name}
                                position={comments[1] == undefined ? null : comments[1].position}
                            />
                            <Comment
                                rating={comments[2] == undefined ? null : comments[2].rating}
                                text={comments[2] == undefined ? null : comments[2].text}
                                image={comments[2] == undefined ? null : comments[2].photo}
                                name={comments[2] == undefined ? null : comments[2].name}
                                position={comments[2] == undefined ? null : comments[2].position}
                            />
                            <Comment
                                rating={comments[3] == undefined ? null : comments[3].rating}
                                text={comments[3] == undefined ? null : comments[3].text}
                                image={comments[3] == undefined ? null : comments[3].photo}
                                name={comments[3] == undefined ? null : comments[3].name}
                                position={comments[3] == undefined ? null : comments[3].position}
                            />
                            <Comment
                                rating={comments[4] == undefined ? null : comments[4].rating}
                                text={comments[4] == undefined ? null : comments[4].text}
                                image={comments[4] == undefined ? null : comments[4].photo}
                                name={comments[4] == undefined ? null : comments[4].name}
                                position={comments[4] == undefined ? null : comments[4].position}
                            />
                            <Comment
                                rating={comments[5] == undefined ? null : comments[5].rating}
                                text={comments[5] == undefined ? null : comments[5].text}
                                image={comments[5] == undefined ? null : comments[5].photo}
                                name={comments[5] == undefined ? null : comments[5].name}
                                position={comments[5] == undefined ? null : comments[5].position}
                            />
                        </div>
                    </div>
                </section>
                <section className={classes.sect_six}>
                    <div className={classes.con}>
                        <div className={classes.text}>
                            <p>Pricing</p>
                            <p>Pricing plans</p>
                            <p>Suspendisse mattis porttitor gravida et malesuada fames.</p>
                        </div>
                        <div className={classes.plans}>
                            <Plan
                                plan={plans[0] == undefined ? null : plans[0].name}
                                monthly={plans[0] == undefined ? null : plans[0].monthly}
                                yearly={plans[0] == undefined ? null : plans[0].yearly}
                                bonus1={plans[0] == undefined ? null : plans[0].bonus1}
                                bonus2={plans[0] == undefined ? null : plans[0].bonus2}
                                bonus3={plans[0] == undefined ? null : plans[0].bonus3}
                            />
                            <Plan
                                plan={plans[0] == undefined ? null : plans[1].name}
                                monthly={plans[0] == undefined ? null : plans[1].monthly}
                                yearly={plans[0] == undefined ? null : plans[1].yearly}
                                bonus1={plans[0] == undefined ? null : plans[1].bonus1}
                                bonus2={plans[0] == undefined ? null : plans[1].bonus2}
                                bonus3={plans[0] == undefined ? null : plans[1].bonus3}
                                bonus4={plans[0] == undefined ? null : plans[1].bonus4}
                            />
                            <Plan
                                plan={plans[0] == undefined ? null : plans[2].name}
                                monthly={plans[0] == undefined ? null : plans[2].monthly}
                                yearly={plans[0] == undefined ? null : plans[2].yearly}
                                bonus1={plans[0] == undefined ? null : plans[2].bonus1}
                                bonus2={plans[0] == undefined ? null : plans[2].bonus2}
                                bonus3={plans[0] == undefined ? null : plans[2].bonus3}
                                bonus4={plans[0] == undefined ? null : plans[2].bonus4}
                                bonus5={plans[0] == undefined ? null : plans[2].bonus5}
                            />
                        </div>
                    </div>
                </section>
                <section className={classes.sect_seven}>
                    <div className={classes.con}>
                        <div className={classes.text}>
                            <p>Blog</p>
                            <p>Our latest blogs</p>
                            <p>Accumsan semper euismod dolor vitae metus.</p>
                        </div>
                        <div className={classes.blogs}>
                            <Blog
                                image={blogs[0] == undefined ? null : blogs[0].image}
                                tag={blogs[0] == undefined ? null : blogs[0].tag}
                                time={blogs[0] == undefined ? null : blogs[0].time}
                                title={blogs[0] == undefined ? null : blogs[0].title}
                                desc={blogs[0] == undefined ? null : blogs[0].desc}
                            />
                            <Blog
                                image={blogs[1] == undefined ? null : blogs[1].image}
                                tag={blogs[1] == undefined ? null : blogs[1].tag}
                                time={blogs[1] == undefined ? null : blogs[1].time}
                                title={blogs[1] == undefined ? null : blogs[1].title}
                                desc={blogs[1] == undefined ? null : blogs[1].desc}
                            />
                            <Blog
                                image={blogs[2] == undefined ? null : blogs[2].image}
                                tag={blogs[2] == undefined ? null : blogs[2].tag}
                                time={blogs[2] == undefined ? null : blogs[2].time}
                                title={blogs[2] == undefined ? null : blogs[2].title}
                                desc={blogs[2] == undefined ? null : blogs[2].desc}
                            />
                        </div>

                        <div className={classes.button}>
                            <button type="button">View all</button>
                        </div>
                    </div>
                </section>
                <section className={classes.sect_eight}>
                    <div className={classes.con}>
                        <div className={classes.content}>
                            <div className={classes.text}>
                                <p>Stay up to date with the latest news from the Startup world!</p>
                                <p>Etiam volutpat ligula nec orci egestas, at porta massa tempor. Proin rutrum, purus in convallis pharetra, risus leo sagittis.</p>
                            </div>
                            <form onSubmit={(e)=>{e.preventDefault(), Subscribe()}} className={classes.email}>
                                <input type="email" name="email" id="email" placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                <button type="submit">Subscribe</button>
                            </form>
                            <div className={classes.terms}>
                                <p>By clicking Subscribe you're confirming that you agree with our Terms and Conditions.</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.bg}></div>
                </section>
            </main>
            <footer>
                <div className={classes.con}>
                    <div className={classes.top}>
                        <div className={classes.info}>
                            <img src={logo_white} alt="" />
                            <p>Address: <br /> Level 1, 12 Nikola Tesla street, Niš, Serbia</p>
                            <p>Contact: <br /> 1800 123 4567 <br /> info@startico.io</p>
                        </div>
                        <div className={classes.lists}>
                            <ul>
                                <p>Pages</p>
                                <li><a href=''>Home v1</a></li>
                                <li><a href=''>Home v2</a></li>
                                <li><a href=''>Home v3</a></li>
                                <li><a href=''>About v1</a></li>
                                <li><a href=''>About v2</a></li>
                                <li><a href=''>About v3</a></li>
                                <li><a href=''>Contact v1</a></li>
                                <li><a href=''>Contact v2</a></li>
                                <li><a href=''>Contact v3</a></li>
                                <li><a href=''>Blog</a></li>
                                <li><a href=''>Pricing</a></li>
                                <li><a href=''>Log in</a></li>
                                <li><a href=''>Sign up</a></li>
                            </ul>
                            <ul>
                                <p>CMS pages</p>
                                <li><a href=''>Blog Post</a></li>
                                <li><a href=''>Blog Categories</a></li>
                            </ul>
                            <ul>
                                <p>Utility pages</p>
                                <li><a href=''>Style guide</a></li>
                                <li><a href=''>Licenses</a></li>
                                <li><a href=''>Changelog</a></li>
                                <li><a href=''>404</a></li>
                                <li><a href=''>Password</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.bot}>
                        <div className={classes.line}></div>
                        <div className={classes.copy}>
                            <div className={classes.copyright}>
                                <p>© Startico by Minima Square. Powered by Webflow.</p>
                            </div>
                            <div className={classes.socials}>
                                <a href=""><img src={insta} alt="" /></a>
                                <a href=""><img src={twit} alt="" /></a>
                                <a href=""><img src={face} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
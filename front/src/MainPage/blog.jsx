import classes from './page.module.scss'
import read_more from './img/read_more.png'

export default function Blog({image, tag, time, title, desc}){
    return(
        <>
                <div className={classes.blog}>
                    <div className={classes.image}>
                        <img src={image} alt="" />
                    </div>
                    <div className={classes.tags}>
                        <p>{tag}</p>
                        <p>{time} min read</p>
                    </div>
                    <div className={classes.blog_text}>
                        <p>{title}</p>
                        <p>{desc}</p>
                    </div>
                    <div className={classes.read_more}>
                        <button type="button"><img src={read_more} alt="" />Read More</button>
                    </div>
                </div>
        </>
    )
}
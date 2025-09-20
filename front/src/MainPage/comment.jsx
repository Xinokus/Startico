import classes from './page.module.scss'
import star from './img/star.png'

export default function Comment({rating, text, image, name, position}){
    return(
        <>
                <div className={classes.comment}>
                    <div className={classes.rating}>
                        <img src={star} alt="" style={rating >= 1 ? {opacity: 1} : {opacity: 0}}/>
                        <img src={star} alt="" style={rating >= 2 ? {opacity: 1} : {opacity: 0}}/>
                        <img src={star} alt="" style={rating >= 3 ? {opacity: 1} : {opacity: 0}}/>
                        <img src={star} alt="" style={rating >= 4 ? {opacity: 1} : {opacity: 0}}/>
                        <img src={star} alt="" style={rating == 5 ? {opacity: 1} : {opacity: 0}}/>
                    </div>
                    <div className={classes.main_text}>
                        <p>{text}</p>
                    </div>
                    <div className={classes.person}>
                        <div className={classes.image}>
                            <img src={image} alt="" />
                        </div>
                        <div className={classes.info}>
                            <p>{name}</p>
                            <p>{position}</p>
                        </div>
                    </div>
                </div>
        </>
    )
}
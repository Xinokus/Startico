import classes from './page.module.scss'

import card from './img/card.png'
import circle from './img/circle.png'

export default function Plan({plan, monthly, yearly, bonus1, bonus2, bonus3, bonus4, bonus5}){
    return(
        <>
            <div className={classes.plan}>
                <div className={classes.image}>
                    <img src={card} alt="" />
                </div>
                <div className={classes.desc}>
                    <p>{plan} plan</p>
                    <p>${monthly} <span>/mo</span></p>
                    <p>or ${yearly} yearly</p>
                </div>
                <div className={classes.line}>
                    
                </div>
                <div className={classes.main_text}>
                    <div className={classes.includes}>
                        <p>Includes:</p>
                    </div>
                    <div className={classes.bonuses}>
                        <p style={bonus1 == null ? {opacity: 0} : {opacity: 1}}><img src={circle} alt="" />{bonus1}</p>
                        <p style={bonus2 == null ? {opacity: 0} : {opacity: 1}}><img src={circle} alt="" />{bonus2}</p>
                        <p style={bonus3 == null ? {opacity: 0} : {opacity: 1}}><img src={circle} alt="" />{bonus3}</p>
                        <p style={bonus4 == null ? {opacity: 0} : {opacity: 1}}><img src={circle} alt="" />{bonus4}</p>
                        <p style={bonus5 == null ? {opacity: 0} : {opacity: 1}}><img src={circle} alt="" />{bonus5}</p>
                    </div>
                </div>
                <div className={classes.button}>
                    <button type="button">Get started</button>
                </div>
            </div>
        </>
    )
}
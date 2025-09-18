import classes from './page.module.scss'

import logo from './img/logo.png'

export default function MainPage(){
    return(
        <>
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

                </div>
            </header>
            <main>

            </main>
            <footer>

            </footer>
        </>
    )
}
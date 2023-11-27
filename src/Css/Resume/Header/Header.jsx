import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <section className="Headersec">
                <h1>SUDESH GOWDA MD</h1>
                <h2 className='webdev'>WEB DEVELOPER</h2>
                <h2 id='hedbtn'>
                    <button id='headerbtn'>
                        <a href="tel:+918123265859">CONTACT ME</a>
                    </button>
                </h2>
            </section>
        </div> 
 /*
        <header className="Header">
                <h1 className='headersec'cd>SUDESH GOWDA MD</h1>
                <h3>WEB DEVELOPER</h3>
                <h4>
                    <button id='headerbtn'>
                        <a href="tel:+9763652113">Contact Me</a>
                    </button>
                </h4>
            </header>*/
    )
}

export default Header
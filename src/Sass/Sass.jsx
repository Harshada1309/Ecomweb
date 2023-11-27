import './Sass.scss'

const Sass = () => {
    return (
        <div className="Sass">
            <section>
                <form> 
                    <input type="text" placeholder='Enter Your Name' />
                    <br />
                    <input type={'email'} placeholder='Enter Your Email' />
                    <br />
                    <input type={'password'} placeholder='Enter Your Password' />
                    <br />
                    <button>Submit</button>
                </form>
            </section>
        </div>
    )
}

export default Sass
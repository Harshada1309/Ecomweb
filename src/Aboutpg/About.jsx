import './About.scss'
import Image1 from './Images/Movweb.jpg'
import Image2 from './Images/Piano.jpg'

const About = () => {
    return(
        <div className="About">
            <section className='Project'>
                <h1>About Projects</h1>
                <div className="Pro1">
                    <img src={Image1} alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum fugit aliquid doloribus voluptate qui quos dolores distinctio quasi quae, animi, earum minus accusantium in molestias, tempore fuga ducimus ipsum aperiam. Saepe, provident sunt ullam excepturi eaque at velit? Amet, quasi.</p>
                </div>
                <div className="Pro2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, id incidunt! Cum, ratione ad hic officia assumenda et. Reprehenderit voluptas ea debitis perferendis animi? Minima odio sunt, voluptate non impedit expedita voluptatum aut tempora cumque provident nisi dolorem saepe cupiditate.</p>
                    <img src={Image2} alt="" />
                </div>
                <div className="pro3">
                    <img src={Image1} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quas ducimus minus aliquid ipsa veritatis odio sit repellendus iure, incidunt voluptatum laborum voluptates? Ratione molestias sint aut porro velit. Suscipit neque necessitatibus ipsa porro dolor quas nostrum non, eos iusto.</p>
                </div>
                <div className="pro4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ab necessitatibus labore, optio, nam, placeat nobis harum quos animi ex unde nostrum nihil modi accusantium? Nulla amet, excepturi suscipit architecto a reiciendis, quod quibusdam tempore laudantium iure hic, earum commodi?</p>
                    <img src={Image2} alt="" />
                </div>
            </section>
        </div>
    )
}

export default About
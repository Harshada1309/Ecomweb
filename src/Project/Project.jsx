import Image1 from './Images/Img1.jpeg'
import Image2 from './Images/Img2.jpeg'
import Image3 from './Images/Img3.jpeg'
import Image4 from './Images/Img4.jpeg'
import Image5 from './Images/Img5.jpeg'
import Image6 from './Images/Img6.jpeg'
import Image7 from './Images/Img7.jpeg'
const Project = () =>{
    return(
        <section>
            <nav className="nav1">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#gallery">Gallery</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className="Homepage">
                <center><h1 id="home">Home</h1></center>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-JDXhb_aHWyjOe0DM3pNbf6du5VpiI1Uvw&usqp=CAU" alt=""  height={'500px'} width={'100%'}/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quo, cumque labore ea odit quod veniam eveniet molestias nesciunt vitae excepturi eius assumenda provident sunt corrupti similique accusamus temporibus totam.</p>
            </div>
            <div className="about">
                <center><h1 id="about">About</h1></center>
                <iframe width="1450" height="500px" src="https://www.youtube.com/embed/d8K04E5App4?si=qQm-jZ-x_qj_FP0T" title="YouTube video player"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <dd><b> As the name reflects, park is developed on concept of seven wonders around the world.
Thought behind this theme, is to let common people know about the wonderful structures built around the world.
Within 1 hector of land parcel 1.great pyramid of Giza, 2.stonehenge, 3.colosseum, 4.leaning tower Pisa, 5.taj mahal, 6.statue of liberty, 7. Eifel tower are the miniatures of actual built structures.
Park attracts the visitors by 3D and 4D entertainment shows as well as the beautiful landscape and illumination. </b></dd>
            </div>
            <div className="gallery">
                <center><h1 id="gallery">Gallery</h1></center>
                <img src={Image1} alt="" />
                <img src={Image2} alt="" />
                <img src={Image3} alt="" />
                <img src={Image4} alt="" />
                <img src={Image5} alt="" />
                <img src={Image6} alt="" />
                <img src={Image7} alt="" />
            </div>
            <div className="contacts">
                <center><h1 id="contact">Contact</h1></center>
            </div>
            <center><table border={'1'} width={''}>
                <thead>
                    <tr>
                        <th>ABC</th>
                        <th>PQR</th>
                        <th>GHJ</th>
                        <th>XYZ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>abc</td>
                        <td>abc</td>
                        <td>abc</td>
                        <td>abc</td>
                    </tr>
                    <tr>
                        <td>abc</td>
                        <td>abc</td>
                        <td>abc</td>
                        <td>abc</td>
                    </tr>
                    <tr>
                        <td>abc</td>
                        <td>abc</td>
                        <td>abc</td>
                        <td>abc</td>
                    </tr>
                    <tr>
                        <td>abc</td>
                        <td>abc</td>
                        <td>abc</td>
                        <td>abc</td>
                    </tr>
                </tbody>
            </table>
            </center>
        </section>
    )
}

export default Project
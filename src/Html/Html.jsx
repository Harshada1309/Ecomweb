import Animal from './Images/Universe.jpg'
import Video1 from './Video/cheetah_-_53486 (540p).mp4'
import Audio1 from './Audio/cartoon-31046.mp3'
const Html = () => {
    return ( 
        <div>
            <center><h1>Welcome to Html</h1></center>
            <img src="https://cdn.pixabay.com/photo/2023/11/16/15/17/sea-8392560_640.jpg" alt=""  height={'500px'} width={'49%'}/>
            <img src={Animal} alt="" height={'500px'} width={'49%'}/>
            <br />
            <a href="https://www.youtube.com/" target={'_blank'} rel='noreferer'>YouTube</a>
            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6xJptj7AVSA?si=wXLC03BpsYc5jldk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4978544449623!2d73.91121207501284!3d18.506391082584404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1c16bfaf76b%3A0xdb993a835fbbba46!2sQspiders%20Pune%20Hadapsar!5e0!3m2!1sen!2sin!4v1700566314588!5m2!1sen!2sin" width="600" height="320"  allowfullscreen="" loading="lazy" ></iframe>
            <video src={Video1} height={'500px'} width={'100%'} autoPlay loop muted></video>
            <audio src={'Audio1'} controls></audio>
            <table border={'1'} width={'50%'}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Designation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>A</td>
                        <td>10</td>
                        <td>DEV</td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td>10</td>
                        <td>DEV</td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td>10</td>
                        <td colSpan={'2'}>DEV</td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td>10</td>
                        <td>DEV</td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td>10</td>
                        <td>DEV</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td rowSpan={'3'}>@copy right Sudesh Gowda</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
} 

export default Html
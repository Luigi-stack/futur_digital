import { Container } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function Footer () {
    return (
        <>
            <Container fluid className="m-0">
                <p className='text-white-50 text-center mb-1'>© Luigi Iossa 2024</p>
                    <p className='text-center'>
                        <a href='https://github.com/Luigi-stack/' className='text-white-50'><FaGithub /></a>
                        <a href='https://www.linkedin.com/in/luigi-iossa-fullstack-developer/' className='mx-3 text-white-50'><FaLinkedinIn /></a>
                        <a href='https://luigi-iossa.netlify.app' className='text-white-50'><CgWebsite /></a>
                    </p>
            </Container>

        </>
    )
}

export default Footer;
import { NavbarProps } from "./Navbar.props";
import styles from './Navbar.module.css';
import cn from 'classnames';
import { NavbarButton } from "../NavbarButton/NavbarButton";
import { Container, Row, Col } from "react-grid-system";

export const Navbar = ({className, ...props}: NavbarProps) => {
    return(
        <div className= {cn(styles.navbar, className)} {...props}>
            <Container fluid>
                <Row>
                    <Col md ={2}></Col>
                    <Col md ={1}>
                        <img className={styles.img} alt = {"logo"} src = {"logo.png"}></img>
                    </Col>
                    <Col md = {1}>
                        <NavbarButton className="ordinary" onClick = {() => alert("Books")}>Books</NavbarButton>
                    </Col>
                    <Col md ={1}>
                        <NavbarButton className="ordinary">My library</NavbarButton>
                    </Col>
                    <Col md ={3}></Col>
                    <Col md ={1}>
                        <NavbarButton className="ordinary">Sing in</NavbarButton>
                    </Col>
                    <Col md ={1}>
                        <NavbarButton className="singup">Sing up</NavbarButton>
                    </Col>
                    <Col md ={2}></Col>


                </Row>
            </Container>

        </div>
    )
}
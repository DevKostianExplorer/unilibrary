import { MainProps } from "./Main.props";
import styles from './Main.module.css';
import cn from 'classnames';
import { Container, Row, Col } from "react-grid-system";
import { BookList } from "../BookList/BookList";
import { Filter } from "../Filter/Filter";
import { Top } from "../Top/Top";
import data from './data.json';

export const Main = ({className, ...props}: MainProps) => {
    const top = data;
    return(
        <div className= {cn(styles.navbar, className)} {...props}>
            <Container fluid>
                <Row>
                    <Col md ={2}></Col>
                    <Col md ={6}>
                        <BookList></BookList>
                    </Col>
                    <Col md ={2}>
                        <Filter></Filter>
                        <Top arr = {Object.values(top)}></Top>
                    </Col>
                    <Col md ={2}></Col>
                </Row>
            </Container>

        </div>
    )
}
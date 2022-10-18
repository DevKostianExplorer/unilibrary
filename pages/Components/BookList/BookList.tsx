import { BookListProps, Books } from "./BookList.props";
import styles from './BookList.module.css';
import cn from 'classnames';
import { Container, Row, Col } from "react-grid-system";
import { NavbarButton } from "../NavbarButton/NavbarButton";
import { BookElement } from "../BookElement/BookElement";
import data from './Data/Data.json';
import { Key } from "react";
import { Book } from "../BookElement/BookElement.props";


export const BookList = ({className,  ...props}: BookListProps) => {
    const books:Books = data;
    return(
        <div className= {cn(styles.booklist, className)} {...props}>
            <Container fluid>
                <Row className={styles.heading}>
                    <Col md ={12}>
                        <h2>Книги</h2>
                    </Col>
                </Row>
                <Row className={styles.sortbox}>
                    <Col md ={1} className={styles.p}>
                        <p>Sort:</p>
                    </Col>
                    <Col md = {2}>
                        <NavbarButton className = {"sortingactive"}>popular</NavbarButton>
                    </Col>
                    <Col md = {2}>
                        <NavbarButton className = {"sorting"}>popular</NavbarButton>
                    </Col>
                </Row>

                {Object.values(books).map((data, index) => data.map((book: Book, i: Key | null | undefined) => 
                                                <Row className = {styles.book} key={i}>
                                                <Col md = {12}>
                                                    <BookElement Book={book}  />
                                                </Col>
                                            </Row>
                    )
                    )}
                
            </Container>

        </div>
    )
}
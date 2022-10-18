/* eslint-disable @next/next/no-img-element */
import { BookElementProps } from "./BookElement.props";
import styles from './BookElement.module.css';
import cn from 'classnames';
import { Container, Row, Col } from "react-grid-system";

export const BookElement = ({className, Book,  ...props}: BookElementProps) => {
    return(
        <div  {...props}>
            
                <Row className= {cn(styles.bookelement, className)}>
                    <Col md ={2} className = {styles.img}  >
                        <img src = {Book.Src ? Book.Src : "blank.png"} alt = "None" width = {"100px"}></img>
                    </Col>
                    <Col md ={7} className = {styles.text}  >
                        <Row className = {styles.title} >
                            <h3 >{Book.Title}</h3>
                        </Row>
                        <Row >
                            <p className = {styles.author}>{Book.Author}</p>
                        </Row>
                        <Row >
                            <p className = {styles.genre}>{Book.Genre}</p>
                        </Row>
                        <Row >
                            <p className = {styles.description}>{Book.Description}</p>
                        </Row>
                        <Row className = {styles.count}>
                            <Col md = {2}>
                                <span className={styles.countdownloads}>{Book.Downloads}</span>
                                
                            </Col>
                            <Col md = {2}>
                                <span className={styles.countviews}>{Book.Views}</span>
                                
                            </Col>
                        </Row>
                        
                    </Col>
                    <Col md ={3} className = {styles.rating}>
                        <span className = {styles.star}>Rating: {Book.Rating}</span>
                        <p>Top:<br></br>
                            #{Book.TopRating} in {Book.Genre}
                        </p>

                    </Col>
                </Row>
            

        </div>
    )
}
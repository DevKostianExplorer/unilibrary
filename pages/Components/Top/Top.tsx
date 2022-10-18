import { topBook, TopProps } from "./Top.props";
import styles from './Top.module.css';
import cn from 'classnames';
import { Container, Row, Col } from "react-grid-system";
import { BookList } from "../BookList/BookList";
import { Filter } from "../Filter/Filter";
import { ReactNode } from "react";
import { Console } from "console";

export const Top = ({className, arr,  ...props}: TopProps) => {
    return(
        <div className= {cn(styles.navbar, className)} {...props}>
            <Container fluid>
                <div>
                    <Row>
                    <h2>Top:</h2>
                </Row>
                {arr[0].map((e, i) =>{
                    return (<div key={i}>
                        <Row>
                        <img src = {e.Src ? e.Src : "blank.png"} alt = "None" width = {"100px"}></img>
                        </Row>
                        <Row>
                            <span>{e.Title}</span>
                        </Row>
                    </div>)
                })}
                </div>

                
                
            </Container>

        </div>
    )
}
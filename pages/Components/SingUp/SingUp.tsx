import { SingUpProps } from "./SingUp.props";
import styles from './SingUp.module.css';
import cn from 'classnames';
import { NavbarButton } from "../NavbarButton/NavbarButton";
import { Container, Row, Col } from "react-grid-system";
import { Modal } from "../Modal/Modal";
import React, { useEffect } from "react";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { Input } from "../Input/Input";

export const SingUp = ({className, ...props}: SingUpProps) => {
    const [isModal, setModal] = React.useState(false);

    return(
        <>
            <NavbarButton className= {cn("singup", className)} onClick={() => setModal(true)} {...props}>Sing up</NavbarButton>
            <Modal

                isVisible={isModal}
                title="Sing Up"
                content={
                <form>
                    <Input title="login" placeholder="Login" check={() => [true, '']} />
                    <input type = "text" placeholder="Login"/>
                    <input type = "text" placeholder="Password"/>
                    <SubmitButton value = "Sing Up" ></SubmitButton>
                </form>}
                footer={<button>Cancel</button>}
                onClose={async () => setModal(false)}
            />
        </>
    )
}
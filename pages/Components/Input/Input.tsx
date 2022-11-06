import { InputProps } from "./Input.props";
import styles from './Input.module.css';
import cn from 'classnames';
import Star from './Star.svg';
import Arrow from './Arrow.svg';
import Line from './Line.svg';
import { useState } from "react";


export const Input = ({children, title, icon = 'none',keys, check}:InputProps):JSX.Element => {
    const [active, setActive] = useState<boolean>(false);
    const [correct, setCorrect] = useState<[boolean, string]>([true, '']);
    const [editted, setEditted] = useState<boolean>(false);

    const Icon = (icon: string):JSX.Element => {
        switch (icon) {
            case 'star':
                return <Star className = {styles.icon}/>;
            case 'arrow':
                return <button className = {
                    cn(styles.arrow, {[styles.rotate]: active == true})}
                        onClick = {arrow}
                    ><Arrow /></button>;
            default: return <></>
        }
    }

    const arrow = () => {
        setActive(!active)
    }

    return(
    <div className = {cn(styles.div,{
        [styles.correct]: correct[0],
        [styles.err]: !correct[0]})
        }>

        <label className={styles.label}>{title}</label>
            <input className={cn(styles.input, {[styles.editted]: editted}
                )} onChange = {(event) => setCorrect(check(event.target.value, keys))} defaultValue = {children == undefined ? '': children + '' } onFocus = {(event) => {if (!editted) {event.target.value = '';setEditted(!editted)}}}></input>
            {Icon(icon)}
            <Line className = {styles.line}/>
        <label className = {styles.errorMessage}>{correct[1]}</label>
    </div>

    )
}


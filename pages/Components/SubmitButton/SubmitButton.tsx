import cn from "classnames"
import styles from "./SubmitButton.module.css"
import {SubmitButtonProps} from "./SubmitButton.props"


export function SubmitButton({className, ...props}: SubmitButtonProps) {
    return(
        <input className = {cn(styles.button, className)} type={"submit"}  {...props}></input>
    )
}


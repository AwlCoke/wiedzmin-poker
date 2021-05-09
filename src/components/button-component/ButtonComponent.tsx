// при нажатии на кнопку запустить сагу
// сгенерировать комбинацию
// в стор редакса записать то, что выпало

// комбинации для количества игроков

import { FC } from "react";
import { Button } from "@material-ui/core";

export interface ButtonComponentProps {
    variant: 'outlined';
    color: 'primary';
    onClick: () => void;
}

export const ButtonComponent: FC<ButtonComponentProps> = ({ ...props }) => {
    return (
        <Button { ...props }>
            Новая игра
        </Button>
    )
}
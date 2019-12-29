
export interface IButtonProps {
    label: string;
    display?: 'fab' | 'icon' | 'stroked' | 'flat' | 'raised' | 'basic';
    color?: 'primary' | 'secondary' | 'warn';
    size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
}

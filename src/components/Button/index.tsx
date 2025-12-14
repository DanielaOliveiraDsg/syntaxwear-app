// custom type created for the prop 'children'
interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg'
}

export const Button = ({children, variant = 'primary', size = 'md'}: ButtonProps) => {
    
    //button styles to be applied as props
    const buttonStyles = {
        base: 'flex justify-center items-center gap-2 text-nowrap leading-none hover:cursor-pointer  transition-colors duration-200 transition font-medium rounded-full py-2.5',
        variant: {
            primary: 'bg-white text-[#6329A2] hover:bg-gray-200',
            secondary: 'bg-transparent border border-white text-white hover:bg-white hover:text-gray-800'
        },
        size: {
            sm: 'px-5',
            md: 'px-8',
            lg: 'px-10'
        }
    }

    // variable to organize how the styles will applied to button
    const className = `${buttonStyles.base} ${buttonStyles.variant[variant]} ${buttonStyles.size[size]}`;

    return (
        <button className={className}>{children}</button>
    )
};
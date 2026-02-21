// custom type created for the prop 'children'
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
}: ButtonProps) => {
  //button styles to be applied as props
  const buttonStyles = {
    base: 'flex justify-center items-center gap-2 text-nowrap leading-none hover:cursor-pointer  transition-colors duration-200 transition font-semibold rounded-full py-2.5',
    variant: {
      primary: 'bg-background text-primary hover:bg-gray-200',
      secondary:
        'bg-transparent border border-white text-background hover:bg-background hover:text-primary',
    },
    size: {
      sm: 'px-5',
      md: 'px-8',
      lg: 'px-10',
    },
  };

  // variable to organize how the styles will applied to button
  const className = `${buttonStyles.base} ${buttonStyles.variant[variant]} ${buttonStyles.size[size]}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

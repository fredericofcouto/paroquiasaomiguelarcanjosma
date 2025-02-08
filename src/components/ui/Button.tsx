interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  const variants = {
    primary: 'bg-blue-800 text-white hover:bg-blue-700',
    secondary: 'bg-white/10 text-white hover:bg-white/20',
    outline: 'border border-blue-800 text-blue-800 hover:bg-blue-50'
  };

  return (
    <button 
      className={`px-6 py-2 rounded-full transition-all ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
} 
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
}

export interface SplitSectionProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  reversed?: boolean;
  id?: string;
}

export interface PrincipleItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

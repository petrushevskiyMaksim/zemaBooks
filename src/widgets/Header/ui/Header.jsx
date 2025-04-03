import { useState } from 'react';
import { Logo } from 'shared/';
import { Menu } from 'shared/';
import { MobileMenu } from 'widgets/';
import { BurgerMenu } from 'widgets/';
import { RxCross2 } from 'react-icons/rx';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Button } from 'components/ui/button';
import { cn } from 'lib/utils';

// after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-gradient-to-r after:from-indigo-500 from-10% after:via-sky-500 via-30% after:to-to-emerald-500 to-90%

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClickButton = () => {
		setIsOpen(prev => !prev);
	};

	return (
		<header className='container flex justify-between items-center min-h-18 relative'>
			<Logo />
			<button
				onClick={handleClickButton}
				className={cn(
					'text-secondary transition-all duration-300',
					isOpen ? 'rotate-360 bg-destructive' : 'rotate-0 bg-accent'
				)}
			>
				{isOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
			</button>
			<div className='absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent from-0% via-secondary via-50% to-transparent to-100%'></div>
		</header>
	);
}

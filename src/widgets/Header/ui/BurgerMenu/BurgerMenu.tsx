import { useState } from 'react';

export default function BurgerMenu() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<button
			onClick={() => setIsOpen(!isOpen)}
			className='relative h-8 w-8 focus:outline-none'
			aria-label='Меню'
		>
			<svg
				width='24'
				height='24 '
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='absolute inset-0 transition-all duration-300'
			>
				{/* Верхняя линия */}
				<path
					d='M1 6H20'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					className={`transition-all duration-300 ${
						isOpen ? 'translate-y-[-4px] translate-x-[4px] rotate-45' : ''
					}`}
				/>
				{/* Средняя линия */}
				<path
					d='M4 12H20'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					className={`transition-all duration-300 ${
						isOpen ? 'opacity-0' : 'opacity-100'
					}`}
				/>
				{/* Нижняя линия */}
				<path
					d='M3 18H21'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					className={`transition-all duration-300 ${
						isOpen
							? 'translate-y-[5px] translate-x-[-13px] rotate-[-45deg]'
							: ''
					}`}
				/>
			</svg>
		</button>
	);
}

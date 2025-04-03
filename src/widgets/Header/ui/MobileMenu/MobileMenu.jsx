import { NavLink } from 'shared/';
import { useLockBody } from 'widgets';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';
import { VisuallyHidden } from 'shared';
import { cn } from '@/lib/utils';

export default function MobileMenu({ isOpen, onClose }) {
	useLockBody(isOpen);

	return (
		<Sheet open={isOpen} onOpenChange={onClose}>
			<SheetContent
				side='top'
				className={cn('w-full h-[400px] bg-black p-0 border-0')}
			>
				<SheetHeader className='flex-row justify-end items-center p-4'>
					<VisuallyHidden>
						<SheetTitle>Меню {/* Скрытый заголовок */}</SheetTitle>
					</VisuallyHidden>
				</SheetHeader>

				{/* Ваше меню */}
				<nav className='px-6 py-12'>
					<ul className='space-y-8 text-white text-2xl'>
						<li>
							<a href='#' onClick={onClose}>
								Главная
							</a>
						</li>
						<li>
							<a href='#' onClick={onClose}>
								Услуги
							</a>
						</li>
						<li>
							<a href='#' onClick={onClose}>
								Контакты
							</a>
						</li>
					</ul>
				</nav>
			</SheetContent>
		</Sheet>
	);
}

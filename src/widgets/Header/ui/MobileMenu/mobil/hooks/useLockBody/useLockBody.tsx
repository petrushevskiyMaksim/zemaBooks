import { useEffect } from 'react';

export default function useLockBody(locked = true) {
	useEffect(() => {
		if (locked) {
			document.body.style.overflow = 'hidden';
			return () => {
				document.body.style.overflow = '';
			};
		}
	}, [locked]);
}

import { PropsInterface } from 'models/layout.model';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';

const Footer = dynamic(() => import('components/Footer'));
const Meta = dynamic(() => import('components/Meta'));
const Nav = dynamic(() => import('components/Nav'));
const ProgressBarScrolling = dynamic(
	() => import('components/ProgressBarScrolling'),
);

const Layout: FC<PropsInterface> = (props) => {
	const { customTitle, description, image, slug, children } = props;
	const [path, setPath] = useState('');
	const target = useRef(null);
	const router = useRouter();

	useEffect(() => {
		setPath(router.pathname);
	}, [router.pathname]);

	return (
		<>
			<Meta
				customTitle={customTitle}
				description={description}
				image={image}
				slug={slug}
			/>
			<ProgressBarScrolling target={target} />
			<Nav path={path} />
			<main className='container-fluid' ref={target}>
				{children}
				<Footer />
			</main>
		</>
	);
};

export default Layout;

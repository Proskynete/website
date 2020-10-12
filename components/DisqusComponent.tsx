import { DiscussionEmbed } from 'disqus-react';
import React from 'react';

interface DiscusInterface {
	path: string;
	id: string;
	title: string;
}

const DisqusComponent = (props: DiscusInterface) => {
	const { path, id, title } = props;

	const disqusShortName = process.env.DISQUS_SHORT_NAME;

	const configDisqus = {
		url: `https://eduardoalvarez/${path}`,
		identifier: id,
		title: title,
	};

	return (
		<section className='disqus'>
			<article className='disqus-inner'>
				<DiscussionEmbed shortname={disqusShortName} config={configDisqus} />
			</article>
		</section>
	);
};

export default DisqusComponent;

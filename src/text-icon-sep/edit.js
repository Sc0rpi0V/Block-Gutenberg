/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

const { select, subscribe } = wp.data;

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import Inspector from './inspector'

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {

	const postType = wp.data.select('core/editor').getCurrentPostType();
	var tpl = select( 'core/editor' ).getEditedPostAttribute( 'template' );
	var cssModifier = "";

	switch (tpl){
		case 'templates/solutions-expertises.php' :
			cssModifier = 'text-icon-sep--solutions-expertises';
			break
		case 'templates/radd.php' :
			cssModifier = 'text-icon-sep--radd';
			break;
		case 'templates/fondation.php' : 
			cssModifier = 'text-icon-sep--fondation';
			break;
		default: 
			cssModifier = 'text-icon-sep--' + postType;
	}

	const {attributes, setAttributes} = props;

	const blockProps = useBlockProps();
	const ALLOWED_BLOCKS = ['core/paragraph', 'core/button', 'Gutenberg/separator'];
	const TEMPLATE = [
		['core/group', { className: "text-icon-sep__inner container--sm" },
			[
				['core/group', { className: "text-icon-sep__content" },
					[
						['core/paragraph', { placeholder: __('Texte', 'Gutenberg-back'), className: "text-icon-sep__text-content" }],
						['core/button', { className: "text-icon-sep__btn btn-dark primary datalayer-btn" }]
					]
				],
			]
		]
	];

	subscribe(() => {
		const tpl = select( 'core/editor' ).getEditedPostAttribute( 'template' );

		let cssModifier = "";

		switch (tpl){
			case 'templates/solutions-expertises.php' :
				cssModifier = 'text-icon-sep--solutions-expertises';
				break
			case 'templates/radd.php' :
				cssModifier = 'text-icon-sep--radd';
				break;
			case 'templates/fondation.php' : 
				cssModifier = 'text-icon-sep--fondation';
				break;
			default: 
				cssModifier = 'text-icon-sep--' + postType;
		}

		let textIconBlock = document.querySelector('.wp-block-Gutenberg-text-icon-sep');

		if(document.body.contains(textIconBlock)){
			let textIconInner = textIconBlock.querySelector('.text-icon-sep');

			if(textIconInner.classList.length === 2) {
				textIconInner.classList.remove(textIconInner.classList[1]);
				textIconInner.classList.add(cssModifier);
			}
		}
	});

	return (
		<>
			<Inspector 
				{...props}
			/>

			<div {...blockProps}>
				<div className={'text-icon-sep ' + cssModifier }>
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
						template={TEMPLATE}
						templateLock="all"
					/>
					<div className={"text-icon-sep__separator separators separators--" + props.attributes.style}></div>
				</div>
			</div>
		</>
	);
}

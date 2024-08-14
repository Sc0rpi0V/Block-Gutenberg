/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps, 
	MediaUpload, 
	RichText 
} from '@wordpress/block-editor';

import {
	Button,
} from '@wordpress/components';

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
	const { attributes, setAttributes } = props

	const renderMediaButton = (image, open) => {
		const addMediaButton =
			<Button
				onClick={open}
				variant="primary"
				style={{
					marginBottom: '8px',
					marginRight: '4px'
				}}
			>
				{(image.url) ? __('Remplacer image', 'Gutenberg-back') : __('Mettre une image', 'Gutenberg-back')}
			</Button>
		return (
			<>
				{addMediaButton}
			</>
		)
	}


	const renderImageSide = <>
		{
			attributes.heading_image_side.url ? 
				<img src={attributes.heading_image_side.url} />
				: ''
		}
		<MediaUpload
			allowedTypes={['image']}
			value={attributes.heading_image_side}
			onSelect={(val) => setAttributes({ heading_image_side: val })}
			render={({ open }) => { return renderMediaButton(attributes.heading_image_side, open, 'heading_image_side') }}
		/>
		{ 
			attributes.heading_image_side ?
				<Button
					isDestructive
					className="remove-image"
					label={__('Retirer', 'Gutenberg-back')}
					onClick={() => setAttributes({ heading_image_side: '' })}
					style={{
						marginBottom: '8px'
					}}
				>
					{__('Supprimer', 'Gutenberg-back')}
				</Button>
			: ''
		}
	</>

	const renderImageAfter = <>
		{attributes.heading_image_after.url ?
			<img src={attributes.heading_image_after.url} />
			: ''
		}
		<MediaUpload
			allowedTypes={['image']}
			value={attributes.heading_image_after}
			onSelect={(val) => setAttributes({ heading_image_after: val })}
			render={({ open }) => { return renderMediaButton(attributes.heading_image_after, open, 'heading_image_after') }}
		/>
		{ 
			attributes.heading_image_after ? 
				<Button
					isDestructive
					className="remove-image"
					label={__('Retirer', 'Gutenberg-back')}
					onClick={() => setAttributes({ heading_image_after: '' })}
					style={{
						marginBottom: '8px'
					}}
				>
					{__('Supprimer', 'Gutenberg-back')}
				</Button>
			: ''
		}
	</>

	return (
		<>
		<Inspector 
				{...props}
		/>
		<div {...useBlockProps()}>
			<div className={"admin-highlight-content admin-highlight-content--img-" + attributes.heading_affichage}>
				<div className="admin-highlight-content__inner">
					<div className="admin-highlight-content__col-content">
						<RichText
							tagName={"h" + attributes.overtitleLevel}
							className={"block-heading__title-small"}
							placeholder={__('Catégorie', 'Gutenberg-back')}
							allowedFormats={[]}
							value={attributes.overtitle}
							onChange={(val) => setAttributes({ overtitle: val })}
						/>
						<RichText
							tagName={"h" + attributes.titleLevel}
							className={"block-heading__title"}
							placeholder={__('Titre', 'Gutenberg-back')}
							value={attributes.title}
							allowedFormats={['core/text-color']}
							onChange={(val) => setAttributes({ title: val })}
						/>
						<RichText
							className={"block-heading__desc"}
							placeholder={__('Description', 'Gutenberg-back')}
							value={attributes.description}
							onChange={(val) => setAttributes({ description: val })}
						/>
					</div>
					<div className="highlight-content__col-img">{renderImageSide}</div>
				</div>
				<div className="highlight-content__bottom-img">{renderImageAfter}</div>
			</div>
		</div>
		</>
	);
}
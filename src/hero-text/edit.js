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
import { RichText, useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	ToggleControl
} from '@wordpress/components'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {

	const {attributes, setAttributes} = props;

	const TEMPLATE = [['yoast-seo/breadcrumbs']];

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Options du bloc', 'Gutenberg-back')} initialOpen={true}>
					<PanelRow>
						<ToggleControl
							label={__('Afficher le fil d\'ariane', 'Gutenberg-block')}
							checked={attributes.showBreadcrumb}
							onChange={() => props.setAttributes({ showBreadcrumb: !attributes.showBreadcrumb })}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				{attributes.showBreadcrumb ? 
					<div className="hero-breadcrumb">
						<InnerBlocks
							template={TEMPLATE}
							templateLock="all"
						/>
					</div>
				: ''}
				<div class="hero-text">
					<RichText
						tagName="h1"
						className="hero-text__title"
						allowedFormats={['core/text-color']}
						placeholder={__('Titre', 'Gutenberg-back')}
						value={attributes.title}
						onChange={(val) => setAttributes({ title: val })}
					/>
				</div>
			</div>
		</>
	);
}

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
	InspectorControls,
} from '@wordpress/block-editor';

import {
    PanelBody,
	PanelRow,
	ButtonGroup,
	Button
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

	const { attributes, setAttributes } = props;
	const blockProps = useBlockProps();

	

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title={__('Style du séparateur', 'Gutenberg-back')} initialOpen={ true }>
					<PanelRow>
						<ButtonGroup>
							{ ['1', '2', '3', '4'].map( (nbr) => (
								<Button
									isLarge
									variant={ props.attributes.style == nbr ? 'primary' : '' }
									onClick={ () => props.setAttributes( { style: nbr } ) }
								>
									{ nbr === '1' ?
										(
											__("Vagues", "Gutenberg-back")
										) :  nbr === '2' ? (
											__("Chevrons", "Gutenberg-back")
										) : nbr === '3' ? (
											__("Accents", "Gutenberg-back")
										) : nbr === '4' ? (
											__("Points", "Gutenberg-back")	
										) : ''
									}
								</Button>
							) ) }
						</ButtonGroup>
					</PanelRow>
				</PanelBody>
    		</InspectorControls>

			<div className={'separators separators--' + attributes.style}></div>
		</div>
	);
}

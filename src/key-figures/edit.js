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
	RichText,
	URLInput,
} from '@wordpress/block-editor';

import {
	Button,
	TextControl
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

	const {attributes, setAttributes} = props;

	const updateElement = (elt, object, index) => {
		const tab = (attributes.keyItems) ? [...attributes.keyItems] : []
		const newElt = Object.assign({}, elt, object)

		tab[index] = newElt

		return tab
	}

	const addElement = () => {
		const tab = (attributes.keyItems) ? [...attributes.keyItems] : []

		tab.push({
			title: '',
			content: '',
		})

		return tab
	}

	const deleteElement = (index) => {
		const tab = (attributes.keyItems) ? [...attributes.keyItems] : []

		tab.splice(index, 1);

		return tab
	}

	const renderkeyItems = attributes.keyItems.map((keyItem, index) => {
		return (
			<>
				{(attributes.keyItems.length > 0) ? (
					<div data-id={index} className="key-figures__item key-item" >
						<RichText
							tagName="span"
							className={"key-item__number"}
							placeholder={__('Chiffre clé', 'Gutenberg-back')}
							value={keyItem.title}
							onChange={(title) => setAttributes({ keyItems: updateElement(keyItem, { title }, index) })}
						/>
						<RichText
							tagName="div"
							className="key-item__label"
							placeholder={__('Description du chiffre clé', 'Gutenberg-back')}
							value={keyItem.content}
							onChange={(content) => setAttributes({ keyItems: updateElement(keyItem, { content }, index) })}
						/>

						<Button
							isDestructive
							className="removeKeyNumber"
							variant="secondary"
							icon="no-alt"
							onClick={() => { setAttributes({ keyItems: deleteElement(index) }) }}
						>
							{__('Supprimer un chiffre clé', 'Gutenberg-back')}
						</Button>
					</div>
				) : ''}
			</>
		)
	})

	return (
		<>
			<Inspector 
				{...props}
			/>

			<div { ...useBlockProps() }>
				<div className="key-figures editor-key-figures">
					<div className="key-figures__inner">
						<div className={"key-figures__heading key-figures__heading--" + attributes.headAlign}>
							<RichText
								tagName={"h" + attributes.overtitleLevel}
								className={"block-heading__overtitle"}
								placeholder={__('Sur-titre', 'Gutenberg-back')}
								allowedFormats={[]}
								value={attributes.overtitle}
								onChange={(val) => props.setAttributes({overtitle: val})}
							/>
							<RichText
								tagName={"h" + attributes.titleLevel}
								className={"block-heading__title"}
								allowedFormats={['core/text-color']}
								placeholder={__('Titre', 'Gutenberg-back')}
								value={attributes.title}
								onChange={(val) => props.setAttributes({title: val})}
							/>
							<RichText
								tagName="p"
								className={"block-heading__description"}
								placeholder={__('Description', 'Gutenberg-back')}
								allowedFormats={[]}
								value={attributes.description}
								onChange={(val) => props.setAttributes({description: val})}
							/>
						</div>
						<div className="key-figures__items">
							{renderkeyItems}
						</div>
						<div className="key-figures__items-add">
							<Button
								disabled={attributes.keyItems.length === 6 ? true : false}
								className="is-aligned-center"
								icon="plus"
								variant="primary"
								onClick={() => { setAttributes({ keyItems: addElement() }) }}
							>
								{__('Ajouter un élément', 'Gutenberg-back')}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
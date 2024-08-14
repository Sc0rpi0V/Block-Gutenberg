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
	RichText 
} 
from '@wordpress/block-editor';
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
	const { attributes, setAttributes } = props


	const updateElement = (elt, object, index) => {
		const tab = (attributes.liste_cta) ? [...attributes.liste_cta] : []
		const newElt = Object.assign({}, elt, object)

		tab[index] = newElt

		return tab
	}


	const addElement = () => {
		const tab = (attributes.liste_cta) ? [...attributes.liste_cta] : []

		tab.push({
			title: '',
			link_url: '',
			link_title: '',
			link_title_mobile: ''
		})
		return tab
	}

	const deleteElement = (index) => {
		const tab = (attributes.liste_cta) ? [...attributes.liste_cta] : []

		tab.splice(index, 1);

		return tab
	}

	const renderListe = attributes.liste_cta.map((cta, index) => {
		return (

			<div data-id={index} className="liste-cta__item" >
				<RichText
					tagName="div"
					className={"liste-cta__title"}
					placeholder={__('Titre', 'Gutenberg-back')}
					value={cta.title}
					onChange={(title) => setAttributes({ liste_cta: updateElement(cta, { title }, index) })}
				/>
				<TextControl
					label={__('Lien', 'Gutenberg-back')}
					tagName="p"
					className=""
					placeholder={__('Lien URL', 'Gutenberg-back')}
					value={cta.link_url}
					onChange={(link_url) => setAttributes({ liste_cta: updateElement(cta, { link_url }, index) })}
				/>
				<TextControl
					label={__('Titre du lien', 'Gutenberg-back')}
					tagName="p"
					className=""
					placeholder={__('Lien Libellé', 'Gutenberg-back')}
					value={cta.link_title}
					onChange={(link_title) => setAttributes({ liste_cta: updateElement(cta, { link_title }, index) })}
				/>
				<TextControl
					label={__('Titre du lien en mobile', 'Gutenberg-back')}
					tagName="p"
					className=""
					placeholder={__('Lien Libellé mobile', 'Gutenberg-back')}
					value={cta.link_title_mobile}
					onChange={(link_title_mobile) => setAttributes({ liste_cta: updateElement(cta, { link_title_mobile }, index) })}
				/>
				<Button
					isDestructive
					className="liste-cta__item-remove"
					icon="no-alt"
					onClick={() => { setAttributes({ liste_cta: deleteElement(index) }) }}
				>
					{__('Supprimer un élément', 'Gutenberg-back')}
				</Button>
			</div>
		)
	})

	return (
		<>
			<Inspector 
				{...props}
			/>

			<div {...useBlockProps()}>
				<div className="liste-cta">
					<RichText
						tagName={"h" + attributes.overtitleLevel}
						className={"block-heading__title-small"}
						placeholder={__('Catégorie', 'Gutenberg-back')}
						value={attributes.overtitle}
						allowedFormats={[]}
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
					<div className="liste-cta__inner">{renderListe}</div>
					<div className="liste-cta__btn-add">
						<Button
							disabled={attributes.liste_cta.length === 4 ? true : false}
							className="is-aligned-center"
							icon="plus"
							variant="primary"
							onClick={() => { setAttributes({ liste_cta: addElement() }) }}
						>
							{__('Ajouter un élément', 'Gutenberg-back')}
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}

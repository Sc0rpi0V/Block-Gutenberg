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
	MediaUploadCheck,
	RichText, 
	InspectorControls,
} from '@wordpress/block-editor';

import {
	Placeholder,
	PanelBody,
	PanelRow,
	ButtonGroup,
	Button,
	TextControl
} from '@wordpress/components'

import shape from './shape';

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

	const { attributes, setAttributes } = props

	const onSelectImage = picture => {
		props.setAttributes( {
			pictureId: picture.id,
			pictureSrc: picture.url,
			pictureAlt: picture.alt,
		});
	};

	const onRemoveImage = () => {
		props.setAttributes({
			pictureId: null,
			pictureSrc: null,
			pictureAlt: null,
		});
	};

	const updateElement = (elt, object, index) => {
		const tab = (attributes.cardItems) ? [...attributes.cardItems] : []
		const newElt = Object.assign({}, elt, object)

		tab[index] = newElt

		return tab
	}

	const addElement = () => {
		const tab = (attributes.cardItems) ? [...attributes.cardItems] : []

		tab.push({
			title: '',
			content: '',
		})

		return tab
	}

	const deleteElement = (index) => {
		const tab = (attributes.cardItems) ? [...attributes.cardItems] : []

		tab.splice(index, 1);

		return tab
	}

	const renderCardItems = attributes.cardItems.map((cta, index) => {
		return (
			<>
			{(attributes.cardItems.length > 0) ? (
				<div data-id={index} className="image-card__content-item" >
					<RichText
						tagName="h5"
						className={"image-card__content-item-title"}
						placeholder={__('Titre', 'Gutenberg-back')}
						value={cta.title}
						onChange={(title) => setAttributes({ cardItems: updateElement(cta, { title }, index) })}
					/>
					<TextControl
						tagName="p"
						className="image-card__content-item-descr"
						placeholder={__('Description courte', 'Gutenberg-back')}
						value={cta.content}
						onChange={(content) => setAttributes({ cardItems: updateElement(cta, { content }, index) })}
					/>

					<Button
						isDestructive
						className="image-card__content-item-remove"
						variant="secondary"
						icon="no-alt"
						onClick={() => { setAttributes({ cardItems: deleteElement(index) }) }}
					>
						{__('Supprimer un élément', 'Gutenberg-back')}
					</Button>
				</div>
			) : ''}
			</>
		)
	})

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Options du bloc', 'Gutenberg-back')} initialOpen={ true }>
					<PanelRow>

						<ButtonGroup>
							{ ['1', '2', '3', '4', '5', '6'].map( (nbr) => (
								<Button
									isLarge
									variant={ attributes.cardTitleTag == nbr ? 'primary' : '' }
									onClick={ () => setAttributes( { cardTitleTag: nbr } ) }
								>
									{'h' + nbr}
								</Button>
							) ) }
						</ButtonGroup>
					</PanelRow>
				</PanelBody>
    		</InspectorControls>

			<div { ...useBlockProps() }>
				<div className="image-card">
					<div className="image-card__img">
						{ ! attributes.pictureId ? (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ onSelectImage }
									allowedTypes={ [ 'image' ] }
									value={ attributes.pictureId }
									render={ ( { open } ) => (
										<Placeholder
											icon="images-alt"
											label={ __( 'Image', 'Gutenberg-back' ) }
											instructions={ __( 'Séléctionner une image', 'Gutenberg-back' ) }
										>
											<Button
												variant="secondary"
												isLarge
												onClick={ open }
												icon="upload"
											>
												{ __( 'Ajouter', 'Gutenberg-back' ) }
											</Button>
										</Placeholder>
									) }
								/>
							</MediaUploadCheck>
						) : (
							<figure className="">
								<img
									src={ attributes.pictureSrc }
									alt={ attributes.pictureAlt }
								/>

								{ props.isSelected && (

									<Button
										className=""
										onClick={ onRemoveImage }
										icon="dismiss"
									>
										{ __( 'Supprimer l\'image', 'Gutenberg-block' ) }
									</Button>
								) }
							</figure>
						) }
						<div className="image-card__img-shape">
							{shape}
						</div>
					</div>
					<div className="image-card__content">
						<div className="image-card__content-inner">
							<RichText
									tagName={'h' + attributes.cardTitleTag}
									className={"image-card__content-title"}
									placeholder={__('Titre de la carte', 'Gutenberg-back')}
									value={attributes.cardTitle}
									onChange={(val) => props.setAttributes({cardTitle: val})}
							/>
							<div className="">
								<div className="image-card__content-items">
									{renderCardItems}
								</div>
								<div className="image-card__content-add">
									<Button
										className="is-aligned-center"
										icon="plus"
										variant="primary"
										onClick={() => { setAttributes({ cardItems: addElement() }) }}
									>
										{__('Ajouter un élément', 'Gutenberg-back')}
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

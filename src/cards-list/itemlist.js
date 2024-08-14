import { __ } from '@wordpress/i18n';

import {
    MediaUpload, 
	MediaUploadCheck,
	RichText, 
    URLInput
} from '@wordpress/block-editor';

import {
    Placeholder,
	Button,
    TextControl,
} from '@wordpress/components';

export default function Itemlist(props) {

    const { attributes, setAttributes } = props;

    const updateElement = (elt, object, index) => {
		const tab = (attributes.cardItems) ? [...attributes.cardItems] : []
		const newElt = Object.assign({}, elt, object)

		tab[index] = newElt

		return tab
	}

	const addElement = () => {
		const tab = (attributes.cardItems) ? [...attributes.cardItems] : []

		tab.push({
            pictureId: 0,
            pictureSrc: '',
            pictureAlt: '',
            tag: '',
            title: '',
			excerpt: '',
            link_title: '',
            link: ''
		})

		return tab
	}

	const deleteElement = (index) => {
		const tab = (attributes.cardItems) ? [...attributes.cardItems] : []

		tab.splice(index, 1);

		return tab
	}

    const renderCardItems = attributes.cardItems.map((cardItem, index) => {
		return (
			<>
                {(attributes.cardItems.length > 0) ? (
                    <div data-id={index} className="cards-list__item">
                        <div className="cards-list__item-img-inner">
                            { ! cardItem.pictureId ? (
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={(img) => setAttributes({
                                                cardItems: updateElement(cardItem,
                                                    {
                                                    pictureId: img.id,
                                                    pictureSrc: img.url,
                                                    pictureAlt: img.alt
                                                }, 
                                                index
                                            )}
                                        )}
                                        allowedTypes={ [ 'image' ] }
                                        value={ cardItem.pictureId }
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
                                <>
                                    <figure className="cards-list__item-img-render">
                                        <img
                                            src={ cardItem.pictureSrc }
                                            alt={ cardItem.pictureAlt }
                                        />
                                    </figure>
                                    <Button
                                        className=""
                                        onClick={() => setAttributes({
                                                cardItems: updateElement(cardItem,
                                                    {
                                                    pictureId: 0,
                                                    pictureSrc: '',
                                                    pictureAlt: ''
                                                }, 
                                                index
                                            )}
                                        )}
                                        icon="dismiss"
                                    >
                                        { __( 'Supprimer l\'image', 'Gutenberg-block' ) }
                                    </Button>
                                </>
                            ) }
                        </div>

                        {
                            attributes.cardItemsStyle === 1 ?
                            <RichText
                                tagName="span"
                                className={"cards-list__item-tag"}
                                allowedFormats={['']}
                                placeholder={__('Flag de la carte', 'Gutenberg-back')}
                                value={cardItem.tag}
                                onChange={(tag) => setAttributes({
                                        cardItems: updateElement(cardItem, { tag }, index)
                                    }
                                )}
                            />
                            : ''
                        }

                        <RichText
                            tagName="div"
                            className={"cards-list__item-title"}
                            placeholder={__('Titre de la carte', 'Gutenberg-back')}
                            allowedFormats={['']}
                            value={cardItem.title}
                            onChange={(title) => setAttributes({
                                    cardItems: updateElement(cardItem, { title }, index)
                                }
                            )}
                        />

                        {
                            attributes.cardItemsStyle === 2 ?
                                <RichText
                                    tagName="div"
                                    className={"cards-list__item-excerpt"}
                                    placeholder={__('Extrait de la carte', 'Gutenberg-back')}
                                    allowedFormats={['']}
                                    value={cardItem.excerpt}
                                    onChange={(excerpt) => setAttributes({
                                            cardItems: updateElement(cardItem, { excerpt }, index)
                                        }
                                    )}
                                />
                            : ''
                        }

                        <div className="cards-list__item-btn">
                            <TextControl
								placeholder={ __( 'Intitulé du lien', 'Gutenberg-back' ) }
								value={ cardItem.link_title }
								onChange={(btnText) => setAttributes({
                                        cardItems: updateElement(cardItem, { link_title: btnText }, index)
                                    }
                                )}
							/>
                            {
                            attributes.cardItemsStyle === 2 ?
                                <span className="dashicon dashicons dashicons-arrow-right-alt"></span>
                            : ''
                            }
                        </div>

                        <div className="cards-list__item-url">
                               <URLInput 
                                    value={ cardItem.link }
                                    className="faq__item-url-selector"
                                    onChange={(link) => setAttributes({
                                            cardItems: updateElement(cardItem, { link }, index)
                                        }
                                    )}
                               /> 
                        </div>

                        <div className="cards-list__item-btn">
                            <Button
                                isDestructive
                                className="removeCardItem"
                                variant="secondary"
                                icon="no-alt"
                                onClick={() => { setAttributes({ cardItems: deleteElement(index) }) }}
                            >
                                {__('Supprimer la carte', 'Gutenberg-back')}
                            </Button>
                        </div>
                    </div>
                ) : ''}
            </>
        )
    })

    return (
        <>
            <div className={"cards-list__items cards-list__items--" + attributes.cardItemsStyle}>
                {renderCardItems}
            </div>
            <div className="cards-list__items-add">
                <Button
                    className="is-aligned-center"
                    icon="plus"
                    variant="primary"
                    onClick={() => { setAttributes({
                                cardItems: addElement(),
                            })
                        }
                    }
                >
                    {__('Ajouter une carte', 'Gutenberg-back')}
                </Button>
            </div>
        </>
    )
}
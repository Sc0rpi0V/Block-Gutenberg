import { __ } from '@wordpress/i18n';

import {
	RichText, 
    URLInput
} from '@wordpress/block-editor';

import {
    TextControl,
    Tip,
	Button,
} from '@wordpress/components';

export default function Itemlist(props) {

    const { attributes, setAttributes } = props;

    const updateElement = (elt, object, index) => {
		const tab = (attributes.cards) ? [...attributes.cards] : []
		const newElt = Object.assign({}, elt, object)

		tab[index] = newElt

		return tab
	}

	const addElement = () => {
		const tab = (attributes.cards) ? [...attributes.cards] : []

		tab.push({
			title: '',
            btnText: '',
            btnUrl: ''
		})

		return tab
	}

	const deleteElement = (index) => {
		const tab = (attributes.cards) ? [...attributes.cards] : []

		tab.splice(index, 1);

		return tab
	}

    const renderCards = attributes.cards.map((cardItem, index) => {
		return (
			<>
                {(attributes.cards.length > 0) ? (
                    <div data-id={index} className="blue-cards__item">
                        <RichText
                            tagName="h4"
                            className="blue-cards__item-title"
                            placeholder={__('Titre de la carte', 'Gutenberg-back')}
                            allowedFormats={[]}
                            value={cardItem.title}
                            onChange={(title) => setAttributes({
                                cards: updateElement(cardItem, { title }, index)
                            }
                        )}
                        />
                        <div className="blue-cards__item-btn">
                            <URLInput 
                                value={ cardItem.btnUrl }
                                className="blue-cards__item-btn-url"
                                onChange={(btnUrl) => setAttributes({
                                        cards: updateElement(cardItem, { btnUrl }, index)
                                    }
                                )}
                            /> 
                            <div className="blue-cards__item-btn-text">
                                <TextControl
                                    placeholder={__('Intitulé du lien', 'Gutenberg-back')}
                                    value={cardItem.btnText}
                                    onChange={(btnText) => setAttributes({
                                            cards: updateElement(cardItem, {btnText}, index)
                                        }
                                    )}
                                />
                                <span className="dashicon dashicons dashicons-arrow-right-alt"></span>
                            </div>
                        </div>
                        <div className="blue-cards__item-remove">
                            <Button
                                isDestructive
                                className="removeCardItem"
                                variant="secondary"
                                icon="no-alt"
                                onClick={() => { setAttributes({ cards: deleteElement(index) }) }}
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
            <div className="blue-cards__items">
                {renderCards}
            </div>
            <div className="blue-cards__items-add">
                <Button
                    disabled={attributes.cards.length === 5 ? true : false}
                    className="is-aligned-center"
                    icon="plus"
                    variant="primary"
                    onClick={() => { setAttributes({
                                cards: addElement(),
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
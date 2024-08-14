import { __ } from '@wordpress/i18n';

import {
	RichText, 
    URLInput
} from '@wordpress/block-editor';

import {
	Button,
    Tip
} from '@wordpress/components';

export default function Itemlist(props) {

    const { attributes, setAttributes } = props;

    const updateElement = (elt, object, index) => {
		const tab = (attributes.socialItems) ? [...attributes.socialItems] : []
		const newElt = Object.assign({}, elt, object)

		tab[index] = newElt

		return tab
	}

	const addElement = () => {
		const tab = (attributes.socialItems) ? [...attributes.socialItems] : []

		tab.push({
			label: '',
			url: '',
		})

		return tab
	}

	const deleteElement = (index) => {
		const tab = (attributes.socialItems) ? [...attributes.socialItems] : []

		tab.splice(index, 1);

		return tab
	}

    const renderSocialItems = attributes.socialItems.map((socialItem, index) => {
		return (
			<>
                {(attributes.socialItems.length > 0) ? (
                    <div data-id={index} className="social__item">
                        <div className="social__item-wrap">
                            <RichText
                                tagName="div"
                                className={"social__item-text"}
                                placeholder={__('Intitulé du lien', 'Gutenberg-back')}
                                value={socialItem.label}
                                onChange={(label) => setAttributes({
                                        socialItems: updateElement(socialItem, { label }, index)
                                    }
                                )}
                            />
                             <URLInput 
                                    label={__('URL du lien', 'Gutenberg-back')}
                                    value={ socialItem.url }
                                    className="social__item-url"
                                    onChange={(link) => setAttributes({
                                            socialItems: updateElement(socialItem, { url: link }, index)
                                        }
                                    )}
                               /> 
                        </div>
                        <Tip>
                            {__('Le lien s\'ouvrira automatiquement dans vers un nouvel onglet', 'Gutenberg-back')}
                        </Tip>
                        <div className="social__item-btn">
                            <Button
                                isDestructive
                                className="removeFaqItem"
                                variant="secondary"
                                icon="no-alt"
                                onClick={() => { setAttributes({ socialItems: deleteElement(index) }) }}
                            >
                                {__('Supprimer le réseau social', 'Gutenberg-back')}
                            </Button>
                        </div>
                    </div>
                ) : ''}
            </>
        )
    })

    return (
        <>
            <div className="social__items">
                {renderSocialItems}
            </div>
            <div className="social__items-add">
                <Button
                    className="is-aligned-center"
                    icon="plus"
                    variant="primary"
                    onClick={() => { setAttributes({
                                socialItems: addElement(),
                            })
                        }
                    }
                >
                    {__('Ajouter un lien vers un réseau social', 'Gutenberg-back')}
                </Button>
            </div>
        </>
    )
}
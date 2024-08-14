import { __ } from '@wordpress/i18n';

import {
	Button,
} from '@wordpress/components';

import PostSelector from '../post-selector'

export default function Itemlist(props) {

    const { attributes, setAttributes } = props;

    const updateElement = (elt, object, index) => {
		const tab = (attributes.publicationItems) ? [...attributes.publicationItems] : []
		const newElt = Object.assign({}, elt, object)

		tab[index] = newElt

		return tab
	}

	const addElement = () => {
		const tab = (attributes.publicationItems) ? [...attributes.publicationItems] : []

		tab.push({
			publication: ''
		})

		return tab
	}

	const deleteElement = (index) => {
		const tab = (attributes.publicationItems) ? [...attributes.publicationItems] : []

		tab.splice(index, 1);

		return tab
	}

    const renderPublicationItems = attributes.publicationItems.map((postItem, index) => {
		return (
			<>
                {(attributes.publicationItems.length > 0) ? (
                    <div data-id={index} className="related-publications__item">
                        <div class="post-selector">
                            <PostSelector
                                onPostSelect={post => {
                                    setAttributes({
                                        publicationItems: updateElement(postItem, { publication: post }, index),
                                        }
                                    )
                                }}
                                posts={attributes.publicationItems[index].publication ? attributes.publicationItems[index].publication : {}}
                                onChange={newValue => {setAttributes({
                                        publicationItems: updateElement(postItem, { publication: newValue }, index),
                                    })
                                }}
                                postType={['post', 'page', 'job', 'magazine', 'subsidiary', 'use_case', 'news', 'document']}
                                limit='1'
                                saveLowPostData={true}
                            />

                        </div>
                        <div className="post-card">
                            <Button
                                isDestructive
                                className="removePostItem"
                                variant="secondary"
                                icon="no-alt"
                                onClick={() => { setAttributes({ publicationItems: deleteElement(index) }) }}
                            >
                                {__('Supprimer la publication', 'Gutenberg-back')}
                            </Button>
                        </div>
                    </div>
                ) : ''}
            </>
        )
    })

    return (
        <>
            <div className="related-publications__items">
                {renderPublicationItems}
            </div>
            <div className="related-publications__items-add">
                <Button
                    className="is-aligned-center"
                    icon="plus"
                    variant="primary"
                    onClick={() => { setAttributes({
                                publicationItems: addElement(),
                            })
                        }
                    }
                >
                    {__('Ajouter une publication', 'Gutenberg-back')}
                </Button>
            </div>
        </>
    )
}
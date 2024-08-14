import { __ } from '@wordpress/i18n';

import {
	Button,
} from '@wordpress/components';

import PostSelector from '../post-selector'

export default function Itemlist(props) {

    const { attributes, setAttributes } = props;

    const updateElement = (elt, object, index) => {
		const tab = (attributes.postItems) ? [...attributes.postItems] : []
		const newElt = Object.assign({}, elt, object)

		tab[index] = newElt

		return tab
	}

	const addElement = () => {
		const tab = (attributes.postItems) ? [...attributes.postItems] : []

		tab.push({
			post: ''
		})

		return tab
	}

	const deleteElement = (index) => {
		const tab = (attributes.postItems) ? [...attributes.postItems] : []

		tab.splice(index, 1);

		return tab
	}

    const renderPostItems = attributes.postItems.map((postItem, index) => {
		return (
			<>
                {(attributes.postItems.length > 0) ? (
                    <div data-id={index} className="related-posts__item">
                        <div class="post-selector">
                            <PostSelector
                                onPostSelect={post => {
                                    setAttributes({
                                            postItems: updateElement(postItem, { post: post }, index),
                                        }
                                    )
                                }}
                                posts={attributes.postItems[index].post ? attributes.postItems[index].post : {}}
                                onChange={newValue => {setAttributes({
                                        postItems: updateElement(postItem, { post: newValue }, index),
                                    })
                                }}
                                postType={['post', 'news']}
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
                                onClick={() => { setAttributes({ postItems: deleteElement(index) }) }}
                            >
                                {__('Supprimer l\'article', 'Gutenberg-back')}
                            </Button>
                        </div>
                    </div>
                ) : ''}
            </>
        )
    })

    return (
        <>
            <div className="related-posts__items">
                {renderPostItems}
            </div>
            <div className="related-posts__items-add">
                <Button
                    className="is-aligned-center"
                    icon="plus"
                    variant="primary"
                    onClick={() => { setAttributes({
                                postItems: addElement(),
                            })
                        }
                    }
                >
                    {__('Ajouter un article', 'Gutenberg-back')}
                </Button>
            </div>
        </>
    )
}
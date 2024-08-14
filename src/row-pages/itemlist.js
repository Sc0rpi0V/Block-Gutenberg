import { __ } from '@wordpress/i18n';

import {
	Button,
} from '@wordpress/components';
import { RichText } from '@wordpress/block-editor';


import PostSelector from '../post-selector'

export default function Itemlist(props) {

    const { attributes, setAttributes } = props;

    const updateElement = (elt, object, index) => {
		const tab = (attributes.pageItems) ? [...attributes.pageItems] : []
		const newElt = Object.assign({}, elt, object)

		tab[index] = newElt

		return tab
	}

	const addElement = () => {
		const tab = (attributes.pageItems) ? [...attributes.pageItems] : []

		tab.push({
			page: ''
		})

		return tab
	}

	const deleteElement = (index) => {
		const tab = (attributes.pageItems) ? [...attributes.pageItems] : []

		tab.splice(index, 1);

		return tab
	}

  const renderpageItems = attributes.pageItems.map((postItem, index) => {
		return (
			<>
        {(attributes.pageItems.length > 0) ? (
          <div data-id={index} className="related-pages__item">
            <div class="post-selector">
              <PostSelector
                onPostSelect={post => {
                  setAttributes({
                    pageItems: updateElement(postItem, { page: post }, index),
                  })
                }}
                posts={attributes.pageItems[index].page ? attributes.pageItems[index].page : {}}
                onChange={newValue => {setAttributes({
                    pageItems: updateElement(postItem, { page: newValue }, index),
                  })
                }}
                postType={['page']}
                limit='1'
             />

            </div>
            <div className="post-card">
              <Button
                isDestructive
                className="removePostItem"
                variant="secondary"
                icon="no-alt"
                onClick={() => { setAttributes({ pageItems: deleteElement(index) }) }}
              >
                {__('Supprimer la page', 'Gutenberg-back')}
              </Button>
            </div>
          </div>
          ) : ''}
      </>
        )
    })

    return (
      <>
        <div className="related-pages__items">
          {renderpageItems}
        </div>
        <div className="related-pages__items-add">
          <Button
            className="is-aligned-center"
            icon="plus"
            variant="primary"
            onClick={() => { setAttributes({
                  pageItems: addElement(),
                })
              }
            }
          >
            {__('Ajouter une nouvelle page', 'Gutenberg-back')}
          </Button>
        </div>
      </>
    )
}
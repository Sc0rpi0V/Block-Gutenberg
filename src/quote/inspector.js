import { __ } from '@wordpress/i18n';

import {
    InspectorControls,
} from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	ButtonGroup,
	Button
} from '@wordpress/components';

export default function Inspector(props) {

    const { attributes, setAttributes } = props;

    return(
        <InspectorControls>
            <PanelBody title={__('Options du bloc Citation', 'Gutenberg-back')} initialOpen={true}>
                <PanelRow>
                    <label>{__('Alignement du contenu:', 'Gutenberg-block')}</label>
                </PanelRow>
                <PanelRow>
                    <ButtonGroup>
                        { ['left', 'center'].map( (pos) => (
                            <Button
                                isLarge
                                variant={ attributes.textAlign == pos ? 'primary' : '' }
                                onClick={ () => setAttributes(
                                    { 
                                        textAlign: pos,
                                    } 
                                )}
                            >
                                { pos === 'left' ?
                                    (
                                        <span className="dashicon dashicons dashicons-align-pull-left"></span>
                                    ) :  pos === 'center' ? (
                                        <span className="dashicon dashicons dashicons-align-center"></span>
                                    ) : ''
                                }
                            </Button>
                        ) ) }
                    </ButtonGroup>
                </PanelRow>
            </PanelBody>
        </InspectorControls>
    )
}
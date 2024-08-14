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
            <PanelBody title={__('Options du bloc FAQ', 'Gutenberg-back')} initialOpen={true}>
                <PanelRow>
                    <label>{__('Niveau du titre principal du bloc:', 'Gutenberg-block')}</label>
                </PanelRow>
                <PanelRow>
                    <ButtonGroup>
                        { ['2', '3', '4', '5', '6'].map( (nbr) => (
                            <Button
                                isLarge
                                variant={ attributes.faqTitleLevel == nbr ? 'primary' : '' }
                                onClick={ () => setAttributes( { faqTitleLevel: nbr } ) }
                            >
                                {'h' + nbr}
                            </Button>
                        ) ) }
                    </ButtonGroup>
                </PanelRow>
            </PanelBody>
        </InspectorControls>
    )
}
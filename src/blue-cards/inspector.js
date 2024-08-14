import { __ } from '@wordpress/i18n';

import {
    InspectorControls,
} from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	ButtonGroup,
	Button,
    Tip
} from '@wordpress/components';

export default function Inspector(props) {

    const { attributes, setAttributes } = props;

    console.log("attr",attributes, props);

    return(
        <InspectorControls>
            <PanelBody>
                <Tip>
                    <p>{__('Limité à 5 cartes maximum', 'Gutenberg-back')}</p>
                </Tip>
            </PanelBody>
            <PanelBody>
                <PanelRow>
                    <label>{__('Niveau du titre principal du bloc:', 'Gutenberg-block')}</label>
                </PanelRow>
                <PanelRow>
                    <ButtonGroup>
                        { ['2', '3', '4', '5', '6'].map( (nbr) => (
                            <Button
                                isLarge
                                variant={ attributes.titleLevel == nbr ? 'primary' : '' }
                                onClick={ () => setAttributes( { titleLevel: nbr } ) }
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
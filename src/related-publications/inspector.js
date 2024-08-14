import { __, sprintf } from '@wordpress/i18n';

import {
    InspectorControls,
} from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	ToggleControl,
	ButtonGroup,
	Button
} from '@wordpress/components';

export default function Inspector(props) {

    const { attributes, setAttributes } = props;

    var icons =  [
        'none',
        'before',
        'after',
        'external'
    ];

    return(
        <InspectorControls>
            <PanelBody title={__('Options du bloc de mise en avant de publication', 'Gutenberg-back')} initialOpen={true}>
            <PanelRow>
                    <label>{__('Niveau du titre de la categorie du bloc', 'Gutenberg-block')}</label>
                </PanelRow>
                <PanelRow>
                    <ButtonGroup>
                        { ['2', '3', '4', '5', '6'].map( (nbr) => (
                            <Button
                                isLarge
                                variant={ attributes.overtitleLevel == nbr ? 'primary' : '' }
                                onClick={ () => setAttributes( { overtitleLevel: nbr } ) }
                            >
                                {'h' + nbr}
                            </Button>
                        ) ) }
                    </ButtonGroup>
                </PanelRow>
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
                <PanelRow>
                    <label>{__('Alignement de la partie haute:', 'Gutenberg-block')}</label>
                </PanelRow>
                <PanelRow>
                    <ButtonGroup>
                        { ['left', 'center'].map( (pos) => (
                            <Button
                                isLarge
                                variant={ attributes.headAlign == pos ? 'primary' : '' }
                                onClick={ () => setAttributes(
                                        { 
                                        headAlign: pos,
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
                <PanelRow>
                    <label>{__('Alignement du bouton:', 'Gutenberg-block')}</label>
                </PanelRow>
                <PanelRow>
                    <ButtonGroup>
                        { ['left', 'center'].map( (pos) => (
                            <Button
                                isLarge
                                variant={ attributes.footAlign == pos ? 'primary' : '' }
                                onClick={ () => setAttributes(
                                        { 
                                        footAlign: pos,
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
                <PanelRow>
                    <label>{__('Cible du lien:', 'Gutenberg-block')}</label>
                </PanelRow>
                <PanelRow>
                    <ToggleControl
                        label={__('Afficher le lien dans un nouvel onglet', 'Gutenberg-block')}
                        checked={ attributes.btnTarget }
                        onChange={ () => setAttributes( {
                                btnTarget: ! attributes.btnTarget,
                                iconPos: (!attributes.btnTarget) && (attributes.iconPos === 'before') ? 'none' : attributes.iconPos
                            } )
                        }
                    />
                </PanelRow>

                <PanelRow>
                    <label>{__('Icône du lien:', 'Gutenberg-block')}</label>
                </PanelRow>
                <PanelRow>
                    <ButtonGroup className="iconSelector">
                        { icons.map( (posIcon) => (
                            <>
                                <Button
                                    className="has-icon"
                                    disabled={(attributes.btnTarget) && (posIcon === 'before') ? true : false}
                                    isLarge
                                    variant={ attributes.iconPos == posIcon ? 'primary' : '' }
                                    onClick={ () => setAttributes( { iconPos: posIcon } ) }
                                >
                                    { posIcon === 'none' ?
                                        (
                                            <span className="dashicon dashicons dashicons-no-alt"></span>
                                        ) : posIcon === 'external' ? (
                                            <span className="dashicon dashicons dashicons-arrow-right-alt external-link"></span>
                                        ) : posIcon === 'before' ? (
                                            <>
                                                <span className="dashicon dashicons dashicons-arrow-right-alt"></span>
                                                {__('____', 'Gutenberg-back')}
                                            </>
                                        ) : posIcon === 'after' ? (
                                            <>
                                                {__('____', 'Gutenberg-back')}
                                                <span className="dashicon dashicons dashicons-arrow-right-alt"></span>
                                            </>
                                        ) : ''
                                    }
                                </Button>
                            </>
                        ) ) }
                    </ButtonGroup>
                </PanelRow>
            </PanelBody>
        </InspectorControls>
    )
}
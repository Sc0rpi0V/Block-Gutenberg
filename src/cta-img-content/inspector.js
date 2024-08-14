import { __ } from '@wordpress/i18n';

import {
    InspectorControls,
} from '@wordpress/block-editor';

import {
    PanelBody,
	PanelRow,
	ToggleControl,
	ButtonGroup,
	Button,
    ColorPalette,
} from '@wordpress/components';

export default function Inspector(props) {

    const { attributes, setAttributes } = props;

    const colors = [
        {
            name: __('Vert', 'Gutenberg-back'),
            color: "#33BBA7"
        },
		{
			name: __('Jaune', 'Gutenberg-back'),
			color: "#F5D750"
		}
	];

    const icons = [
        'none',
        'after',
        'external'
    ];

    return(
        <InspectorControls>
            <PanelBody title={__('Options du bloc CTA', 'Gutenberg-back')} initialOpen={true}>
                <PanelRow>
                    <label>{__('Couleur de fond du bloc:', 'Gutenberg-block')}</label>
                </PanelRow>
                <PanelRow>
                    <ColorPalette
                        colors={ colors }
                        clearable={false}
                        disableCustomColors={true}
                        value={attributes.bkgColor}
                        onChange={ ( color ) => setAttributes({
                            bkgColor: color ? color : '#33BBA7',
                            bkgModifier: color === "#33BBA7" ? 'green':
                                         color === '#F5D750' ? 'yellow':
                                         'green'
                        })}
                    />
                </PanelRow>
            </PanelBody>
            <PanelBody title={__('Option du bouton:', 'Gutenberg-back')} initialOpen={true}>
                <PanelRow>
                    <label>{__('Cible du lien:', 'Gutenberg-block')}</label>
                </PanelRow>
                <PanelRow>
                    <ToggleControl
                            label={__('Afficher le lien dans un nouvel onglet', 'Gutenberg-block')}
                            checked={ attributes.target }
                            onChange={ () => setAttributes( {
                                    target: ! attributes.target,
                                    iconPos: (!attributes.target) && (attributes.iconPos === 'before') ? 'none' : attributes.iconPos
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
                                    disabled={(attributes.target) && (posIcon === 'before') ? true : false}
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
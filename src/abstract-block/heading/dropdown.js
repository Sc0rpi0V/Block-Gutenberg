/**
 * WordPress dependencies
 */
import { ToolbarDropdownMenu } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import HeadingLevelIcon from './icon';

const HEADING_LEVELS = [ 1, 2, 3, 4, 5, 6 ];

const POPOVER_PROPS = {
	className: 'block-library-heading-level-dropdown',
};

/** @typedef {import('@wordpress/element').WPComponent} WPComponent */

/**
 * HeadingLevelDropdown props.
 *
 * @typedef WPHeadingLevelDropdownProps
 *
 * @property {number}                 selectedLevel The chosen heading level.
 * @property {(newValue:number)=>any} onChange      Callback to run when
 *                                                  toolbar value is changed.
 */

/**
 * Dropdown for selecting a heading level (1 through 6).
 *
 * @param {WPHeadingLevelDropdownProps} props Component props.
 *
 * @return {WPComponent} The toolbar.
 */
export default function HeadingLevelDropdown( { selectedLevel, props } ) {

	const { attributes, setAttributes } = props;
	const { titleStyle } = attributes;

	return (
		<ToolbarDropdownMenu
			popoverProps={ POPOVER_PROPS }
			icon={ <HeadingLevelIcon level={ selectedLevel } /> }
			label={ __( 'Changer le style du titre', 'Gutenberg-back' ) }
			controls={ HEADING_LEVELS.map( ( targetLevel ) => {
				{
					const isActive = targetLevel === selectedLevel;

					return {
						icon: (
							<HeadingLevelIcon
								level={ targetLevel }
								isPressed={ isActive }
							/>
						),
						label: sprintf(
							__( 'Style %d', 'Gutenberg-back'),
							targetLevel
						),
						isActive,
						onClick() {
							setAttributes( { titleStyle: targetLevel } )
						},
						role: 'menuitemradio',
					};
				}
			} ) }
		/>
	);
}
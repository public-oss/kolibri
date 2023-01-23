import { Component, JSX, h, Prop, State, Watch } from '@stencil/core';

import { BUND_LOGO_TEXT_MAP, Bundesamt, Bundesanstalt, Bundesministerium } from '../../enums/bund';
import { Generic } from '@a11y-ui/core';
import { devHint } from '../../utils/a11y.tipps';
import { setState } from '../../utils/prop.validators';
import { translate } from '../../i18n';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function enumToArray(enumeration: any, enumAsMap: Map<string, string> = new Map()): Map<string, string> {
	Object.keys(enumeration as Record<string, unknown>).map((key) => {
		// eslint-disable-next-line
		enumAsMap.set(enumeration[key], key);
	});
	return enumAsMap;
}

const ENUM_AS_MAP = enumToArray(Bundesamt, enumToArray(Bundesanstalt, enumToArray(Bundesministerium)));

function getAriaLabel(organ: string): string {
	if (ENUM_AS_MAP.has(organ)) {
		return ENUM_AS_MAP.get(organ) as string;
	} else {
		return '';
	}
}

/**
 * API
 */
type RequiredProps = {
	org: Bundesministerium | Bundesamt | Bundesanstalt;
};
type OptionalProps = {
	abbr: Bundesministerium | Bundesamt | Bundesanstalt;
};
// type Props = Generic.Element.Members<RequiredProps, OptionalProps>;

type RequiredStates = RequiredProps;
type OptionalStates = OptionalProps;
type States = Generic.Element.Members<RequiredStates, OptionalStates>;

const Adler = (): JSX.Element => (
	<path
		d="M21.72,12.77c0.04-0.33,0.06-0.67,0.06-1c0-0.2,0-0.43,0-0.69c3.06,0,5.74-2.25,5.74-4.78
c-0.09-1.07-0.56-2.08-1.32-2.84l0.32-0.07c1,0.89,1.61,2.14,1.7,3.48c0,3-3,5.85-6.5,5.92 M18.64,2.21
c-0.05-0.33-0.19-0.64-0.39-0.91c0-0.31,0.14-0.61,0.64-0.36c-0.27,0.27-0.06,0.76-0.06,0.76s0.55-0.26,0.44-0.62
C20.09,1.28,19.5,2.38,18.64,2.21 M17.93,3.77c-0.12-0.47-0.34-0.9-0.64-1.27c-0.3-0.42-0.77-0.69-1.29-0.73
c-0.34,0.03-0.68,0.12-1,0.25c-0.16-0.28-0.27-0.58-0.32-0.9c0-0.22,0.38-0.44,1.1-0.44c1.58,0,2.52,0.71,2.52,1.91
C18.26,3.01,18.14,3.41,17.93,3.77 M22,24.16c0.13,0,0.26,0.02,0.38,0.07c0.64,1.3,1.4,2.53,2.29,3.68l0,0l0,0
c0.81-0.14,1.63-0.22,2.45-0.24l0,0c0.1-0.01,0.2,0.01,0.28,0.07c0.07,0.09,0.1,0.2,0.09,0.31c-0.01,0.28-0.08,0.55-0.21,0.79
c-0.46-0.4-1.07-0.59-1.68-0.51c-0.24,0.01-0.48,0.05-0.71,0.12h-0.07h-0.07l0.48,0.49c0.77,0.83,1.44,1.43,1.44,1.83
c-0.04,0.31-0.22,0.58-0.48,0.74c-0.22-0.98-0.8-1.84-1.62-2.42h-0.06v0.27c0,0.19,0,0.47,0,0.77c0,1.49-0.15,1.72-0.67,1.72
c-0.09,0.01-0.19,0.01-0.28,0c0.33-0.49,0.48-1.08,0.41-1.67v-0.7c0-0.27,0.03-0.53,0.06-0.8v-0.11h-0.08
c-0.33-0.05-0.67-0.09-1-0.1c-0.57-0.07-1.14,0.07-1.6,0.41c-0.24-0.18-0.41-0.44-0.48-0.73c0-0.32,0.19-0.34,0.45-0.34
c0.14-0.01,0.27-0.01,0.41,0c0.59,0.09,1.18,0.13,1.78,0.12h0.06v-0.06c-0.5-1.13-1.18-2.17-2-3.09c0.1-0.35,0.2-0.59,0.54-0.59
M12.64,27.87v0.06h0.06c0.55-0.01,1.1-0.06,1.64-0.16c0.14-0.01,0.27-0.01,0.41,0c0.26,0,0.45,0,0.45,0.34
c-0.07,0.29-0.24,0.55-0.48,0.73c-0.46-0.34-1.03-0.49-1.6-0.41c-0.33,0.01-0.67,0.05-1,0.1H12v0.11
c0.03,0.27,0.06,0.53,0.06,0.8v0.7c-0.05,0.58,0.1,1.15,0.42,1.63c-0.09,0.01-0.19,0.01-0.28,0c-0.52,0-0.67-0.23-0.67-1.72
c0-0.3,0-0.58,0-0.77V29l-0.06,0.05c-0.82,0.58-1.39,1.44-1.61,2.42c-0.28-0.14-0.47-0.4-0.53-0.7c0-0.43,0.65-1.07,1.39-1.81
l0.43-0.43v-0.06h-0.14c-0.23-0.07-0.47-0.11-0.71-0.12c-0.61-0.08-1.22,0.11-1.68,0.51c-0.13-0.24-0.2-0.51-0.21-0.79
c0.01-0.11,0.06-0.22,0.14-0.3c0.08-0.06,0.18-0.08,0.28-0.07l0,0c0.82,0.02,1.64,0.1,2.45,0.24l0,0l0,0
c0.88-1.15,1.64-2.38,2.28-3.68c0.12-0.05,0.25-0.07,0.38-0.07c0.35,0,0.44,0.24,0.54,0.59c-0.82,0.92-1.5,1.96-2,3.09
M7.78,6.87c0.08-1.36,0.7-2.62,1.72-3.52l0.32,0.07C9.06,4.19,8.6,5.19,8.51,6.26c0,2.56,2.73,4.78,5.82,4.78
c0,0.22,0,0.45,0,0.69c-0.01,0.35,0,0.69,0.03,1.04c-3.5,0-6.58-2.86-6.58-5.92 M31.25,12.23c1.57,2.49,2.8,2.45,4.66,2.45
c-1.19-0.97-2.21-2.14-3-3.46L30,6.65c-0.29-1.44-1.03-2.75-2.12-3.73c0.31-0.1,0.6-0.24,0.87-0.42c-1.88,0-3.73-1-4.75-1
c-0.55-0.05-1.03,0.36-1.08,0.91c0,0.58,0.63,1.16,1.73,1.16c0.31,0,0.62-0.04,0.92-0.09c0.65,0.74,1.03,1.67,1.08,2.65
c0,2-2.41,3.58-4.83,3.58h-0.41c-0.5-0.67-0.84-1.45-1-2.28c0-1.6,1.05-2.9,1.05-4.48c0-0.68-0.24-1.33-0.67-1.85
c0.29-0.23,0.53-0.52,0.7-0.85c-0.22,0.08-0.45,0.11-0.68,0.09c-1.16,0-2.11-0.3-3-0.3c-0.53,0-0.67,0.16-0.67,0.31
c-0.01,0.05-0.01,0.1,0,0.15c-0.19-0.08-0.39-0.13-0.59-0.17c-0.29-0.05-0.58-0.08-0.88-0.08c-1.13,0-1.52,0.47-1.52,0.87
c0.07,0.52,0.27,1.01,0.57,1.44c0.4-0.2,0.84-0.31,1.28-0.34c0.6,0,1.13,0.57,1.41,1.24c-0.29,0.05-0.59,0.07-0.88,0.07
c-0.68-0.03-1.36-0.16-2-0.39l0,0c0,0,0.31,0.56,0.92,0.78c0.72,0.22,1.46,0.37,2.21,0.45c-0.08,0.21-0.23,0.38-0.43,0.49
c-0.05,0.02-0.09,0.02-0.14,0c-0.74-0.14-1.45-0.35-2.14-0.65H14.9c0,0.42,1.09,1.35,2.07,1.71c-1.06,1.1-1.87,2.41-2.39,3.85
h-0.41c-2.42,0-4.82-1.57-4.82-3.58c0.05-0.98,0.43-1.91,1.07-2.65c0.3,0.05,0.61,0.09,0.92,0.09c1.1,0,1.69-0.58,1.74-1.16
c-0.04-0.55-0.52-0.96-1.07-0.92c0,0,0,0-0.01,0c-1,0-2.88,1-4.76,1C7.51,2.73,7.8,2.87,8.11,2.97C7.03,3.94,6.29,5.23,6,6.65
l-2.87,4.59c-0.79,1.32-1.81,2.49-3,3.46c1.86,0,3.09,0,4.66-2.45L6.26,9.9c0.11,0.31,0.24,0.61,0.4,0.9l-2.97,4.67
c-0.79,1.32-1.8,2.49-3,3.46c1.85,0,3.08,0,4.65-2.44l2.52-4c0.19,0.2,0.39,0.4,0.6,0.58l-3.59,5.7c-0.79,1.32-1.8,2.49-3,3.45
c1.85,0,3.08,0.05,4.65-2.44L10,14.2c0.22,0.14,0.46,0.28,0.7,0.41l-4.27,6.77c-0.79,1.31-1.81,2.48-3,3.45
c1.85,0,3.08,0,4.65-2.44l4.36-7c0.25,0.1,0.51,0.2,0.78,0.28l-4.95,7.9c-0.79,1.31-1.81,2.48-3,3.45c1.85,0,3.08,0.05,4.65-2.43
l5.24-8.39h0.16c0.14,0.42,0.22,0.86,0.24,1.3c0,2.64-1.73,5-3.8,6.76c0.19,0.06,0.38,0.09,0.58,0.08c0.3,0.01,0.6-0.01,0.9-0.05
c-0.57,1.13-1.24,2.21-2,3.23c-0.77-0.13-1.54-0.2-2.32-0.22c-0.67,0-0.75,0.4-0.75,0.75c-0.01,0.53,0.22,1.03,0.62,1.38
c0.13-0.31,0.38-0.73,1.63-0.73h0.13C10.11,29.13,9,30.06,9,30.77c0.06,0.66,0.59,1.18,1.25,1.24c-0.02-0.14-0.02-0.28,0-0.42
c0.13-0.69,0.48-1.33,1-1.8c-0.01,0.1-0.01,0.2,0,0.3c0,1.43,0.13,2.08,1,2.08c0.31-0.01,0.61-0.12,0.86-0.31
c-0.5-0.44-0.73-1.11-0.62-1.77c0-0.21,0-0.41,0-0.69c0.02-0.2,0.02-0.41,0-0.61c0.24-0.02,0.47-0.02,0.71,0
c0,0,1.29-0.1,1.6,0.57c0.35-0.32,0.86-0.78,0.86-1.27c0-0.33-0.16-0.71-0.83-0.71c-0.25,0-1,0.16-1.7,0.16
c0.48-0.84,1.04-1.64,1.66-2.39c0.1,0.39,0.31,0.74,0.62,1c0.12-1.17,0.54-2.28,1.21-3.24c0.16,0.93,0.24,1.87,0.23,2.82
c0,3.55-0.85,6.17-2.66,6.67c0.26,0.46,0.73,0.75,1.25,0.78c0.66,0,1-0.75,1.39-1.46c0.19,0.53,0.72,1.8,1.25,1.8
s1.06-1.27,1.25-1.8c0.37,0.71,0.73,1.46,1.39,1.46c0.52-0.03,1-0.33,1.26-0.78c-1.82-0.5-2.67-3.12-2.67-6.67
c-0.01-0.95,0.07-1.89,0.23-2.82c0.68,0.96,1.1,2.07,1.21,3.24c0.31-0.26,0.53-0.61,0.63-1c0.61,0.75,1.15,1.54,1.62,2.38
c-0.66,0-1.45-0.16-1.7-0.16c-0.67,0-0.82,0.38-0.82,0.71c0,0.49,0.51,1,0.86,1.27c0.3-0.67,1.59-0.57,1.59-0.57
c0.24-0.02,0.47-0.02,0.71,0c-0.02,0.2-0.02,0.41,0,0.61v0.69c0.11,0.66-0.12,1.33-0.62,1.77c0.25,0.19,0.55,0.3,0.86,0.31
c0.91,0,1-0.65,1-2.08c0.01-0.1,0.01-0.2,0-0.3c0.52,0.47,0.87,1.11,1,1.8c0.02,0.14,0.02,0.28,0,0.42
c0.61-0.11,1.06-0.62,1.12-1.23c0-0.74-1.15-1.67-1.52-2.08h0.13c1.25,0,1.5,0.42,1.63,0.73c0.4-0.35,0.63-0.85,0.62-1.38
c0-0.35-0.07-0.75-0.75-0.75c-0.78,0.02-1.55,0.09-2.32,0.22c-0.76-1.02-1.43-2.1-2-3.23c0.3,0.04,0.6,0.06,0.9,0.05
c0.19,0.01,0.39-0.02,0.57-0.08c-2.07-1.79-3.8-4.12-3.8-6.76c0.02-0.44,0.1-0.88,0.24-1.3h0.16l5.24,8.39
c1.57,2.48,2.8,2.43,4.65,2.43c-1.19-0.97-2.21-2.14-3-3.45l-4.92-7.87c0.27-0.08,0.53-0.18,0.79-0.28l4.35,7
c1.57,2.48,2.8,2.44,4.65,2.44c-1.19-0.97-2.21-2.14-3-3.45l-4.23-6.77c0.24-0.13,0.48-0.27,0.7-0.41l3.42,5.55
c1.57,2.49,2.8,2.44,4.65,2.44c-1.19-0.97-2.21-2.13-3-3.45l-3.55-5.69c0.2-0.18,0.4-0.38,0.59-0.58l2.52,4
c1.57,2.48,2.8,2.44,4.65,2.44c-1.2-0.97-2.21-2.14-3-3.46l-2.99-4.7c0.16-0.29,0.29-0.59,0.4-0.9L31.25,12.23z"
	></path>
);

@Component({
	tag: 'kol-logo',
	styleUrls: {
		default: '../style.sass',
	},
	shadow: true,
})
export class KolLogo implements Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates> {
	/**
	 * Gibt die Abkürzung eines Ministeriums, eines Amts oder einer Bundesanstalt an.
	 *
	 * @deprecated Verwende stattdessen das Property _org.
	 */
	@Prop() public _abbr?: Bundesministerium | Bundesamt | Bundesanstalt;

	/**
	 * Gibt die Abkürzung eines Ministeriums, eines Amts oder einer Bundesanstalt an.
	 */
	@Prop() public _org!: Bundesministerium | Bundesamt | Bundesanstalt;

	/**
	 * @see: components/abbr/component.tsx (@State)
	 */
	@State() public state: States = {
		_org: Bundesanstalt['Informationstechnikzentrum Bund'],
	};

	/**
	 * @see: components/abbr/component.tsx (@Watch)
	 */
	@Watch('_abbr')
	public validateAbbr(value?: Bundesministerium | Bundesamt | Bundesanstalt): void {
		this.validateOrg(value);
	}

	/**
	 * @see: components/abbr/component.tsx (@Watch)
	 */
	@Watch('_org')
	public validateOrg(value?: Bundesministerium | Bundesamt | Bundesanstalt): void {
		if (typeof value === 'string' && ENUM_AS_MAP.has(value)) {
			setState(this, '_org', value);
		} else {
			devHint(`Die verwendete Abkürzung (${value as string}) ist nicht definiert!`);
		}
	}

	/**
	 * @see: components/abbr/component.tsx (componentWillLoad)
	 */
	public componentWillLoad(): void {
		this.validateOrg(this._org || this._abbr);
	}

	public render(): JSX.Element {
		return (
			<svg
				aria-label={translate('kol-logo-description', { placeholders: { orgShort: this.state._org, orgLong: getAriaLabel(this.state._org) } })}
				role="img"
				viewBox="0 0 225 100"
			>
				<rect width="100%" height="100%" fill="white"></rect>
				<svg x="0" y="4" height="75">
					<Adler />
				</svg>
				<svg x="40.5" y="3.5" height="100">
					<rect width="5" height="30"></rect>
					<rect y="30" width="5" height="30" fill="red"></rect>
					<rect y="60" width="5" height="30" fill="#fc0"></rect>
				</svg>
				<svg x="50" y="0">
					<text x="0" y="-0.05em" font-family="BundesSans Web" style={{ backgroundColor: 'white', color: 'black' }}>
						{BUND_LOGO_TEXT_MAP.has(this.state._org) ? (
							<tspan>
								{BUND_LOGO_TEXT_MAP.get(this.state._org)?.map((text: string, index: number) => {
									return (
										<tspan x="0" dy="1.1em" key={`kol-logo-text-${index}`}>
											{text}
										</tspan>
									);
								})}
							</tspan>
						) : (
							<tspan fill="red">
								<tspan x="0" dy="1.1em">
									Der Schlüsselwert
								</tspan>
								<tspan x="0" dy="1.1em" font-weight="bold">
									'{this.state._org}'
								</tspan>
								<tspan x="0" dy="1.1em">
									ist nicht definiert.
								</tspan>
								<tspan x="0" dy="1.1em">
									oder freigegeben.
								</tspan>
							</tspan>
						)}
					</text>
				</svg>
			</svg>
		);
	}
}

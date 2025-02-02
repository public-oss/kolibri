import React from 'react';
import { KolButton } from '@public-ui/react';

import { FC } from 'react';

export const TooltipBasic: FC = () => {
	const catchFocusButton = (el) => {
		const timeout = setTimeout(() => {
			clearTimeout(timeout);
			if (el instanceof HTMLElement) {
				el?.focus();
			}
		}, 1000);
	};

	return (
		<div className="d-flex flex-warp gap-2">
			<KolButton _label="Oben" _icon="codicon codicon-arrow-up" _hide-label _tooltip-align="top" _variant="primary"></KolButton>
			<KolButton _label="Unten" _icon="codicon codicon-arrow-down" _hide-label _tooltip-align="bottom" _variant="secondary"></KolButton>
			<KolButton _label="Links" _icon="codicon codicon-arrow-left" _hide-label _tooltip-align="left" _variant="normal"></KolButton>
			<KolButton ref={catchFocusButton} _label="Rechts" _icon="codicon codicon-arrow-right" _hide-label _tooltip-align="right" _variant="danger"></KolButton>
			<KolButton
				_label="Ich bin ein langer Text im Tooltip. Ich bin ein langer Text im Tooltip. Ich bin ein langer Text im Tooltip. Ich bin ein langer Text im Tooltip."
				_icon="codicon codicon-home"
				_hide-label
				_variant="ghost"
			></KolButton>{' '}
			<KolButton _label="Disabled" _icon="codicon codicon-trash" _hide-label _disabled></KolButton>
		</div>
	);
};

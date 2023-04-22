import React, { useEffect, useRef } from 'react';
import Mergely from 'mergely';
import 'mergely/lib/mergely.css';

let _mergelyGlobalId = 0;

export default function MergelyView({
	height = '400px',
	autoupdate = true,
	bgcolor = '#eeeeee',
	change_timeout = 150,
	cmsettings = { mode: 'text/plain', readOnly: false },
	ignorews = false,
	ignorecase = false,
	ignoreaccents = false,
	lcs = true,
	lhs = '',
	license = 'lgpl',
	line_numbers = true,
	lhs_cmsettings = {},
	resize_timeout = 500,
	rhs = '',
	rhs_cmsettings = {},
	rhs_margin = 'right',
	sidebar = true,
	vpcolor = 'rgba(0,0,200,0.5)',
	viewport = false,
	wrap_lines = false,
	onChanged = null,
	onResized = null,
	onUpdated = null,
	onInit = null
}) {
	let mergelyRef = useRef(null);
	const id = _mergelyGlobalId++;
	const style = { height };

	useEffect(() => {
		const selector = `#mergely-${id}`;
		mergelyRef.current = new Mergely(selector, {
			autoupdate,
			bgcolor,
			change_timeout,
			cmsettings,
			ignorews,
			ignorecase,
			ignoreaccents,
			lcs,
			lhs,
			license,
			line_numbers,
			lhs_cmsettings,
			resize_timeout,
			rhs,
			rhs_cmsettings,
			rhs_margin,
			sidebar,
			vpcolor,
			viewport,
			wrap_lines
		});

		if (onChanged) {
			mergelyRef.current.on('changed', onChanged);
		}
		if (onResized) {
			mergelyRef.current.on('resized', onResized);
		}
		if (onUpdated) {
			mergelyRef.current.on('updated', onUpdated);
		}
		if (onInit) {
			mergelyRef.current.once('updated', onInit);
		}

		return () => {
			mergelyRef.current.unbind();
		};
	});

	return (
		<div id={`mergely-${id}`} style={style}></div>
	)
}

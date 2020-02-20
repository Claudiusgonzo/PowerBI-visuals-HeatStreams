/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import React from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'
import { InteractiveChart } from './InteractiveChart'

export default {
	title: 'Heat-Streams Chart',
	decorators: [withKnobs],
}

const VIEW_OPTS = 'View Options'
const DATA_OPTS = 'Data Options'
export const BasicExample = () => {
	const width = number(
		'Chart Width',
		900,
		{ min: 100, max: 1500, step: 10 },
		VIEW_OPTS,
	)
	const height = number(
		'Chart Height',
		350,
		{ min: 100, max: 900, step: 10 },
		VIEW_OPTS,
	)
	const axisHeight = number(
		'Axis Height',
		30,
		{ min: 0, max: 100, step: 10 },
		VIEW_OPTS,
	)
	const rowHeight = number(
		'Row Height',
		20,
		{ min: 1, max: 50, step: 1 },
		VIEW_OPTS,
	)
	const numTicks = number(
		'# Axis Ticks',
		30,
		{ min: 0, max: 100, step: 1 },
		VIEW_OPTS,
	)
	const valueMin = number('Min Value', 0, undefined, DATA_OPTS)
	const valueMid = number('Mid Value', 50, undefined, DATA_OPTS)
	const valueMax = number('Max Value', 100, undefined, DATA_OPTS)

	console.log('ayoo')
	return (
		<InteractiveChart
			width={width}
			height={height}
			rowHeight={rowHeight}
			axisHeight={axisHeight}
			numTicks={numTicks}
			valueMin={valueMin}
			valueMid={valueMid}
			valueMax={valueMax}
		/>
	)
}
BasicExample.story = {
	name: 'basic example',
}

/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import { DateAggregation } from '@essex/react-heat-streams'
import { IVisualDataOptions, SortBy } from '../chart/interfaces'

export default class VisualDataOptionsImpl implements IVisualDataOptions {
	public dateAggregation: DateAggregation = 'days'
	public numericAggregation = 1
	public valueMin = undefined
	public valueMax = undefined
	public scoreSplit = undefined
	public isLogScale = false
	public sortBy: SortBy = 'name'
	public sortInvert = false
}
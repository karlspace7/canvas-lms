/*
 * Copyright (C) 2016 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import TestUtils from 'react-dom/test-utils'
import StudentRangeItem from '../student-range-item'

describe('Student Range Item', () => {
  const defaultProps = () => ({
    studentIndex: 0,
    student: {
      user: {name: 'Foo Bar'},
      trend: 0,
    },
    selectStudent: () => {},
  })

  const renderComponent = props => TestUtils.renderIntoDocument(<StudentRangeItem {...props} />)

  it('renders name correctly', () => {
    const component = renderComponent(defaultProps())
    const renderedList = TestUtils.findRenderedDOMComponentWithClass(component, 'crs-student__name')
    expect(renderedList.textContent).toBe('Foo Bar')
  })

  it('renders no trend correctly', () => {
    const props = defaultProps()
    props.student.trend = null
    const component = renderComponent(props)

    const renderedList = TestUtils.scryRenderedDOMComponentsWithClass(
      component,
      'crs-student__trend-icon'
    )
    expect(renderedList.length).toBe(0)
  })

  it('renders positive trend correctly', () => {
    const props = defaultProps()
    props.student.trend = 1
    const component = renderComponent(props)

    const renderedList = TestUtils.scryRenderedDOMComponentsWithClass(
      component,
      'crs-student__trend-icon__positive'
    )
    expect(renderedList.length).toBe(1)
  })

  it('renders neutral trend correctly', () => {
    const props = defaultProps()
    props.student.trend = 0
    const component = renderComponent(props)

    const renderedList = TestUtils.scryRenderedDOMComponentsWithClass(
      component,
      'crs-student__trend-icon__neutral'
    )
    expect(renderedList.length).toBe(1)
  })

  it('renders negative trend correctly', () => {
    const props = defaultProps()
    props.student.trend = -1
    const component = renderComponent(props)

    const renderedList = TestUtils.scryRenderedDOMComponentsWithClass(
      component,
      'crs-student__trend-icon__negative'
    )
    expect(renderedList.length).toBe(1)
  })
})

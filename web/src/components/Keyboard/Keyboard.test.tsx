import { render } from '@redwoodjs/testing/web'

import Keyboard from './Keyboard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Keyboard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Keyboard />)
    }).not.toThrow()
  })
})

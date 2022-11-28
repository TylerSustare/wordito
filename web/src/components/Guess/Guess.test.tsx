import { render } from '@redwoodjs/testing/web'

import Guess from './Guess'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Guess', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Guess />)
    }).not.toThrow()
  })
})

import React from 'react'
import render from 'react-test-renderer'
import Button from './src/components/Button/Button'

const wrapper = render(<Button>Nice</Button>)
const element = wrapper.queryByText('abc')

test('should', () => {
  // expect(1 + 2).toBe(3)
  expect(element).toBeTruthy()
})

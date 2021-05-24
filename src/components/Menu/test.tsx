import { render, screen } from '@testing-library/react'
import Menu from '.'

describe('<Main/>', () => {
   it('should render the heading', () => {
      const { container } = render(<Menu />)

      expect(container.firstChild).toMatchSnapshot()
   })
})

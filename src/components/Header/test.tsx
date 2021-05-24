import { render, screen } from '@testing-library/react'
import Header from '.'

describe('<Main/>', () => {
   it('should render the heading', () => {
      const { container } = render(<Header />)

      expect(container.firstChild).toMatchSnapshot()
   })
})

import { Box } from '@mui/material'
import { getFlexProps } from './getFlexProps'

const Flex = (props) => {
  const {
    children,
    flex,
    flexDirection,
    flexColumn = false,
    flexRow = false,
    ...other
  } = props

  const flexProps = getFlexProps({
    flex,
    flexDirection,
    flexColumn,
    flexRow
  })

  const FlexProps = {
    ...flexProps,
    ...other
  }

  return <Box {...FlexProps}>{children}</Box>
}

export default Flex

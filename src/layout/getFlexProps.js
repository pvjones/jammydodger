const isValid = (value) => Boolean(value) || value === 0

export const getFlexProps = ({ flex, flexColumn, flexDirection, flexRow }) => {
  return {
    flexDirection,
    display: 'flex',
    ...(isValid(flex) ? { flex } : {}),
    ...(isValid(flex) && flexDirection === 'column' ? { minHeight: '0%' } : {}),
    ...(isValid(flex) && flexDirection === 'row' ? { minWidth: '0%' } : {}),
    ...(flexColumn
      ? { flexDirection: 'column', flex: 1, minHeight: '0%' }
      : {}),
    ...(flexRow
      ? { flexDirection: 'row', flex: 1, minWidth: '0%', minHeight: '0%' }
      : {})
  }
}

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {styled} from '@material-ui/core/styles'

export const MyArrowUpIcon = styled(ArrowUpwardIcon)({
  color: props=>props.order===-1? '#FF4500' : '#878a8c',
  width: '25px',
  height: '25px',
  cursor: 'pointer'
})

export const MyArrowDownIcon = styled(ArrowDownwardIcon)({
  color: props=>props.order===1? '#FF4500' : '#878a8c',
  width: '25px',
  height: '25px',
  cursor: 'pointer'
})
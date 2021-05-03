import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import {styled} from '@material-ui/core/styles'

export const MyArrowUpIcon = styled(ArrowDropUpIcon)({
  width: '40px',
  height: '40px',
  color: props=>props.vote===1? '#FF4500' : '#878a8c',
  cursor: 'pointer'
})

export const MyArrowDownIcon = styled(ArrowDropDownIcon)({
  width: '40px',
  height: '40px',
  color: props=>props.vote===-1? '#FF4500' : '#878a8c',
  cursor: 'pointer',
})

export const MyCommentIcon = styled(ModeCommentIcon)({
  color:'#878a8c',
})
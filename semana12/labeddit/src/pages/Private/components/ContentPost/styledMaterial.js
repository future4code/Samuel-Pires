import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import {styled} from '@material-ui/core/styles'

export const MyArrowUpIcon = styled(ArrowDropUpIcon)({
  transform: 'scale(1.5)',
  color: props=>props.vote===1? '#454545' : '#878a8c',
  cursor: 'pointer'
})

export const MyArrowDownIcon = styled(ArrowDropDownIcon)({
  transform: 'scale(1.5)',
  color: props=>props.vote===-1? '#454545' : '#878a8c',
  cursor: 'pointer'
})

export const MyCommentIcon = styled(ModeCommentIcon)({
  transform: 'scale(0.7)',
  color:'#878a8c',
})
import {styled} from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

export const MySearchIcon = styled(SearchIcon)({
  color: '#878A8C',
  cursor: 'pointer',
  position: 'absolute',
  right: '5px'
})

export const MyCloseIcon = styled(CloseIcon)({
  cursor: 'pointer',
  color: '#878A8C',
  position: 'absolute',
  right: '5px',
  top: '5px',
})
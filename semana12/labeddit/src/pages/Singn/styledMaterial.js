import {styled} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Alert, AlertTitle } from '@material-ui/lab';

export const MaterialInput = styled(TextField)({
  width: '100%',
  margin: '10px 0px',
})

export const MaterialAlert = styled(Alert)({
  margin: '20px 0',
})

export const MaterialAlertTitle = styled(AlertTitle)({

})

export const MaterialLock = styled(LockOutlinedIcon)({

})
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import MuiButton from '@material-ui/core/Button'

import Icon from '../../Icon'
import SpinnerIcon from '../../Icons/Spinner'

import createDepreciationLogger from '../../helpers/createDepreciationLogger'

const logDepecratedButtons = createDepreciationLogger()

const DefaultButton = ({
  className,
  color,
  label,
  busy,
  disabled,
  ...props
}) => {
  return (
    <MuiButton
      {...props}
      className={cx({ [`customColor-${color}`]: color }, className)}
      color={color}
      disabled={disabled || busy}
      endIcon={
        busy && (
          <Icon
            icon={SpinnerIcon}
            spin
            className="u-ml-half"
            aria-hidden
            focusable="false"
          />
        )
      }
      disableElevation={true}
    >
      {label}
    </MuiButton>
  )
}

DefaultButton.defaultProps = {
  variant: 'contained',
  color: 'primary'
}

const Buttons = ({ variant, color, ...props }) => {
  if (variant === 'alpha') {
    logDepecratedButtons('<Buttons> `alpha` prop is no longer supported.')
  }

  switch (variant) {
    case 'ghost':
      return (
        <DefaultButton
          className={'customVariant-ghost'}
          variant="outlined"
          color={color}
          {...props}
        />
      )

    case 'secondary':
      return (
        <DefaultButton variant="outlined" color={color || 'info'} {...props} />
      )

    case 'text':
      return <DefaultButton variant="text" color={color} {...props} />

    case 'primary':
      return <DefaultButton color={color} {...props} />

    default:
      return <DefaultButton color={color} {...props} />
  }
}

Buttons.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'text']),
  color: PropTypes.oneOf(['success', 'error', 'warning', 'info', 'highlight'])
}

Buttons.defaultProps = {
  variant: 'primary'
}

export default Buttons
export { MuiButton }

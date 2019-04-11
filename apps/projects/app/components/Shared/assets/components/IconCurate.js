import React from 'react'
import styled from 'styled-components'

const StyledIcon = styled.div`
  display: inline-flex;
  align-self: baseline;
  margin-left: 4px;
  svg {
    bottom: -3.6px;
    position: relative;
  }
`

const IconCurate = props => (
  <StyledIcon>
    <svg aria-hidden="true" width="22px" height="22px" viewBox="0 0 22 22"  {...props}>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <polygon id="Shape" points="0 0 22 0 22 22 0 22"></polygon>
        <g id="Group-3" transform="translate(3.000000, 5.000000)" fill="#8B9396" fill-rule="nonzero">
          <g id="noun_Settings_20638">
            <rect id="line" x="0" y="2.41171404" width="7.35817388" height="1.06115418" rx="0.530577089"></rect>
            <rect id="line" x="0" y="9.30921619" width="4.09801947" height="1.06115418" rx="0.530577089"></rect>
            <rect id="line" x="11.9019805" y="2.41171404" width="4.09801947" height="1.06115418" rx="0.530577089"></rect>
            <rect id="line" x="8.64182612" y="9.30921619" width="7.35817388" height="1.06115418" rx="0.530577089"></rect>
            <path d="M9.6207479,5.4215814 C8.12574145,5.4215814 6.91379926,4.2122489 6.91379926,2.72046167 C6.91379926,1.22867444 8.12574145,0.0193419466 9.6207479,0.0193419466 C11.1157544,0.0193419466 12.3276965,1.22867444 12.3276965,2.72046167 C12.3276965,4.2122489 11.1157544,5.4215814 9.6207479,5.4215814 Z M9.6207479,4.6498329 C10.6886097,4.6498329 11.5542826,3.78602398 11.5542826,2.72046167 C11.5542826,1.65489936 10.6886097,0.791090439 9.6207479,0.791090439 C8.55288615,0.791090439 7.68721316,1.65489936 7.68721316,2.72046167 C7.68721316,3.78602398 8.55288615,4.6498329 9.6207479,4.6498329 Z" id="Oval"></path>
            <path d="M6.38925814,12.4155521 C4.89425169,12.4155521 3.6823095,11.2062196 3.6823095,9.71443239 C3.6823095,8.22264515 4.89425169,7.01331266 6.38925814,7.01331266 C7.88426459,7.01331266 9.09620678,8.22264515 9.09620678,9.71443239 C9.09620678,11.2062196 7.88426459,12.4155521 6.38925814,12.4155521 Z M6.38925814,11.6438036 C7.45711989,11.6438036 8.32279288,10.7799947 8.32279288,9.71443239 C8.32279288,8.64887008 7.45711989,7.78506115 6.38925814,7.78506115 C5.32139639,7.78506115 4.4557234,8.64887008 4.4557234,9.71443239 C4.4557234,10.7799947 5.32139639,11.6438036 6.38925814,11.6438036 Z" id="Oval"></path>
          </g>
        </g>
      </g>
    </svg>
  </StyledIcon>
)

export default IconCurate
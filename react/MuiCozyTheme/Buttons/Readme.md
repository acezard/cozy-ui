### Default

```jsx
import Button, { MuiButton } from 'cozy-ui/transpiled/react/MuiCozyTheme/Buttons'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/MuiCozyTheme/Grid'
import Paper from 'cozy-ui/transpiled/react/Paper'
import CozyTheme from 'cozy-ui/transpiled/react/CozyTheme'

const variants = ['primary', 'secondary', 'ghost', 'text']
const propsArr = [{}, { disabled: true }, { busy: true }]

;

<>
  <Grid container>
    {propsArr.map(props =>
      <Grid item xs={4} className="u-mb-1" key={JSON.stringify(props)}>
        <Stack spacing="s">
          <div>{Object.keys(props)[0] || 'default'}</div>
          {variants.map(variant =>
            <div>
              <Button key={variant + JSON.stringify(props)} label={variant} variant={variant} {...props} />
            </div>
          )}
        </Stack>
      </Grid>
    )}
  </Grid>
  <CozyTheme variant='inverted'>
    <Paper className='u-p-1'>
      <Grid container>
        {propsArr.map(props =>
          <Grid item xs={4} className="u-mb-1" key={JSON.stringify(props)}>
            <Stack spacing="s">
              <div>{Object.keys(props)[0] || 'default'}</div>
              {variants.map(variant =>
                <div>
                  <Button key={variant + JSON.stringify(props)} label={variant} variant={variant} {...props} />
                </div>
              )}
            </Stack>
          </Grid>
        )}
      </Grid>
    </Paper>
  </CozyTheme>
</>
```

### Color

```jsx
import Button from 'cozy-ui/transpiled/react/MuiCozyTheme/Buttons'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/MuiCozyTheme/Grid'
import Paper from 'cozy-ui/transpiled/react/Paper'
import CozyTheme from 'cozy-ui/transpiled/react/CozyTheme'

const variants = ['primary', 'secondary', 'ghost', 'text']
const colors = ['success', 'error', 'warning', 'info', 'highlight']

;
<>
  <Grid container>
    {colors.map(color =>
      <Grid item xs={2} className="u-mb-1" key={color}>
        <Stack spacing="s">
          <div>{color}</div>
          {variants.map(variant =>
            <div>
              <Button key={variant + color} label={variant} variant={variant} color={color} />
            </div>
          )}
        </Stack>
      </Grid>
    )}
  </Grid>
  <CozyTheme variant='inverted'>
    <Paper className='u-p-1'>
      <Grid container>
        {colors.map(color =>
          <Grid item xs={2} className="u-mb-1" key={color}>
            <Stack spacing="s">
              <div>{color}</div>
              {variants.map(variant =>
                <div>
                  <Button key={variant + color} label={variant} variant={variant} color={color} />
                </div>
              )}
            </Stack>
          </Grid>
        )}
      </Grid>
    </Paper>
  </CozyTheme>
</>
```

### Disabled color

```jsx
import Button from 'cozy-ui/transpiled/react/MuiCozyTheme/Buttons'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/MuiCozyTheme/Grid'
import Paper from 'cozy-ui/transpiled/react/Paper'
import CozyTheme from 'cozy-ui/transpiled/react/CozyTheme'

const variants = ['primary', 'secondary', 'ghost', 'text']
const colors = ['success', 'error', 'warning', 'info', 'highlight']

;
<>
  <Grid container>
    {colors.map(color =>
      <Grid item xs={2} className="u-mb-1" key={color}>
        <Stack spacing="s">
          <div>{color}</div>
          {variants.map(variant =>
            <div>
              <Button key={variant + color} label={variant} variant={variant} color={color} disabled={true} />
            </div>
          )}
        </Stack>
      </Grid>
    )}
  </Grid>
  <CozyTheme variant='inverted'>
    <Paper className='u-p-1'>
      <Grid container>
        {colors.map(color =>
          <Grid item xs={2} className="u-mb-1" key={color}>
            <Stack spacing="s">
              <div>{color}</div>
              {variants.map(variant =>
                <div>
                  <Button key={variant + color} label={variant} variant={variant} color={color} disabled={true} />
                </div>
              )}
            </Stack>
          </Grid>
        )}
      </Grid>
    </Paper>
  </CozyTheme>
</>
```

### Busy color

```jsx
import Button from 'cozy-ui/transpiled/react/MuiCozyTheme/Buttons'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Grid from 'cozy-ui/transpiled/react/MuiCozyTheme/Grid'
import Paper from 'cozy-ui/transpiled/react/Paper'
import CozyTheme from 'cozy-ui/transpiled/react/CozyTheme'

const variants = ['primary', 'secondary', 'ghost', 'text']
const colors = ['success', 'error', 'warning', 'info', 'highlight']

;
<>
  <Grid container>
    {colors.map(color =>
      <Grid item xs={2} className="u-mb-1" key={color}>
        <Stack spacing="s">
          <div>{color}</div>
          {variants.map(variant =>
            <div>
              <Button key={variant + color} label={variant} variant={variant} color={color} busy={true} />
            </div>
          )}
        </Stack>
      </Grid>
    )}
  </Grid>
  <CozyTheme variant='inverted'>
    <Paper className='u-p-1'>
      <Grid container>
        {colors.map(color =>
          <Grid item xs={2} className="u-mb-1" key={color}>
            <Stack spacing="s">
              <div>{color}</div>
              {variants.map(variant =>
                <div>
                  <Button key={variant + color} label={variant} variant={variant} color={color} busy={true} />
                </div>
              )}
            </Stack>
          </Grid>
        )}
      </Grid>
    </Paper>
  </CozyTheme>
</>
```

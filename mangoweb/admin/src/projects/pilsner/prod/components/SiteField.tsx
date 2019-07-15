import { SelectField } from 'cms-admin'
import * as React from 'react'

export const SiteField = () => <SelectField options={'Site[slug=$site].name'} name={'site'} label={'Site'} />

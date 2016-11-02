import * as React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Sample } from './sample';

storiesOf('Introduction', module)
    .add('empty', () => {
        return <Sample title='' value='' onClick={action('click')} />;
    })
    .add('ideal', () => {
        return <Sample title='My Property' value='123' onClick={action('click')} />;
    });

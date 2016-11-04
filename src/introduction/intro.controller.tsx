import * as React from 'react';
import { StoreShape } from '../store';
import { connect, MapStateToProps } from 'react-redux';
import { doActionOne } from './intro.duck';
import { Sample } from './sample';

const FaBeer = require('react-icons/lib/fa/beer');
const FaMapO = require('react-icons/lib/fa/map-o');
const FaLineChart = require('react-icons/lib/fa/line-chart');

export interface IntroControllerStateProps {
    myProperty: string;
};

export interface IntroControllerDispatches {
    onClick(): void;
}

type IntroControllerProps = IntroControllerStateProps & IntroControllerDispatches;

const reduxLink = 'https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd';
const reactLink = 'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi';

export class IntroControllerStateless extends React.Component<IntroControllerProps, {}> {
    constructor(props: IntroControllerProps) { super(props); }

    render() {
        return <div>
            <h1>Welcome to a brand new project</h1>
            <h2>Getting Started</h2>
            <div className='blurb'>
                <ol>
                    <li>
                        <div>Install these debugging extensions 👷</div>
                        <ul>
                            <li><a href={reduxLink}>Redux DevTools</a></li>
                            <li><a href={reactLink}>React DevTools</a></li>
                        </ul>
                    </li>
                    <li>
                        <code>npm run tdd</code> and keep the cat happy 😺
                    </li>
                    <li>
                        <code>npm run storybook</code> and visit
                        at <a href='http://localhost:9001'>http://localhost:9001</a> 📔
                    </li>
                    <li>Get to work 👐</li>
                </ol>
            </div>
            <h2>Kick the Tires</h2>
            <div className='blurb'>
                <div>You can inspect this page with the Redux and React devtools. Go on, try it.</div>
                <Sample
                    title='Value of myProperty'
                    value={this.props.myProperty}
                    onClick={this.props.onClick} />
                <div>Sometimes there are bugs...</div>
                <button onClick={() => { throw new Error('oh no a bug'); } }>See It</button>
                <div>Icons are in, these days:</div>
                <div><FaBeer /><FaMapO /><FaLineChart /></div>
            </div>
            <h2>Time to Change the World</h2>
            <div className='blurb'>
                <p>Hot chicken affogato neutra, synth chia narwhal pour-over pop-up artisan mustache stumptown drinking
                vinegar. Subway tile keytar drinking vinegar kickstarter, cardigan pop-up fanny pack cronut slow-carb
                la croix small batch retro hella. 3 wolf moon lyft flexitarian selvage enamel pin pork belly craft beer
                pok pok chicharrones coloring book viral swag letterpress fingerstache. Seitan shabby chic typewriter
                tumblr vape. Glossier organic bitters authentic butcher, keytar cray. Kickstarter actually enamel pin
                bitters readymade helvetica. Disrupt migas semiotics hell of, poke cornhole tousled succulents snackwave
                pinterest master cleanse.</p>

                <p>Humblebrag hammock raw denim asymmetrical, everyday carry swag knausgaard actually. Ethical
                succulents asymmetrical, sartorial crucifix jean shorts shabby chic whatever glossier iPhone yuccie.
                Post-ironic prism, schlitz shoreditch unicorn gluten-free squid hammock pinterest. Hashtag hammock
                disrupt chicharrones, cold-pressed small batch coloring book poutine thundercats direct trade pop-up.
                Authentic readymade plaid poutine retro flexitarian paleo iceland, gentrify health goth. Etsy
                humblebrag salvia, next level tofu austin williamsburg beard. Gentrify banjo tofu, stumptown seitan
                selfies iPhone copper mug snackwave keffiyeh kinfolk williamsburg.</p>
            </div>

        </div>;
    }
}

const stateToProps: MapStateToProps<IntroControllerStateProps, {}> = (state: StoreShape) => ({
    myProperty: state.intro.myProperty(),
});

const dispatches = {
    onClick: doActionOne,
};

export const IntroController = connect<IntroControllerStateProps, IntroControllerDispatches, {}>(
    stateToProps,
    dispatches
)(IntroControllerStateless);

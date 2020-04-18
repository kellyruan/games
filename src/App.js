import React, { Component } from 'react';
import './App.css';
import office from './office.jpg';
import office2 from './office2.PNG';
import office3 from './office3.PNG';
import office4 from './office4.PNG';
import office5 from './office5.PNG';
import office6 from './office6.PNG';
import office7 from './office7.PNG';
import office8 from './office8.PNG';
import office9 from './office9.PNG';
import meeting from './meeting.jpg';
import speech1 from './speech1.png';
import speech2 from './speech2.png';
import numberss from './numberss.jpg';
import workspace from './workspace.jpg';
import group from './group.jpg';
import {Widget, addResponseMessage, addUserMessage, toggleWidget} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

var num;
var off;
var off1;
var off2;
var off3;
var off4;
var meet1;
var meet2;
var meet3;


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            game: 0,
            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            currentNumber: 0,
            progress: 0,
            currentOfficeb: 0,
            officebs: [office, office2, office3, office4, office5, office6, office7, office8, office9],
            office1: false,
            office2: false,
            office3: false,
            office4: false,
            officeanswer: false,
            mistake: "",
            choosePercent: true,
            meeting1: false,
            meeting2: false,
            meeting3: false,
        };

        this.next = this.next.bind(this);
        this.changingNumbers = this.changingNumbers.bind(this);
        this.stopChangingNumbers = this.stopChangingNumbers.bind(this);
        this.showOffice = this.showOffice.bind(this);
        this.hideOffice = this.hideOffice.bind(this);
        this.changingOffices = this.changingOffices.bind(this);
        this.showOfficeanswers = this.showOfficeanswers.bind(this);
        this.showMeeting = this.showMeeting.bind(this);
        this.hideMeeting = this.hideMeeting.bind(this);

    }

    componentDidMount() {
    }

    next() {
        if (this.state.game === 0) {
            off = setInterval(this.changingOffices, 1000);
            off1 = setInterval(this.showOffice.bind(null, 1), 2000);
            off2 = setInterval(this.showOffice.bind(null, 2), 7000);
            off3 = setInterval(this.showOffice.bind(null, 3), 10000);
            off4 = setInterval(this.showOffice.bind(null, 4), 12000);
            setTimeout(this.showOfficeanswers.bind(null, num), 17000);
        }
        if (this.state.game === 1) {
            num = setInterval(this.changingNumbers, 100);
            setInterval(this.stopChangingNumbers, 7000);
        }
        if (this.state.game === 2) {
            addResponseMessage('Can you help me with this pitch deck right now');
            toggleWidget();
        }
        if (this.state.game === 4) {
            meet1 = setInterval(this.showMeeting.bind(null, 1), 2000);
            meet2 = setInterval(this.showMeeting.bind(null, 2), 7000);
            meet3 = setInterval(this.showMeeting.bind(null, 3), 10000);
        }
        this.setState({ game: this.state.game + 1});
    }

    changingNumbers() {
        this.setState({ currentNumber: this.state.currentNumber + 1})
        if (this.state.currentNumber >= 9) {
            this.setState({ currentNumber: 0})
        }
    }

    stopChangingNumbers() {
        clearInterval(num)
    }

    changingOffices() {
        this.setState({ currentOfficeb: this.state.currentOfficeb + 1})
        if (this.state.currentOfficeb >= 8) {
            this.setState({ currentOfficeb: 0})
        }
    }

    showOffice(num) {
        switch (num) {
            case 1:
                this.setState({ office1: true});
                setTimeout(this.hideOffice.bind(null, num), 4000);
                break;
            case 2:
                this.setState({ office2: true});
                setTimeout(this.hideOffice.bind(null, num), 4000);
                break;
            case 3:
                this.setState({ office3: true});
                setTimeout(this.hideOffice.bind(null, num), 4000);
                break;
            case 4:
                this.setState({ office4: true});
                setTimeout(this.hideOffice.bind(null, num), 4000);
                break;
            default:
                this.setState({ office1: this.state.office1});
        }
    }

    hideOffice(num) {
        switch (num) {
            case 1:
                this.setState({ office1: false});
                break;
            case 2:
                this.setState({ office2: false});
                break;
            case 3:
                this.setState({ office3: false});
                break;
            case 4:
                this.setState({ office4: false});
                break;
            default:
                this.setState({ office1: this.state.office1});
        }
    }

    showOfficeanswers() {
        clearInterval(off);
        clearInterval(off1);
        clearInterval(off2);
        clearInterval(off3);
        clearInterval(off4);
        this.setState({ officeanswer: true});
    }

    handleNewUserMessage(msg) {
        addResponseMessage('Thanks');
    }

    updateProgress(num) {
        switch (num) {
            case 0:
                this.setState({ progress: this.state.progress + 1});
                break;
            case 25:
                this.setState({ progress: this.state.progress + 2});
                break;
            case 50:
                this.setState({ progress: this.state.progress + 3});
                break;
            case 75:
                this.setState({ progress: this.state.progress + 4});
                break;
            case 100:
                this.setState({ progress: this.state.progress + 5});
                break;
            default:
                this.setState({ progress: this.state.progress});
        }
    }

    showMeeting(num) {
        switch (num) {
            case 1:
                this.setState({ meeting1: true});
                setTimeout(this.hideMeeting.bind(null, num), 4000);
                break;
            case 2:
                this.setState({ meeting2: true});
                setTimeout(this.hideMeeting.bind(null, num), 4000);
                break;
            case 3:
                this.setState({ meeting3: true});
                setTimeout(this.hideMeeting.bind(null, num), 4000);
                break;
                this.setState({ meeting3: this.state.meeting3});
        }
    }

    hideMeeting(num) {
        switch (num) {
            case 1:
                this.setState({ meeting1: false});
                break;
            case 2:
                this.setState({ meeting2: false});
                break;
            case 3:
                this.setState({ meeting3: false});
                break;
            default:
                this.setState({ meeting3: this.state.meeting3});
        }
    }

    render() {
        switch (this.state.game) {
            case 0:
                return (
                    <div>
                        <div className="title">
                            <h2> TalentBridger </h2>
                        </div>
                        <button onClick={() => this.next()}>
                            Start
                        </button>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <div className="title">
                            <h2> TalentBridger </h2>
                        </div>
                        <div style={{position:'relative'}}>
                            <img src={this.state.officebs[this.state.currentOfficeb]} alt="office" className="backg" width="800" height="500"></img>
                            {this.state.office1 ? <h3 style={{position:'absolute', top:'50px', left:'500px'}}> PM: Meeting is at 12pm. </h3> : null}
                            {this.state.office2 ? <h3 style={{position:'absolute', top:'50px', left:'900px'}}> Manager: This report is due at 4pm today. </h3> : null}
                            {this.state.office3 ? <h3 style={{position:'absolute', top:'300px', left:'500px'}}> Boss: This form is due at 2pm today. </h3> : null}
                            {this.state.office4 ? <h3 style={{position:'absolute', top:'300px', left:'900px'}}> Bob: Good luck! </h3> : null}
                            {this.state.officeanswer ?
                                <div>
                                    <h3 style={{position:'absolute', top:'160px', left:'625px'}}> What time did Boss want the form by? </h3>
                                    <button style={{position:'absolute', top:'250px', left:'750px'}}>10am</button>
                                    <button style={{position:'absolute', top:'290px', left:'750px'}}>12pm</button>
                                    <button style={{position:'absolute', top:'330px', left:'750px'}}>2pm</button>
                                    <button style={{position:'absolute', top:'370px', left:'750px'}}>4pm</button>
                                </div>
                                : null
                            }
                        </div>
                        <button onClick={() => this.next()}>
                            Next
                        </button>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <div className="title">
                            <h2> TalentBridger </h2>
                        </div>
                        <div style={{position:'relative'}}>
                            <img src={numberss} alt="numberss" className="backg" width="800" height="500"></img>
                            <span style={{position:'absolute', top:'180px', left:'750px', fontSize:'100px'}}>{this.state.numbers[this.state.currentNumber]}</span>
                        </div>
                        <button onClick={() => this.next()}>
                            Next
                        </button>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <div className="title">
                            <h2> TalentBridger </h2>
                        </div>
                        <div style={{position:'relative'}}>
                            <img src={workspace} alt="workspace" width="800" height="500"></img>
                            <textarea
                                type="text"
                                onChange={(e) => this.setState({ mistake: e.target.value })}
                                onPaste={(e) => e.preventDefault()}
                                value={this.state.mistake}
                                style={{position:'absolute', top:'80px', left:'640px', width:'250px', height:'130px'}}
                            />
                            <Widget
                                handleNewUserMessage={this.handleNewUserMessage}
                                profileAvatar='null'
                                title="Manager"
                                subtitle=""
                            />
                        </div>
                        <button onClick={() => this.next()}>
                            Next
                        </button>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <div className="title">
                            <h2> TalentBridger </h2>
                        </div>
                        <div style={{position:'relative'}}>
                            <img src={group} alt="group" width="800" height="500"></img>
                            <span style={{position:'absolute', top:'250px', left:'780px'}}>{this.state.progress}%</span>
                            {this.state.choosePercent ?
                                <div>
                                    <button onClick={() => this.updateProgress(0)}>0%</button>
                                    <button onClick={() => this.updateProgress(25)}>25%</button>
                                    <button onClick={() => this.updateProgress(50)}>50%</button>
                                    <button onClick={() => this.updateProgress(75)}>75%</button>
                                    <button onClick={() => this.updateProgress(100)}>100%</button>
                                </div>
                                : null
                            }
                        </div>
                        <button onClick={() => this.next()}>
                            Next
                        </button>
                    </div>
                );
            case 5:
                return (
                    <div>
                        <div className="title">
                            <h2> TalentBridger </h2>
                        </div>
                        <div style={{position:'relative'}}>
                            <img src={meeting} alt="meeting" width="800" height="500"></img>
                            {this.state.meeting1 ? <div><img src={speech1} alt="speech1" width="200" style={{position:'absolute', top:'50px', left:'560px'}}></img><h3 style={{position:'absolute', top:'50px', left:'560px'}}>Did you finish the project?</h3></div> : null}
                            {this.state.meeting2 ? <div><img src={speech1} alt="speech1" width="200" style={{position:'absolute', top:'50px', left:'830px'}}></img><h3 style={{position:'absolute', top:'50px', left:'830px'}}>Did you complete you goals for the week?</h3></div> : null}
                            {this.state.meeting3 ? <div><img src={speech2} alt="speech2" width="200" height="100" style={{position:'absolute', top:'120px', left:'860px'}}></img><h3 style={{position:'absolute', top:'120px', left:'860px'}}>Who do you think works the hardest in the office?</h3></div> : null}
                        </div>
                        <button onClick={() => this.next()}>
                            Start3
                        </button>
                    </div>
                );
            default:
                return (
                    null
                );
        }
    }
}

export default App;

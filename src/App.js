import React, { Component } from 'react';
import Modal from 'react-modal';
import { css } from "@emotion/core";
import ClockLoader from "react-spinners/ClockLoader";
import './App.css';
import office from './office.jpeg';
import meeting from './meeting.png';
//import numberss from './numberss.jpg';
import workspace from './workspace.jpeg';
import group from './group.jpg';
var num;
var time;
var time2;
var off;
var off1;
var off2;
var off3;
var off4;
var meet1;
var meet2;
var meet3;
var meet;

const startmodal = {
  content : {
    top                   : '50%',
    left                  : '48%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width : '250px'
  }
};

const endmodal = {
  content : {
    top                   : '50%',
    left                  : '48%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width : '250px'
  }
};

const mistakemodal = {
  content : {
    top                   : '50%',
    left                  : '48%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width : '250px'
  }
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            game: 0,
            retry: false,
            startmodal: false,
            starts: ["Simulation: You have just arrived to the office and are walking to your desk.", "Game: Click the number when it lands on 6.", "Simulation: You are writing a reflection about your biggest mistakes with a quickly approaching deadline.", "Game: Select percentages of work to give your groupmates for the project.", "Simulation: You are having your 1-on-1 meeting with your managers."],
            endmodal: false,
            ends: ["Simulation Completed", "Game Completed", "Simulation Completed", "Game Completed", "Simulation Completed"],
            officeleft1: false,
            officeleft2: false,
            officeleft3: false,
            officeright1: false,
            officeright2: false,
            officespeeches: ["Good morning.", "Good morning!", "How was your commute?", "Terrible, so much traffic!", "Don't forget about meeting later.", "Do you want coffee?", "It's been so hectic lately.", "Tell me about it!", "Team meeting at 4pm!", "Proposal due Friday!", "Please have plans ready.", "When is your project due?", "I think Thursday.", "Company meeting at 2pm!", "Add your ideas to the spreadsheet.", "Company social this weekend!", "I'll get back to work.", "See you later!"],
            currentoffice: -1,
            numbers: [4, 7, 2, 1, 0, 9, 6, 3, 8, 5],
            currentNumber: 0,
            numberround: 1,
            roundmodal: false,
            progress: 0,
            mistake: "",
            showMistake: true,
            mistakeModal: false,
            choosePercent: true,
            currentMeeting: 0,
            meeting1: true,
            meeting2: false,
            meeting3: false,
            meeting4: true,
            meetingQuestions: ['How are you doing today?', 'Do you have any concerns?', 'Did you complete your goals?', 'Do you have any roadblocks?', 'What do you want to learn?', 'Did your team complete the project?', 'What time is your meeting later?', 'Can you work late tonight?', 'How can our company improve?'],
            meetingAnswers: [['Great! It has been hectic but our project is going progressing well.', 'Good! However I think other employees have been overwhelmed lately.', 'Okay. I think the other people on my team are struggling more than I am.', 'Not great. I have been frustrated about our lack of progress on our project.'], ['I am not sure I can keep up with my workload and deadlines.', 'I am worried about our project but we will keep trying new possible strategies.', 'I am curious about our next steps and goals as a company.', 'I have no concerns. Everything is going well and I am enjoying my job!'], ['Yes! They were a stretch but I am glad I attempted and completed them.', 'Of course! They were pretty simple and I completed them easily.', 'No, unfortunately I have been spending most of my time on other projects.', 'No, I think they were unreasonable and impossible to complete.'], ['A few personal situations have arisen but I will take care of them on my own.', 'Our team has not been communicating well lately but we will work on it.', 'No, everything has been going well and there have been no obstacles.', 'I would appreciate any tips on how to better communicate with my team.'], ['I want to learn everything I can! I love absorbing knowledge.', 'I would like to learn more about my current project and its applications.', 'I will hold off on learning new material and focus on my current material.', 'I would like to learn more about different roles within the company.'], ['Yes, we all collaborated and completed the project efficiently.', 'Yes, but my teammates were not very helpful and I did most of the work.', 'No, we did not finish because my teammates were uncooperative.', 'No, we did not finish because we were not communicating effectively.'], ['I scheduled it to be at 3pm.', 'We scheduled it for 4pm at our last meeting.', 'I believe it is scheduled at 2pm.', 'I am not sure but I will check with everyone else.'], ['Of course! I am happy to do anything to support the company and its mission.', 'I am willing to stay if no one else is able to but would prefer to be home.', 'No, I unfortunately already have plans for tonight and cannot stay late.', 'No, I would like to spend time with my family and friends during evenings.'], ['I think we should all work harder to drive our company mission forward!', 'I think having better work-life balances would improve our productivity at work!', 'I think we are doing great and do not need any improvements!', 'I think having more company socials would improve our communication!']],
        };

        this.next = this.next.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.changingNumbers = this.changingNumbers.bind(this);
        this.stopChangingNumbers = this.stopChangingNumbers.bind(this);
        this.showOfficeanswers = this.showOfficeanswers.bind(this);
        this.showMeet = this.showMeet.bind(this);
        this.updateMeet = this.updateMeet.bind(this);
        this.showOffice = this.showOffice.bind(this);
        this.hideOffice = this.hideOffice.bind(this);
        this.updateProgress = this.updateProgress.bind(this);
        this.showProgress = this.showProgress.bind(this);
        this.black = this.black.bind(this);
        this.light = this.light.bind(this);
        this.blockMistake = this.blockMistake.bind(this);
        this.blockno = this.blockno.bind(this);
        this.endOffice = this.endOffice.bind(this);
        this.endNumbers = this.endNumbers.bind(this);
        this.endwriting = this.endwriting.bind(this);
        this.retry = this.retry.bind(this);
        this.round = this.round.bind(this);
        this.showround = this.showround.bind(this);
    }

    retry() {
        this.setState({ endmodal: false});
        this.setState({ retry: true});
        if (this.state.game === 1) {
            this.setState({ currentoffice: -1});
            setTimeout(this.showOffice.bind(null, 'right1'), 2500);
            setTimeout(this.showOffice.bind(null, 'left1'), 6000);
            setTimeout(this.showOffice.bind(null, 'left2'), 12000);
            setTimeout(this.showOffice.bind(null, 'right2'), 15000);
            setTimeout(this.showOffice.bind(null, 'left3'), 18500);
            setTimeout(this.showOffice.bind(null, 'right2'), 23000);
            setTimeout(this.showOffice.bind(null, 'left2'), 27000);
            setTimeout(this.showOffice.bind(null, 'right2'), 30000);
            setTimeout(this.showOffice.bind(null, 'left3'), 33500);
            setTimeout(this.showOffice.bind(null, 'left3'), 40500);
            setTimeout(this.showOffice.bind(null, 'right1'), 47500);
            setTimeout(this.showOffice.bind(null, 'left2'), 57000);
            setTimeout(this.showOffice.bind(null, 'right2'), 60000);
            setTimeout(this.showOffice.bind(null, 'right2'), 68000);
            setTimeout(this.showOffice.bind(null, 'left1'), 73500);
            setTimeout(this.showOffice.bind(null, 'right1'), 77000);
            setTimeout(this.showOffice.bind(null, 'left2'), 87000);
            setTimeout(this.showOffice.bind(null, 'right2'), 90000);
            setTimeout(this.endOffice, 100000);
        }
        if (this.state.game === 2) {
            this.setState({ roundmodal: true, numberround: 1, currentNumber: 0});
        }
        if (this.state.game === 3) {
            this.setState({ mistake: ""});
            setTimeout(this.black, 50000);
            setTimeout(this.blockMistake, 90000);
        }
        if (this.state.game === 4) {
            this.setState({ progress: 0, choosePercent: true});
            setTimeout(this.endwriting, 120000);
        }
        if (this.state.game === 5) {
            this.setState({ currentMeeting: 0, meeting1: true, meeting2: false, meeting3: false, meeting4: true});
        }
    }

    closeModal() {
        this.setState({ startmodal: false});
        this.setState({ endmodal: false});
        if (this.state.game === 1) {
            setTimeout(this.showOffice.bind(null, 'right1'), 2500);
            setTimeout(this.showOffice.bind(null, 'left1'), 6000);
            setTimeout(this.showOffice.bind(null, 'left2'), 12000);
            setTimeout(this.showOffice.bind(null, 'right2'), 15000);
            setTimeout(this.showOffice.bind(null, 'left3'), 18500);
            setTimeout(this.showOffice.bind(null, 'right2'), 23000);
            setTimeout(this.showOffice.bind(null, 'left2'), 27000);
            setTimeout(this.showOffice.bind(null, 'right2'), 30000);
            setTimeout(this.showOffice.bind(null, 'left3'), 33500);
            setTimeout(this.showOffice.bind(null, 'left3'), 40500);
            setTimeout(this.showOffice.bind(null, 'right1'), 47500);
            setTimeout(this.showOffice.bind(null, 'left2'), 57000);
            setTimeout(this.showOffice.bind(null, 'right2'), 60000);
            setTimeout(this.showOffice.bind(null, 'right2'), 68000);
            setTimeout(this.showOffice.bind(null, 'left1'), 73500);
            setTimeout(this.showOffice.bind(null, 'right1'), 77000);
            setTimeout(this.showOffice.bind(null, 'left2'), 87000);
            setTimeout(this.showOffice.bind(null, 'right2'), 90000);
            setTimeout(this.endOffice, 100000);
        }
        if (this.state.game === 2) {
            this.setState({ roundmodal: true});
        }
        if (this.state.game === 3) {
            setTimeout(this.black, 50000);
            setTimeout(this.blockMistake, 90000);
        }
        if (this.state.game === 4) {
            setTimeout(this.endwriting, 120000);
        }
    }

    next() {
        this.setState({ startmodal: true});
        this.setState({ endmodal: false});
        this.setState({ game: this.state.game + 1});
    }

    endOffice() {
        this.setState({ endmodal: true});
    }

    showOffice(type) {
        this.setState({ currentoffice: this.state.currentoffice + 1});
        setTimeout(this.hideOffice.bind(null, type), 1500);
        switch (type) {
            case 'left1':
                this.setState({ officeleft1: true});
                break;
            case 'left2':
                this.setState({ officeleft2: true});
                break;
            case 'left3':
                this.setState({ officeleft3: true});
                break;
            case 'right1':
                this.setState({ officeright1: true});
                break;
            case 'right2':
                this.setState({ officeright2: true});
                break;
            default:

        }

    }

    hideOffice(type) {
        switch (type) {
            case 'left1':
                this.setState({ officeleft1: false});
                break;
            case 'left2':
                this.setState({ officeleft2: false});
                break;
            case 'left3':
                this.setState({ officeleft3: false});
                break;
            case 'right1':
                this.setState({ officeright1: false});
                break;
            case 'right2':
                this.setState({ officeright2: false});
                break;
            default:

        }
    }

    round() {
        this.setState({ roundmodal: false});
        num = setInterval(this.changingNumbers, 50);
        switch(this.state.numberround) {
            case 1:
                time = setTimeout(this.stopChangingNumbers, 30000);
                this.setState({ currentNumber: 0, numberround: 2});
                break;
            case 2:
                time = setTimeout(this.stopChangingNumbers, 15000);
                this.setState({ currentNumber: 0, numberround: 2.1});
                break;
            case 2.1:
                time = setTimeout(this.stopChangingNumbers, 15000);
                this.setState({ numberround: 2.2});
                break;
            case 2.2:
                time = setTimeout(this.stopChangingNumbers, 15000);
                this.setState({ numberround: 3});
                break;
            case 3:
                time = setTimeout(this.stopChangingNumbers, 20100);
                this.setState({ currentNumber: 0, numberround: 3.1});
                break;
            case 3.1:
                this.setState({ numberround: 4});
                break;
            case 4:
                time = setTimeout(this.stopChangingNumbers, 4800);
                this.setState({ currentNumber: 0, numberround: 5});
                break;

        }
    }

    showround() {
        clearInterval(num);
        clearTimeout(time);
        clearTimeout(time2);
        this.setState({ numberround: Math.ceil(this.state.numberround)})
        if (this.state.numberround == 5) {
            this.setState({ endmodal: true});
        } else {
            this.setState({ roundmodal: true});
        }
    }

    changingNumbers() {
        this.setState({ currentNumber: this.state.currentNumber + 1})
        if (this.state.currentNumber >= 9) {
            this.setState({ currentNumber: 0})
        }
    }

    stopChangingNumbers() {
        clearInterval(num)
        switch(this.state.numberround) {
            case 2.1:
                time2 = setTimeout(this.round, 10000);
                break;
            case 2.2:
                time2 = setTimeout(this.round, 10000);
                break;
            case 3.1:
                time2 = setTimeout(this.round, 500);
                break;
        }
    }

    endNumbers() {
        this.setState({ endmodal: true});
    }

    showOfficeanswers() {
        clearInterval(off);
        clearInterval(off1);
        clearInterval(off2);
        clearInterval(off3);
        clearInterval(off4);
        this.setState({ officeanswer: true});
    }

    black() {
        this.setState({ showMistake: false});
        this.setState({ mistake: ""});
        setTimeout(this.light, 3000);
    }

    light() {
        this.setState({ showMistake: true});
    }

    blockMistake() {
        this.setState({ mistakeModal: true});
    }

    blockno() {
        this.setState({ mistakeModal: false});
        setTimeout(this.endwriting, 30000);
    }

    endwriting() {
        this.setState({ mistakeModal: false});
        this.setState({ endmodal: true});
    }

    updateProgress(num) {
        this.setState({ choosePercent: false});
        switch (num) {
            case 0:
                if (this.state.progress < 50) {
                    setTimeout(this.showProgress.bind(null, this.state.progress + 11), 10000);
                } else {
                    setTimeout(this.showProgress.bind(null, this.state.progress + 6), 20000);
                }
                break;
            case 25:
                if (this.state.progress < 50) {
                    setTimeout(this.showProgress.bind(null, this.state.progress + 9), 10000);
                } else {
                    setTimeout(this.showProgress.bind(null, this.state.progress + 7), 20000);
                }
                break;
            case 50:
                if (this.state.progress < 50) {
                    setTimeout(this.showProgress.bind(null, this.state.progress + 8), 10000);
                } else {
                    setTimeout(this.showProgress.bind(null, this.state.progress + 8), 20000);
                }
                break;
            case 75:
                if (this.state.progress < 50) {
                    setTimeout(this.showProgress.bind(null, this.state.progress + 6), 10000);
                } else {
                    setTimeout(this.showProgress.bind(null, this.state.progress + 9), 20000);
                }
                break;
            case 100:
                if (this.state.progress < 50) {
                    setTimeout(this.showProgress.bind(null, this.state.progress + 5), 10000);
                } else {
                    setTimeout(this.showProgress.bind(null, this.state.progress + 13), 20000);
                }
                break;
            default:
                this.setState({ progress: this.state.progress});
        }
    }

    showProgress(num) {
        this.setState({ progress: num});
        this.setState({ choosePercent: true});
    }

    remind() {
        this.setState({ progress: this.state.progress + 0.5});
    }

    updateMeet() {
        if (this.state.currentMeeting >= 8) {
            this.setState({ endmodal: true,  meeting4: false,  meeting3: false});
            this.setState({ meeting4: false});
            clearTimeout(meet);
        } else {
            switch (this.state.currentMeeting%3) {
                case 0:
                    this.setState({ meeting1: false});
                    this.setState({ meeting2: true});
                    this.setState({ meeting4: false});
                    meet = setTimeout(this.showMeet, 200);
                    this.setState({ currentMeeting: this.state.currentMeeting + 1});
                    break;
                case 1:
                    this.setState({ meeting2: false});
                    this.setState({ meeting3: true});
                    this.setState({ meeting4: false});
                    meet = setTimeout(this.showMeet, 200);
                    this.setState({ currentMeeting: this.state.currentMeeting + 1});
                    break;
                case 2:
                    this.setState({ meeting3: false});
                    this.setState({ meeting1: true});
                    this.setState({ meeting4: false});
                    meet = setTimeout(this.showMeet, 200);
                    this.setState({ currentMeeting: this.state.currentMeeting + 1});
                    break;
                default:
                    this.setState({ meeting3: this.state.meeting3});
            }
        }
    }

    showMeet() {
        this.setState({ meeting4: true});
    }

    render() {
        switch (this.state.game) {
            case 0:
                return (
                    <div>
                        <div className="title">
                            <h2> TalentBridger </h2>
                        </div>
                        <h3 style={{position:'absolute', top:'-1%', right:'3%'}}> Nicholas Guan </h3>
                        <h3 style={{width:'50%', marginLeft:'25%'}}> Welcome to TalentBridger! <br/><br/><br/>  You are about to play a series of games and simulutions that will allow companies to better understand your soft skills. There are no correct answers so please perform as you would in real life. <br/> <br/> After you complete each game or simulation, you will have option to retry or move on to the next game or simulation. You can retry as many times as you like but there is an unknown time limit for completing all the games and simulations. <br/> <br/> Good luck and have fun! Remember that there are NO correct answers!</h3>
                        <div>
                            <button style={{height:'40px', borderRadius:'8px', fontSize:'20px', backgroundColor:'lightblue', color:'black', width:'20%', marginTop:'3%'}} onClick={() => this.next()}> Start </button>
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <div className="title">
                            <h2> TalentBridger </h2>
                        </div>
                        <h3 style={{position:'absolute', top:'-1%', right:'3%'}}> Nicholas Guan </h3>
                        <Modal isOpen={this.state.startmodal} style={startmodal}>
                            <div className="modal">
                                <h3 style={{ opacity: '80%' }}> {this.state.starts[this.state.game - 1]} </h3>
                                <button onClick={this.closeModal}>Got it!</button>
                            </div>
                        </Modal>
                        <Modal isOpen={this.state.endmodal} style={endmodal}>
                            <div className="modal2">
                                <h3 style={{ opacity: '80%' }}> {this.state.ends[this.state.game - 1]} </h3>
                                <div className="grid">
                                    <button onClick={this.retry}>Retry</button>
                                    <button onClick={this.next}>Next</button>
                                </div>
                            </div>
                        </Modal>
                        <div style={{position:'relative'}}>
                            <div id={this.state.startmodal ? 'noanimate-area' : this.state.endmodal ? 'noanimate-area' : 'animate-area'}></div>
                            {this.state.officeleft1 ? <h3 class="speechleft1">{this.state.officespeeches[this.state.currentoffice]}</h3> : null}
                            {this.state.officeleft2 ? <h3 class="speechleft2">{this.state.officespeeches[this.state.currentoffice]}</h3> : null}
                            {this.state.officeleft3 ? <h3 class="speechleft3">{this.state.officespeeches[this.state.currentoffice]}</h3> : null}
                            {this.state.officeright1 ? <h3 class="speechright1">{this.state.officespeeches[this.state.currentoffice]}</h3> : null}
                            {this.state.officeright2 ? <h3 class="speechright2">{this.state.officespeeches[this.state.currentoffice]}</h3> : null}
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <div className="title">
                            <h2> TalentBridger </h2>
                        </div>
                        <h3 style={{position:'absolute', top:'-5px', right:'50px'}}> Nicholas Guan </h3>
                        <Modal isOpen={this.state.startmodal} style={startmodal}>
                            <div className="modal">
                                <h3 style={{ opacity: '80%' }}> {this.state.starts[this.state.game - 1]} </h3>
                                <button onClick={this.closeModal}>Got it!</button>
                            </div>
                        </Modal>
                        <Modal isOpen={this.state.endmodal} style={endmodal}>
                            <div className="modal2">
                                <h3 style={{ opacity: '80%' }}> {this.state.ends[this.state.game - 1]} </h3>
                                <div className="grid">
                                    <button onClick={this.retry}>Retry</button>
                                    <button onClick={this.next}>Next</button>
                                </div>
                            </div>
                        </Modal>
                        <Modal isOpen={this.state.roundmodal} style={startmodal}>
                            <div className="modal">
                                <h3 style={{ opacity: '80%' }}> Round {this.state.numberround} </h3>
                                <button onClick={this.round}>Okay</button>
                            </div>
                        </Modal>
                        <div style={{position:'relative'}}>
                            <span style={{position:'absolute', top:'180px', left:'50%', fontSize:'100px'}} onClick={this.showround}>{this.state.numbers[this.state.currentNumber]}</span>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <div className="title">
                            <h2> TalentBridger </h2>
                        </div>
                        <h3 style={{position:'absolute', top:'-5px', right:'50px'}}> Nicholas Guan </h3>
                        <Modal isOpen={this.state.startmodal} style={startmodal}>
                            <div className="modal">
                                <h3 style={{ opacity: '80%' }}> {this.state.starts[this.state.game - 1]} </h3>
                                <button onClick={this.closeModal}>Got it!</button>
                            </div>
                        </Modal>
                        <Modal isOpen={this.state.endmodal} style={endmodal}>
                            <div className="modal2">
                                <h3 style={{ opacity: '80%' }}> {this.state.ends[this.state.game - 1]} </h3>
                                <div className="grid">
                                    <button onClick={this.retry}>Retry</button>
                                    <button onClick={this.next}>Next</button>
                                </div>
                            </div>
                        </Modal>
                        <Modal isOpen={this.state.mistakeModal} style={mistakemodal}>
                            <div className="modal2">
                                <h3 style={{ opacity: '80%' }}> Your co-worker needs your help but you're on a time crunch! What are you going to do? </h3>
                                <div className="grid">
                                    <button onClick={this.endwriting}>Help</button>
                                    <button onClick={this.blockno}>Later</button>
                                </div>
                            </div>
                        </Modal>
                        <div style={{position:'relative'}}>
                            <img src={workspace} alt="workspace" width="800" height="500"></img>
                            {this.state.showMistake ?
                                <textarea
                                    type="text"
                                    onChange={(e) => this.setState({ mistake: e.target.value })}
                                    onPaste={(e) => e.preventDefault()}
                                    value={this.state.mistake}
                                    style={{position:'absolute', top:'157px', left:'44.5%', minWidth:'150px', minHeight:'99px'}}
                                /> :
                                <div style={{backgroundColor:'black', color:'white', position:'absolute', top:'157px', left:'44.5%', width:'161px', height:'105px'}}> Computer Restarted</div>
                            }
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <div className="title">
                            <h2> TalentBridger </h2>
                        </div>
                        <h3 style={{position:'absolute', top:'-5px', right:'50px'}}> Nicholas Guan </h3>
                        <Modal isOpen={this.state.startmodal} style={startmodal}>
                            <div className="modal">
                                <h3 style={{ opacity: '80%' }}> {this.state.starts[this.state.game - 1]} </h3>
                                <button onClick={this.closeModal}>Got it!</button>
                            </div>
                        </Modal>
                        <Modal isOpen={this.state.endmodal} style={endmodal}>
                            <div className="modal2">
                                <h3 style={{ opacity: '80%' }}> {this.state.ends[this.state.game - 1]} </h3>
                                <div className="grid">
                                    <button onClick={this.retry}>Retry</button>
                                    <button onClick={this.next}>Next</button>
                                </div>
                            </div>
                        </Modal>
                        <div style={{position:'relative'}}>
                            <img src={group} alt="group" width="800" height="500"></img>
                            <span style={{position:'absolute', top:'240px', left:'50%', width:'60px', transform:'rotate(14deg)'}}>{Math.floor(this.state.progress)}% complete</span>
                            <div style={{top:'282px', left:'49.5%', height:'8px', width:'70px', position:'absolute', background:'lightgrey', borderRadius:'25px', transform:'rotate(14deg)'}}>
                                <div style={{height:'8px', width:this.state.progress/100*70, background:'orange', borderRadius:'25px'}}></div>
                            </div>
                            {this.state.choosePercent ? null :
                                <div style={{position:'absolute', left:'39%', top:'290px'}}>
                                    <ClockLoader
                                        size={'40px'}
                                        color={'red'}
                                        loading={true}
                                    />
                                </div>
                            }
                            {this.state.choosePercent ?
                                <div>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'415px', left:'49%', width:'60px', borderRadius:'30%', background:'gold', border:'none'}} onClick={() => this.updateProgress(0)}>0%</button>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'365px', left:'58%', width:'60px', borderRadius:'30%', background:'gold', border:'none'}} onClick={() => this.updateProgress(25)}>25%</button>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'250px', left:'57.3%', width:'60px', borderRadius:'30%', background:'gold', border:'none'}} onClick={() => this.updateProgress(50)}>50%</button>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'290px', left:'65%', width:'60px', borderRadius:'30%', background:'gold', border:'none'}} onClick={() => this.updateProgress(75)}>75%</button>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'150px', left:'51%', width:'60px', borderRadius:'30%', background:'gold', border:'none'}} onClick={() => this.updateProgress(100)}>100%</button>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'350px', left:'39%', width:'60px', borderRadius:'30%', background:'gold', border:'none'}} onClick={() => this.remind()}>Remind</button>
                                </div> :
                                <div>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'415px', left:'49%', width:'60px', borderRadius:'30%', background:'khaki', border:'none'}}>0%</button>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'365px', left:'58%', width:'60px', borderRadius:'30%', background:'khaki', border:'none'}}>25%</button>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'250px', left:'57.3%', width:'60px', borderRadius:'30%', background:'khaki', border:'none'}}>50%</button>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'290px', left:'65%', width:'60px', borderRadius:'30%', background:'khaki', border:'none'}}>75%</button>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'150px', left:'51%', width:'60px', borderRadius:'30%', background:'khaki', border:'none'}}>100%</button>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'350px', left:'39%', width:'60px', borderRadius:'30%', background:'gold', border:'none'}} onClick={() => this.remind()}>Remind</button>
                                </div>
                            }
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div>
                        <div className="title">
                            <h2> TalentBridger </h2>
                        </div>
                        <h3 style={{position:'absolute', top:'-5px', right:'50px'}}> Nicholas Guan </h3>
                        <Modal isOpen={this.state.startmodal} style={startmodal}>
                            <div className="modal">
                                <h3 style={{ opacity: '80%' }}> {this.state.starts[this.state.game - 1]} </h3>
                                <button onClick={this.closeModal}>Got it!</button>
                            </div>
                        </Modal>
                        <Modal isOpen={this.state.endmodal} style={endmodal}>
                            <div className="modal2">
                                <h3 style={{ opacity: '80%' }}> {this.state.ends[this.state.game - 1]} </h3>
                                <div className="grid">
                                    <button onClick={this.retry}>Retry</button>
                                    <button onClick={this.next}>Next</button>
                                </div>
                            </div>
                        </Modal>
                        <div style={{position:'relative'}}>
                            <img src={meeting} alt="meeting" width="800" height="500"></img>
                            {this.state.meeting1 ? <div><h3 style={{position:'absolute', top:'85px', left:'35%', width:'85px'}}>{this.state.meetingQuestions[this.state.currentMeeting]}</h3></div> : null}
                            {this.state.meeting2 ? <div><h3 style={{position:'absolute', top:'95px', left:'48%', width:'80px'}}>{this.state.meetingQuestions[this.state.currentMeeting]}</h3></div> : null}
                            {this.state.meeting3 ? <div><h3 style={{position:'absolute', top:'15px', left:'57%', width:'96px'}}>{this.state.meetingQuestions[this.state.currentMeeting]}</h3></div> : null}
                            {this.state.meeting1 ? null : <div style={{position:'absolute', width:'115px', height:'110px', backgroundColor:'white', top:'85px', left:'34.5%'}}> </div>}
                            {this.state.meeting2 ? null : <div style={{position:'absolute', width:'95px', height:'92px', backgroundColor:'white', top:'100px', left:'47.5%'}}> </div>}
                            {this.state.meeting3 ? null : <div style={{position:'absolute', width:'115px', height:'110px', backgroundColor:'white', top:'25px', left:'56%'}}> </div>}
                            {this.state.meeting4 ? <button style={{position:'absolute', top:'415px', right:'51%', height: '40px', width:'250px', borderRadius:'20px', backgroundColor:'thistle', border:'1.5px hidden purple'}} onClick={() => this.updateMeet()}>{this.state.meetingAnswers[this.state.currentMeeting][0]}</button> : null}
                            {this.state.meeting4 ? <button style={{position:'absolute', top:'365px', left:'51%', height: '40px', width:'250px', borderRadius:'20px', backgroundColor:'thistle', border:'1.5px hidden purple'}} onClick={() => this.updateMeet()}>{this.state.meetingAnswers[this.state.currentMeeting][1]}</button> : null}
                            {this.state.meeting4 ? <button style={{position:'absolute', top:'365px', right:'51%', height: '40px', width:'250px', borderRadius:'20px', backgroundColor:'thistle', border:'1.5px hidden purple'}} onClick={() => this.updateMeet()}>{this.state.meetingAnswers[this.state.currentMeeting][2]}</button> : null}
                            {this.state.meeting4 ? <button style={{position:'absolute', top:'415px', left:'51%', height: '40px', width:'250px', borderRadius:'20px', backgroundColor:'thistle', border:'1.5px hidden purple'}} onClick={() => this.updateMeet()}>{this.state.meetingAnswers[this.state.currentMeeting][3]}</button> : null}
                        </div>
                    </div>
                );
            case 6:
            return (
                <div>
                    <div className="title">
                        <h2> TalentBridger </h2>
                    </div>
                    <h3 style={{position:'absolute', top:'-1%', right:'3%'}}> Nicholas Guan </h3>
                    <h3 style={{width:'50%', marginLeft:'25%'}}> Congratulations, you have completed all the games and simulations for TalentBridger! We will be in touch with next steps and guidance on applying to companies. If you have any questions, please contact us at talentbridger@gmail.com.</h3>
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

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
var off;
var off1;
var off2;
var off3;
var off4;
var meet1;
var meet2;
var meet3;

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

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            game: 0,
            startmodal: false,
            starts: ["Simulation: walk though office", "Game: click the number 2", "Simulation: write a report about your biggest mistakes", "Game: select percentages of work to give unreliable groupmates", "Simulation: meeting with managers"],
            endmodal: false,
            ends: ["Simulation Completed", "Game Completed", "Simulation Completed", "Game Completed", "Simulations Completed"],
            officeleft1: false,
            officeleft2: false,
            officeright1: false,
            officeright2: false,
            officeanswer: false,
            officespeeches: ["Good morning", "Good Morning!", "Meeting at 4pm today"],
            currentoffice: -1,
            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            currentNumber: 0,
            progress: 0,
            mistake: "",
            showMistake: true,
            choosePercent: true,
            currentMeeting: 0,
            meeting1: true,
            meeting2: false,
            meeting3: false,
            meeting4: true,
            meetingQuestions: ['What time is the meeting later?', 'Did you finish the project?', 'Did you help Bob with his report?', 'Did you finish the project?'],
            meetingAnswers: [['Yes, my teammates were awesome and really helpful', 'Yes but I did the majority of the work without their help', 'No, my teammates were extremely unhelpful and delayed our progress', 'No I did not want it and think that it is a waste of time'], ['I think Bob said it is at 2pm', 'I think Joe said it is at 4pm in the lunch room', 'I do not think there is another meeting today until tomorrow', 'I am not sure but I will ask around and get back to you'], ['Yes it went super quick with both of us working on it', 'Yes but I did the majority of the work instead of him', 'No I had to finish my own project due today and did not have spare time', 'No I think my project is more important than his so I worked on my own'], ['Yes, my teammates were awesome and really helpful', 'Yes but I did the majority of the work without their help', 'No, my teammates were extremely unhelpful and delayed our progress', 'No I did not want it and think that it is a waste of time']],
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
        this.endOffice = this.endOffice.bind(this);
        this.endNumbers = this.endNumbers.bind(this);
        this.endwriting = this.endwriting.bind(this);

    }

    closeModal() {
        this.setState({ startmodal: false});
        this.setState({ endmodal: false});
        if (this.state.game === 1) {
            setTimeout(this.showOffice.bind(null, 'right1'), 2500);
            setTimeout(this.showOffice.bind(null, 'left1'), 6000);
            setTimeout(this.showOffice.bind(null, 'left2'), 12000);
            setTimeout(this.endOffice, 16000);
            //setTimeout(this.showOfficeanswers.bind(null, num), 17000);
        }
        if (this.state.game === 2) {
            num = setInterval(this.changingNumbers, 50);
            setInterval(this.stopChangingNumbers, 10000);
        }
        if (this.state.game === 3) {
            setTimeout(this.black, 6000);
            setTimeout(this.endwriting, 12000);
        }
        if (this.state.game === 4) {
            setTimeout(this.endwriting, 12000);
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
        switch (type) {
            case 'left1':
                this.setState({ officeleft1: true});
                this.setState({ currentoffice: this.state.currentoffice + 1});
                setTimeout(this.hideOffice.bind(null, type), 1500);
                break;
            case 'left2':
                this.setState({ officeleft2: true});
                this.setState({ currentoffice: this.state.currentoffice + 1});
                setTimeout(this.hideOffice.bind(null, type), 1500);
                break;
            case 'right1':
                this.setState({ officeright1: true});
                this.setState({ currentoffice: this.state.currentoffice + 1});
                setTimeout(this.hideOffice.bind(null, type), 1500);
                break;
            case 'right2':
                this.setState({ officeright2: true});
                this.setState({ currentoffice: this.state.currentoffice + 1});
                setTimeout(this.hideOffice.bind(null, type), 1500);
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
            case 'right1':
                this.setState({ officeright1: false});
                break;
            case 'right2':
                this.setState({ officeright2: false});
                break;
            default:

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

    endwriting() {
        this.setState({ endmodal: true});
    }

    updateProgress(num) {
        switch (num) {
            case 0:
                this.setState({ progress: this.state.progress + 1});
                this.setState({ choosePercent: false});
                setTimeout(this.showProgress, 5000);
                break;
            case 25:
                this.setState({ progress: this.state.progress + 2});
                this.setState({ choosePercent: false});
                setTimeout(this.showProgress, 5000);
                break;
            case 50:
                this.setState({ progress: this.state.progress + 3});
                this.setState({ choosePercent: false});
                setTimeout(this.showProgress, 5000);
                break;
            case 75:
                this.setState({ progress: this.state.progress + 4});
                this.setState({ choosePercent: false});
                setTimeout(this.showProgress, 5000);
                break;
            case 100:
                this.setState({ progress: this.state.progress + 5});
                this.setState({ choosePercent: false});
                setTimeout(this.showProgress, 5000);
                break;
            default:
                this.setState({ progress: this.state.progress});
        }
    }

    showProgress() {
        this.setState({ choosePercent: true});
    }

    remind() {
        this.setState({ progress: this.state.progress + 1});
    }

    updateMeet() {
        switch (this.state.currentMeeting%3) {
            case 0:
                this.setState({ meeting1: false});
                this.setState({ meeting2: true});
                this.setState({ meeting4: false});
                setTimeout(this.showMeet, 200);
                this.setState({ currentMeeting: this.state.currentMeeting + 1});
                break;
            case 1:
                this.setState({ meeting2: false});
                this.setState({ meeting3: true});
                this.setState({ meeting4: false});
                setTimeout(this.showMeet, 200);
                this.setState({ currentMeeting: this.state.currentMeeting + 1});
                break;
            case 2:
                this.setState({ meeting3: false});
                this.setState({ meeting1: true});
                this.setState({ meeting4: false});
                setTimeout(this.showMeet, 200);
                this.setState({ currentMeeting: this.state.currentMeeting + 1});
                break;
            default:
                this.setState({ meeting3: this.state.meeting3});
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
                        <h3 style={{position:'absolute', top:'-5px', right:'50px'}}> Nicholas Guan </h3>
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
                                    <button onClick={this.closeModal}>Retry</button>
                                    <button onClick={this.next}>Next</button>
                                </div>
                            </div>
                        </Modal>
                        <div style={{position:'relative'}}>
                            <div id={this.state.startmodal ? 'noanimate-area' : 'animate-area'}></div>
                            {this.state.officeleft1 ? <h3 class="speechleft1" style={{top:'{this.state.officetops}', left:'{this.state.officelefts}'}}>{this.state.officespeeches[this.state.currentoffice]}</h3> : null}
                            {this.state.officeleft2 ? <h3 class="speechleft2">{this.state.officespeeches[this.state.currentoffice]}</h3> : null}
                            {this.state.officeright1 ? <h3 class="speechright1">{this.state.officespeeches[this.state.currentoffice]}</h3> : null}
                            {this.state.officeright2 ? <h3 class="speechright2">{this.state.officespeeches[this.state.currentoffice]}</h3> : null}
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
                                    <button onClick={this.closeModal}>Retry</button>
                                    <button onClick={this.next}>Next</button>
                                </div>
                            </div>
                        </Modal>
                        <div style={{position:'relative'}}>
                            <span style={{position:'absolute', top:'180px', left:'750px', fontSize:'100px'}} onClick={this.endNumbers}>{this.state.numbers[this.state.currentNumber]}</span>
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
                                    <button onClick={this.closeModal}>Retry</button>
                                    <button onClick={this.next}>Next</button>
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
                                    style={{position:'absolute', top:'157px', left:'685px', minWidth:'150px', minHeight:'99px'}}
                                /> :
                                <div style={{backgroundColor:'black', color:'white', position:'absolute', top:'157px', left:'689px', width:'156px', height:'105px'}}> Computer Restarted</div>
                            }
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
                                    <button onClick={this.closeModal}>Retry</button>
                                    <button onClick={this.next}>Next</button>
                                </div>
                            </div>
                        </Modal>
                        <div style={{position:'relative'}}>
                            <img src={group} alt="group" width="800" height="500"></img>
                            <span style={{position:'absolute', top:'240px', left:'766px', width:'60px', transform:'rotate(14deg)'}}>{this.state.progress}% complete</span>
                            <div style={{top:'282px', left:'756px', height:'8px', width:'70px', position:'absolute', background:'lightgrey', borderRadius:'25px', transform:'rotate(14deg)'}}>
                                <div style={{height:'8px', width:this.state.progress/100*70, background:'orange', borderRadius:'25px'}}></div>
                            </div>
                            {this.state.choosePercent ? null :
                                <div style={{position:'absolute', left:'610px', top:'290px'}}>
                                    <ClockLoader
                                        size={'40px'}
                                        color={'red'}
                                        loading={true}
                                    />
                                </div>
                            }
                            {this.state.choosePercent ?
                                <div>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'415px', left:'755px', width:'60px', borderRadius:'30%', background:'gold', border:'none'}} onClick={() => this.updateProgress(0)}>0%</button>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'365px', left:'880px', width:'60px', borderRadius:'30%', background:'gold', border:'none'}} onClick={() => this.updateProgress(25)}>25%</button>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'250px', left:'880px', width:'60px', borderRadius:'30%', background:'gold', border:'none'}} onClick={() => this.updateProgress(50)}>50%</button>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'290px', left:'980px', width:'60px', borderRadius:'30%', background:'gold', border:'none'}} onClick={() => this.updateProgress(75)}>75%</button>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'150px', left:'780px', width:'60px', borderRadius:'30%', background:'gold', border:'none'}} onClick={() => this.updateProgress(100)}>100%</button>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'350px', left:'615px', width:'60px', borderRadius:'30%', background:'gold', border:'none'}} onClick={() => this.remind()}>Remind</button>
                                </div> :
                                <div>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'415px', left:'755px', width:'60px', borderRadius:'30%', background:'khaki', border:'none'}}>0%</button>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'365px', left:'880px', width:'60px', borderRadius:'30%', background:'khaki', border:'none'}}>25%</button>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'250px', left:'880px', width:'60px', borderRadius:'30%', background:'khaki', border:'none'}}>50%</button>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'290px', left:'980px', width:'60px', borderRadius:'30%', background:'khaki', border:'none'}}>75%</button>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'150px', left:'780px', width:'60px', borderRadius:'30%', background:'khaki', border:'none'}}>100%</button>
                                    <button style={{position:'absolute', width:"50px", height:"50px", top:'350px', left:'615px', width:'60px', borderRadius:'30%', background:'gold', border:'none'}} onClick={() => this.remind()}>Remind</button>
                                </div>
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
                                    <button onClick={this.closeModal}>Retry</button>
                                    <button onClick={this.next}>Next</button>
                                </div>
                            </div>
                        </Modal>
                        <div style={{position:'relative'}}>
                            <img src={meeting} alt="meeting" width="800" height="500"></img>
                            {this.state.meeting1 ? <div><h3 style={{position:'absolute', top:'85px', left:'550px', width:'80px'}}>{this.state.meetingQuestions[this.state.currentMeeting]}</h3></div> : null}
                            {this.state.meeting2 ? <div><h3 style={{position:'absolute', top:'95px', left:'735px', width:'80px'}}>{this.state.meetingQuestions[this.state.currentMeeting]}</h3></div> : null}
                            {this.state.meeting3 ? <div><h3 style={{position:'absolute', top:'15px', left:'875px', width:'80px'}}>{this.state.meetingQuestions[this.state.currentMeeting]}</h3></div> : null}
                            {this.state.meeting1 ? null : <div style={{position:'absolute', width:'110px', height:'110px', backgroundColor:'white', top:'85px', left:'536px'}}> </div>}
                            {this.state.meeting2 ? null : <div style={{position:'absolute', width:'95px', height:'92px', backgroundColor:'white', top:'100px', left:'731px'}}> </div>}
                            {this.state.meeting3 ? null : <div style={{position:'absolute', width:'110px', height:'110px', backgroundColor:'white', top:'25px', left:'859px'}}> </div>}
                            {this.state.meeting4 ? <button style={{position:'absolute', top:'415px', left:'500px', height: '40px', width:'250px', borderRadius:'20px', backgroundColor:'thistle', border:'1.5px hidden purple'}} onClick={() => this.updateMeet()}>{this.state.meetingAnswers[this.state.currentMeeting][0]}</button> : null}
                            {this.state.meeting4 ? <button style={{position:'absolute', top:'365px', left:'790px', height: '40px', width:'250px', borderRadius:'20px', backgroundColor:'thistle', border:'1.5px hidden purple'}} onClick={() => this.updateMeet()}>{this.state.meetingAnswers[this.state.currentMeeting][1]}</button> : null}
                            {this.state.meeting4 ? <button style={{position:'absolute', top:'365px', left:'500px', height: '40px', width:'250px', borderRadius:'20px', backgroundColor:'thistle', border:'1.5px hidden purple'}} onClick={() => this.updateMeet()}>{this.state.meetingAnswers[this.state.currentMeeting][2]}</button> : null}
                            {this.state.meeting4 ? <button style={{position:'absolute', top:'415px', left:'790px', height: '40px', width:'250px', borderRadius:'20px', backgroundColor:'thistle', border:'1.5px hidden purple'}} onClick={() => this.updateMeet()}>{this.state.meetingAnswers[this.state.currentMeeting][3]}</button> : null}
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

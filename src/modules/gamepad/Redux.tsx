import React, {CSSProperties, useState} from 'react';
import Gamepad from 'react-gamepad'

export const Redux: React.FC<{}> = () => {
    const [A_pressed, setA_pressed] = useState(false);
    const [B_pressed, setB_pressed] = useState(false);
    const [X_pressed, setX_pressed] = useState(false);
    const [Y_pressed, setY_pressed] = useState(false);
    const [LB_pressed, setLB_pressed] = useState(false);
    const [RB_pressed, setRB_pressed] = useState(false);
    const [Back_pressed, setBack_pressed] = useState(false);
    const [Start_pressed, setStart_pressed] = useState(false);
    const [UP_pressed, setUP_pressed] = useState(false);
    const [DOWN_pressed, setDOWN_pressed] = useState(false);
    const [LEFT_pressed, setLEFT_pressed] = useState(false);
    const [RIGHT_pressed, setRIGHT_pressed] = useState(false);
    const [LEFT_STICK_X, set_LEFT_STICK_X] = useState<CSSProperties>({left: 0});
    const [LEFT_STICK_Y, set_LEFT_STICK_Y] = useState<CSSProperties>({top: 0});
    const [LEFT_STICK_PUSHED, set_LEFT_STICK_PUSHED] = useState<CSSProperties>({opacity: 0.7});
    const [RIGHT_STICK_X, set_RIGHT_STICK_X] = useState<CSSProperties>({left: 0});
    const [RIGHT_STICK_Y, set_RIGHT_STICK_Y] = useState<CSSProperties>({top: 0});
    const [RIGHT_STICK_PUSHED, set_RIGHT_STICK_PUSHED] = useState<CSSProperties>({opacity: 0.7});
    const [LEFT_TRIGGER, set_LEFT_TRIGGER] = useState<CSSProperties>({transform: `rotate(0deg)`});
    const [RIGHT_TRIGGER, set_RIGHT_TRIGGER] = useState<CSSProperties>({transform: `rotate(0deg)`});

    const connectHandler = (gamepadIndex) => {
        console.log(`Gamepad ${gamepadIndex} connected !`)
    }

    const disconnectHandler = (gamepadIndex) => {
        console.log(`Gamepad ${gamepadIndex} disconnected !`)
    }

    const buttonChangeHandler = (buttonName, down) => {
        switch (buttonName) {
            case 'A':
                setA_pressed(down);
                break;
            case 'B':
                setB_pressed(down);
                break;
            case 'X':
                setX_pressed(down);
                break;
            case 'Y':
                setY_pressed(down);
                break;
            case 'LB':
                setLB_pressed(down);
                break;
            case 'RB':
                setRB_pressed(down);
                break;
            case 'LS':
                set_LEFT_STICK_PUSHED({opacity: down ? 1 : 0.7});
                break;
            case 'RS':
                set_RIGHT_STICK_PUSHED({opacity: down ? 1 : 0.7});
                break;
            case 'Back':
                setBack_pressed(down);
                break;
            case 'Start':
                setStart_pressed(down);
                break;
            case 'DPadUp':
                setUP_pressed(down);
                break;
            case 'DPadDown':
                setDOWN_pressed(down);
                break;
            case 'DPadLeft':
                setLEFT_pressed(down);
                break;
            case 'DPadRight':
                setRIGHT_pressed(down);
                break;
            default:
                break;
        }
    }

    const axisChangeHandler = (axisName, value, previousValue) => {
        switch (axisName) {
            case 'LeftStickX':
                set_LEFT_STICK_X({left: 30*value})
                break;
            case 'LeftStickY':
                set_LEFT_STICK_Y({top: -30*value})
                break;
            case 'RightStickX':
                set_RIGHT_STICK_X({left: 30*value})
                break;
            case 'RightStickY':
                set_RIGHT_STICK_Y({top: -30*value})
                break;
            case 'LeftTrigger':
                set_LEFT_TRIGGER({transform: `rotate(${-30*value}deg)`})
                break;
            case 'RightTrigger':
                set_RIGHT_TRIGGER({transform: `rotate(${30*value}deg)`})
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className="gamepad__wrapper">
                <img src="/schema.png" className="main-schema" alt="" />
                <div className="pressed-buttons__wrapper">
                    <img src="/pressed_buttons/a_pressed_btn.png" className={`a-pressed-btn-${A_pressed}`} alt=""/>
                    <img src="/pressed_buttons/b_pressed_btn.png" className={`b-pressed-btn-${B_pressed}`} alt=""/>
                    <img src="/pressed_buttons/x_pressed_btn.png" className={`x-pressed-btn-${X_pressed}`} alt=""/>
                    <img src="/pressed_buttons/y_pressed_btn.png" className={`y-pressed-btn-${Y_pressed}`} alt=""/>
                    <img src="/pressed_buttons/lb_pressed_btn.png" className={`left-tr-pressed-btn-${LB_pressed}`} alt=""/>
                    <img src="/pressed_buttons/rb_pressed_btn.png" className={`right-tr-pressed-btn-${RB_pressed}`} alt=""/>
                    <img src="/pressed_buttons/back_pressed_btn.png" className={`back-pressed-btn-${Back_pressed}`} alt=""/>
                    <img src="/pressed_buttons/start_pressed_btn.png" className={`start-pressed-btn-${Start_pressed}`} alt=""/>
                    <img src="/pressed_buttons/UP_pressed_btn.png" className={`up-pressed-btn-${UP_pressed}`} alt=""/>
                    <img src="/pressed_buttons/DOWN_pressed_btn.png" className={`down-pressed-btn-${DOWN_pressed}`} alt=""/>
                    <img src="/pressed_buttons/LEFT_pressed_btn.png" className={`left-pressed-btn-${LEFT_pressed}`} alt=""/>
                    <img src="/pressed_buttons/RIGHT_pressed_btn.png" className={`right-pressed-btn-${RIGHT_pressed}`} alt=""/>
                    <div className="left-stick-wrapper">
                        <img src="/pressed_buttons/stick.png" className="left-stick" style={{...LEFT_STICK_X ,...LEFT_STICK_Y, ...LEFT_STICK_PUSHED}} alt=""/>
                    </div>
                    <div className="right-stick-wrapper">
                        <img src="/pressed_buttons/stick.png" className="right-stick" style={{...RIGHT_STICK_X ,...RIGHT_STICK_Y, ...RIGHT_STICK_PUSHED}} alt=""/>
                    </div>
                    <img src="/pressed_buttons/trigger_left.png" className="left-trigger" style={LEFT_TRIGGER} alt=""/>
                    <img src="/pressed_buttons/trigger_right.png" className="right-trigger" style={RIGHT_TRIGGER} alt=""/>
                </div>
            </div>
            <Gamepad
                onConnect={connectHandler}
                onDisconnect={disconnectHandler}
                onButtonChange={buttonChangeHandler}
                onAxisChange={axisChangeHandler}
            >
                <span className="hidden">main</span>
            </Gamepad>
        </>
    );
};

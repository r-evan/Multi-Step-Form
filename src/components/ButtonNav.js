import React from 'react';

export default function ButtonNav(props) {
    const { position, setPosition, phone, handleVerifForm} = props;

    function getContent(){
        let buttonBack = "";
        let buttonNext = ""

        if(position === 5 ) return "" 

        if(position > 1){
            buttonBack = <span onClick={() => setPosition(position - 1)}>Go Back</span>
        } else { 
            buttonBack = <span></span>
        }
        if (position === 1) {
            buttonNext = <button className="next" onClick={handleVerifForm} >Next Step</button>
        } else {
            if(position === 4){
                buttonNext = <button className="confirm" onClick={() => setPosition(5)}>Confirm</button>
            } else {
                buttonNext = <button className="next" onClick={() => setPosition(position + 1)}>Next Step</button> 
            }
        }
       
        return <div className={phone ? "bottom-phone" : "bottom-button"}>{buttonBack} {buttonNext}</div>
    }
    return (getContent());
};


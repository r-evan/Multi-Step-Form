import { useEffect, useState } from "react";
import ButtonNav from "./ButtonNav";

function Part4(props) {

    const { Data, setPosition, position } = props;
    const [initialPrice, setInitialPrice] = useState();
    const [optionPrice, setOptionPrice] = useState();

    useEffect(() => {
        let priceOption = 0 ;
        if (Data.Online) Data.duree ? priceOption += 10 : priceOption += 1
        if (Data.Storage) Data.duree ? priceOption += 20 : priceOption += 2
        if (Data.Custom) Data.duree ? priceOption += 20 : priceOption += 2
        setOptionPrice(priceOption)

        switch (Data.plan) {
            case "Arcade": return Data.duree ? setInitialPrice(90) : setInitialPrice(9)
            case "Advanced": return Data.duree ? setInitialPrice(120) : setInitialPrice(12)
            case "Pro": return Data.duree ? setInitialPrice(150) : setInitialPrice(15)
            default: return setInitialPrice(9)
        }
    }, [Data])


    return (
        <div className="form part4">
            <h1>Finishing up</h1>
            <p className="subtitle">Double-check everything looks OK before confirming.</p>

            <div className="detail">
                <div className="row finalPrice">
                    <div className="left">
                        <span>{Data.plan} ({Data.duree ? "Yearly" : "Monthly"})</span>
                        <p className="link" onClick={() => setPosition(2)}>Change</p>
                    </div>
                    <span className="">${initialPrice}/{Data.duree ? "yr" : "mo"}</span>
                </div>
                {Data.Online ?
                    <div className='row'>
                        <p>Online service</p>
                        <span className="detail-price">{Data.duree ? "+$10/yr" : "+$1/mo"}</span>
                    </div> : ""}
                {Data.Storage ?
                    <div className='row'>
                        <p>Larger storage</p>
                        <span className="detail-price">{Data.duree ? "+$20/yr" : "+$2/mo"}</span>
                    </div> : ""}
                {Data.Custom ?
                    <div className='row'>
                        <p>Customizable profile</p>
                        <span className="detail-price">{Data.duree ? "+$20/yr" : "+$2/mo"}</span>
                    </div> : ""}
            </div>
            <div className="total">
                <p>Total (per {Data.duree ? "year" : "month"})</p>
                <span>+${initialPrice + optionPrice}/{Data.duree ? "yr" : "mo"} </span>
            </div>
            <ButtonNav setPosition={setPosition} position={position} />

        </div>
    );
}

export default Part4;
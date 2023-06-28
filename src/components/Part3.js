import { useRef } from "react";

function Part3(props) {

    const {Data, setPosition, handleChangeOption} = props;

    const Online = useRef(null);


    return (
        <div className="form part3">
            <h1>Pick add-ons</h1>
            <p className="subtitle">Add-ons help enhance your gaming experience.</p>

            <div className="options">

                <div className={Data.Online ? "option option-selected" : "option"}>
                    <div className="mix">
                        <input type="checkbox" name="Online" id="Online" checked={Data.Online} onChange={handleChangeOption} ref={Online}/>
                        <div className="desc">
                            <h5>Online service</h5>
                            <p>Access to multiplayer games</p>
                        </div>
                    </div>
                    <p className="price">{Data.duree ? "+$10/yr" : "+$1/mo"}</p>
                </div>
                <div className={Data.Storage ? "option option-selected" : "option"}>
                <div className="mix">
                    <input type="checkbox" name="Storage" id="Storage" checked={Data.Storage} onChange={handleChangeOption} />
                    <div className="desc">
                        <h5>Larger storage</h5>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                </div>
                    <p className="price">{Data.duree ? "+$20/yr" : "+$2/mo"}</p>
                </div>
                <div className={Data.Custom ? "option option-selected" : "option"}>
                    <div className="mix">
                        <input type="checkbox" name="Custom" id="Custom" checked={Data.Custom} onChange={handleChangeOption} />
                        <div className="desc">
                            <h5>Customizable Profile</h5>
                            <p>Custom theme on your profile</p>
                        </div>
                    </div>
                    <p className="price">{Data.duree ? "+$20/yr" : "+$2/mo"}</p>
                </div>
            </div>

            <div className="bottom-button">
                <span onClick={() => setPosition(2)}>Go Back</span>
                <button className="next" onClick={() => setPosition(4)}>Next Step</button>
            </div>

        </div>
    );
}

export default Part3;
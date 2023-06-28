import ButtonNav from "./ButtonNav";

export default function Part1(props)  {
    
    const {Data, handleChangePersonnal, setPosition, position, handleVerifForm, Error} = props;

    return (
        <div className="form part1">
            <h1>Personal info</h1>
            <p className="subtitle">Please provide your name, email address, and phone number.</p>

            <div className="field-container">
                <label >Name</label><br />
                {Error.name ? <span>This field is required</span> : "" }
            </div>
            <input type="text" className={Error.name ? "error" : "" } name="name" id="namee" placeholder="e.g. Stephen King" onChange={handleChangePersonnal} value={Data.name} />
            <div className="field-container">
                <label> Email Address</label><br />
                {Error.mail ? <span>This field is required</span> : "" }
            </div>
            <input type="text" className={Error.mail ? "error" : "" } name="mail" id="mail" placeholder="e.g. stephenking@lorem.com" onChange={handleChangePersonnal} value={Data.mail}/>
            <div className="field-container">
                <label >Phone Number</label><br />
                {Error.phone ? <span>This field is required</span> : "" }
            </div>
            <input type="text" className={Error.phone ? "error" : "" } name="phone" id="phone" placeholder="e.g. +1 234 567 890" onChange={handleChangePersonnal} value={Data.phone}/>
            
            <ButtonNav setPosition={setPosition} position={position} handleVerifForm={handleVerifForm} />

        </div>

       
    );
}

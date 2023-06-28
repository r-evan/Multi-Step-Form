function Part2(props) {

    const { Data, setPosition, handleChangeOption, handlePlan } = props;


    return (
        <div className="form part2">
            <h1>Select your plan</h1>
            <p className="subtitle">You have the option of monthly or yearly billing.</p>
            <div className="plans">
                <div className={Data.plan === 'Arcade' ? 'plan-selected plan' : 'plan'} onClick={() => handlePlan("Arcade")}>
                    <div className="logo arcade"></div>
                    <div className="logo-info">
                        <h5>Arcade</h5>
                        <p>{!Data.duree ? "$9/mo" : "$90/yr"}</p>
                        {Data.duree ? <span>2 months free</span> : ""}

                    </div>
                </div>
                <div className={Data.plan === 'Advanced' ? 'plan-selected plan' : 'plan'} onClick={() => handlePlan("Advanced")}>
                    <div className="logo advanced"></div>
                    <div className="logo-info">
                        <h5>Advanced</h5>
                        <p>{!Data.duree ? "$12/mo" : "$120/yr"}</p>
                        {Data.duree ? <span>2 months free</span> : ""}
                    </div>
                </div>
                <div className={Data.plan === 'Pro' ? 'plan-selected plan' : 'plan'} onClick={() => handlePlan("Pro")}>
                    <div className="logo pro"></div>
                    <div className="logo-info">
                        <h5>Pro</h5>
                        <p>{!Data.duree ? "$15/mo" : "$150/yr"}</p>
                        {Data.duree ? <span>2 months free</span> : ""}

                    </div>
                </div>
            </div>
            <div className="duree">
                <span className={!Data.duree ? "selected" : ""}>Monthly</span>
                <input type="checkbox" className="demo5" name="duree" id="demo5" checked={Data.duree} onChange={handleChangeOption} />
                <label htmlFor="demo5" />
                <span className={!Data.duree ? "" : "selected"}>Yearly</span>
            </div>

            <div className="bottom-button">
                <span onClick={() => setPosition(1)}>Go Back</span>
                <button className="next" onClick={() => setPosition(3)}>Next Step</button>
            </div>

        </div>
    );
}

export default Part2;
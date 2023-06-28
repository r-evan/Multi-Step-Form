export default function Sidebar(props) {

    const { position } = props;

    return (
        <div className="sidebar">
            <div className="step">
                <h5 className={position === 1 ? "number number-selected" : "number"}><span className="centered-number">1</span></h5>
                <div className="step-info">
                    <p>STEP 1</p>
                    <h5>YOUR INFO</h5>
                </div>
            </div>
            <div className="step">
                <h5 className={position === 2 ? "number number-selected" : "number"}><span className="centered-number">2</span></h5>
                <div className="step-info">
                    <p>STEP 2</p>
                    <h5>SELECT PLAN</h5>
                </div>
            </div>
            <div className="step">
                <h5 className={position === 3 ? "number number-selected" : "number"}><span className="centered-number">3</span></h5>
                <div className="step-info">
                    <p>STEP 3</p>
                    <h5>ADD-ONS</h5>
                </div>
            </div>
            <div className="step">
                <h5 className={position === 4 || position ===  5 ? "number number-selected" : "number"}><span className="centered-number">4</span></h5>
                <div className="step-info">
                    <p>STEP 4</p>
                    <h5>SUMMARY</h5>
                </div>
            </div>
        </div>
    )
}
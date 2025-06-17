import "./FourDs.css";

function FourDs() {
    return (
        <div className="four-ds-container">
            {/* Spinning circular text around name */}
            <div className="circle-wrapper">
                <svg viewBox="0 0 300 300" className="orbit-text">
                    <defs>
                        <path
                            id="circlePath"
                            d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
                        />
                    </defs>
                    <text
                        fill="#e4eef0"
                        fontSize="25"
                        fontFamily="Georgia"
                        letterSpacing="3"
                    >
                        <textPath href="#circlePath" startOffset="0%">
                            Desire • Decision • Dedication • Discipline •
                        </textPath>
                    </text>
                </svg>
                <h1 className="kennygray-name">KennyGray</h1>
            </div>
        </div>
    );
}

export default FourDs;

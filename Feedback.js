import { useState, useRef } from "react";

function Feedback() {
    const rName = useRef();
    const rExcellent = useRef();
    const [name, setName] = useState("");
    const [feedback, setFeedback] = useState("");
    const [msg, setMsg] = useState("");

    const hName = (event) => { setName(event.target.value); }
    const hFeedback = (event) => { setFeedback(event.target.value); }

    const show = (event) => {
        event.preventDefault();
        if (name === "") {
            alert("Please enter name");
            setMsg("");
            rName.current.focus();
            return;
        }
        if (feedback === "") {
            alert("Please enter feedback");
            setMsg("");
            rExcellent.current.focus();
            return;
        }

        let a = "name = " + name + "feedback =" + feedback;
        setMsg(a);
    }

    return (
        <>
            <center>
                <hl> Feedback Please </hl>
                <form onSubmit={show}>
                    <input type="text" placeholder="enter your name" ref={rName} onChange={hName} />
                    <br /> <br />
                    <input type="radio" name="f" value="excellent" onChange={hFeedback} ref={rExcellent} />Excellent
                    <input type="radio" name="f" vaIue="superb" onChange={hFeedback} />Superb
                    <input type="radio" name="f" value="good" onChange={hFeedback} />Good
                    <br /><br />
                    <input type="submit" />
                </form>
                <h2> {msg} </h2>
            </center>
        </>
    );
}

export default Feedback;

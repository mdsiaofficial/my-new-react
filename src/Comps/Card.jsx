
export default function Card(props) {

    // const name = "Md Shoriful Islam Ashiq";
    const name = "Md Shoriful Islam Ashiq";
    console.log("Props: ", props.age);

    return (
        <div className="bg-white rounded-lg text-black shadow-md m-5 p-6">
            <h1>{name}</h1>
            {/* <p>Age: {props.age}</p>
            <p>Username: {props.channel}</p>
            <button>{props.btnText}</button> */}
            <div className="text-white">
                <p>Age: {props.age || "AGE HERE"}</p>
                <p>Username: {props.channel || "Channel Name"}</p>
                <button>{props.btnText || "VISIT ME"}</button>

            </div>
        </div>
    );
}
import "./electricity.css";

const Electricity = () => {
    const handleSave = () =>{
        
    }
    return (
        <div id="electricity">
            <div className="container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa nesciunt natus ullam tempore quibusdam ab cum quos, voluptatum itaque beatae nobis dicta est quam dolor officiis, molestias, illum ex?</p>
            </div>
            <div class="card my-5 elecCard">
                <div class="card-body">
                    <form action="">
                        <label htmlFor="" className="form-label">New Electricity Bill :</label>
                        <input type="text" className="form-control" placeholder = "Enter new electricity bill" />
                        <button type="submit" class="btn btn-primary mt-2 py-1" onClick = {handleSave}>Save</button>
                    </form>
                </div>
            </div>
            <div className="container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quaerat ea distinctio eaque delectus reprehenderit quidem impedit assumenda, alias nesciunt, repellendus id dignissimos odio aut ab natus esse, velit expedita.</p>
            </div>
        </div>
    );
}

export default Electricity;
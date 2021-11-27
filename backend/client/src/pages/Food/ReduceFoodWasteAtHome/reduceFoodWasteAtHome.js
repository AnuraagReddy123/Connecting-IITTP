import React from "react";
import "./reduceFoodWasteAtHome.css";

function ReduceFoodWasteAtHome() {
  return (
    <div>
      <nav className="navbar navbar-light foodWasteNavbar">
        <div className="container-fluid">
          <span className="subCategoryName">Reduce Food Waste At Home</span>
        </div>
      </nav>

      <div className="container-fluid foodWasteContainer">
        <div className="row">
          <div className="col-md-7">
            <div className="card shadow rounded foodWasteTips">
              <div className="card-body">
                <h4 style={{color: "green", fontFamily: "monospace"}}>Tips</h4>
                <hr></hr>
                <ul>
                    <li><p className="foodWasteContent">How often do you go to the grocery store without checking what you already have in your fridge first? <p>{"\n"}</p>Sit down and take five minutes to make a quick meal plan.<p>{"\n"}</p>This isn’t your normal type of meal planning – it’s Cool Meal Planning!<p>{"\n"}</p>This isn’t a meal plan where you write down everything you’ll eat Monday-Friday, it’s more of a road map to ensure you don’t waste food.<p>{"\n"}</p>I’m just asking you to open up your fridge and your freezer and look at your pantry before you go grocery shopping.<p>{"\n"}</p>If you open up the fridge and say “hey, I’ve got a tomato, a couple carrots and some broccoli that needs to be eaten”, then you can think of a meal or two for the beginning of the week where you can use those up.<p>{"\n"}</p>You also know now that you don’t need to buy tomato, carrots or broccoli which prevents you from buying duplicate items.<p>{"\n"}</p><p>{"\n"}</p><p>{"\n"}</p> </p></li>
                    <li><p className="foodWasteContent" style={{color: "darkgoldenrod"}}>If there’s something on your plate you can’t finish, don’t be shy to ask a family member if they want it instead.<p>{"\n"}</p>If not, save it for later instead of throwing it away.<p>{"\n"}</p>The same goes for eating out: If there’s food you can’t finish on your plate, be sure to take it home!<p>{"\n"}</p>I like to bring a reusable container with me when I know I’ll be dining out, just in case I have leftovers.</p></li>
                    <li><p className="foodWasteContent">Another great way to reduce food waste is to cook with your scraps.<p>{"\n"}</p>There are so many parts of a vegetable that often get thrown out but are perfectly edible, like carrot tops and broccoli stems. Carrot tops can become pesto and broccoli stems can become slaw.<p>{"\n"}</p>Here are a few other ways to cook with scraps:<p>{"\n"}</p> Make zero waste vegetable broth from food scraps.<p>{"\n"}</p>Use herb stems in soups, stews and salads instead of discarding them.<p>{"\n"}</p>Add celery leaves to your next soup for extra flavor.<p>{"\n"}</p>Save pumpkin seeds and roast them later.<p>{"\n"}</p>Cook beet tops into a delicious veggie stir fry.<p>{"\n"}</p>Make salad from herb stems, carrot tops, radish tops and beet tops.</p></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card shadow rounded foodWasteImpacts">
              <div className="card-body">
                <h4 style={{color: "red", fontFamily: "monospace"}}>Impacts</h4>
                <hr></hr>
                <ul>
                    <li><p className="foodWasteContent">Most people don't realize how much food they throw away every day — from uneaten leftovers to spoiled produce.</p></li>
                    <li><p className="foodWasteContent">EPA estimates that in 2018, about 68 percent of the wasted food we generated—or about 42.8 million tons-- ended up in landfills or combustion facilities.</p></li>
                    <li><p className="foodWasteContent">By managing food sustainably and reducing waste, we can help businesses and consumers save money, provide a bridge in our communities for those who do not have enough to eat, and conserve resources for future generations.</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReduceFoodWasteAtHome;

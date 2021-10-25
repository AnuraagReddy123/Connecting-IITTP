import React from "react";
import "./secondHandShopping.css";

function SecondHandShopping() {
  return (
    <div>
      <nav className="navbar navbar-light shShoppingNavbar">
        <div className="container-fluid">
          <span className="subCategoryName">Second-Hand Shopping</span>
        </div>
      </nav>

      <div className="container-fluid shShoppingContainer">
        <div className="row">
          <div className="col-md-7">
            <div className="card shadow rounded shShoppingTips">
              <div className="card-body">
                <h4 style={{color: "green"}}>Tips</h4>
                <hr></hr>
                <ul>
                    <li><p className="shShoppingContent">By purchasing second hand, you aren’t supporting this waste of time, energy and resources. In fact, you’re keeping items out of the landfill.</p></li>
                    <li><p className="shShoppingContent">Go visit your local thrift store and see how many items, still in great condition, are being sold.</p></li>
                    <li><p className="shShoppingContent">You also don’t have to actually purchase items in order to support second hand values – you can also get items second hand from loved ones. Always ask around before buying an item to see if someone has a spare first.</p></li>
                    <li><p className="shShoppingContent">Over the next 4 days, your challenge is to shop second hand.</p></li>
                    <li><p className="shShoppingContent">New items take a lot of time, resources, and energy to make.</p></li>
                    <li><p className="shShoppingContent">Instead, choose to buy items that are already out there. This means one less new item will be produced and ensures a perfectly good item stays out of the landfill.</p></li>
                    <li><p className="shShoppingContent">You can find so many things from clothes to housewares on the second hand market: the possibilities are endless.</p></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card shadow rounded shShoppingImpacts">
              <div className="card-body">
                <h4 style={{color: "red"}}>Impacts</h4>
                <hr></hr>
                <ul>
                    <li><p className="shShoppingContent">Every item purchased second hand means one less new one produced. Every item, even something small like a t-shirt takes a lot of time, energy and resources.</p></li>
                    <li><p className="shShoppingContent">Clothing, particularly, fast fashion has some questionable ethics, and can be wasteful and harmful to the environment.</p></li>
                    <li><p className="shShoppingContent">Producing synthetic fibers like polyester requires energy and crude oil like petroleum. Yep – polyester is plastic!</p></li>
                    <li><p className="shShoppingContent">Conventionally grown cotton makes up just 2.5 percent of total cropland, but uses 16 percent of the world’s pesticides.</p></li>
                    <li><p className="shShoppingContent">According to the Ellen Mac Arthur Foundation “Every second, the equivalent of one garbage truck of textiles is landfilled or burned".</p></li>
                    <li><p className="shShoppingContent">An estimated Rs 37500 billion value is lost every year due to clothing that’s barely worn and rarely recycled.</p></li>
                    <li><p className="shShoppingContent">This applies to far more than just t-shirts, but also furniture, jewelry, toys, they all take energy and resources to create.</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHandShopping;

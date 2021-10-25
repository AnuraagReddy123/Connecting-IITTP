import React from "react";
import "./composting.css";

function Composting() {
  return (
    <div>
      <nav className="navbar navbar-light compostingNavbar">
        <div className="container-fluid">
          <span className="subCategoryName">Composting</span>
        </div>
      </nav>

      <div className="container-fluid compostingContainer">
        <div className="row">
          <div className="col-md-7">
            <div className="card shadow rounded compostingTips">
              <div className="card-body">
                <h4 style={{color: "green", fontFamily: "monospace"}}>Tips</h4>
                <hr></hr>
                <ul>
                    <li><p className="compostingContent">Compost is organic material that can be added to soil to help plants grow. Food scraps and yard waste together currently make up more than 30 percent of what we throw away, and could be composted instead. Making compost keeps these materials out of landfills where they take up space and release methane, a potent greenhouse gas.</p></li>
                    <li><p className="compostingContent" style={{color: "darkgoldenrod"}}>Use as mulch : Compost-as-mulch is a fantastic way to boost your garden’s harvest. Naturally absorbent and dense, compost applied to the soil surface will prevent evaporation when laid over drip irrigation or after watering. It will also prevent weeds from sprouting. Apply in a 3 to 6 inch layer and rake until even.</p></li>
                    <li><p className="compostingContent">Mix DIY potting soil : <p>{"\n"}</p>Finished compost makes an excellent addition to homemade potting soil. Remove large debris by passing compost through a half- to 1-inch soil screen. Mix in the following proportions:<p>{"\n"}</p>1 part compost<br></br>1 part vermiculite<br></br>1 part topsoil<p>{"\n"}</p>Use in container gardens and when potting up starter plants.</p></li>
                    <li><p className="compostingContent" style={{color: "darkgoldenrod"}}>Top dress garden beds : Twice each year we give our raised beds a hearty dose of finished compost. We sprinkle it along the soil surface, and soon seasonal rains wash the nutrients down to root level. Worms do the rest of the work, pulling the organic matter into the soil.</p></li>                
                    <li><p className="compostingContent">Feed container plants : When you freshen up the soil around your outdoor potted plants or transfer to bigger pots, add screened compost to boost growth. Mix with potting soil and/or peat moss for better absorption.</p></li>                
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card shadow rounded compostingImpacts">
              <div className="card-body">
                <h4 style={{color: "blue", fontFamily: "monospace"}}>Benefits</h4>
                <hr></hr>
                <ul>
                <li><p className="compostingContent">Organic waste in landfills generates, methane, a potent greenhouse gas. By composting wasted food and other organics, methane emissions are significantly reduced.</p></li>
                <li><p className="compostingContent">Compost reduces and in some cases eliminates the need for chemical fertilizers.</p></li>
                <li><p className="compostingContent">Compost promotes higher yields of agricultural crops.</p></li>
                <li><p className="compostingContent">Compost can help aid reforestation, wetlands restoration, and habitat revitalization efforts by improving contaminated, compacted, and marginal soils.</p></li>
                <li><p className="compostingContent">Compost can be used to remediate soils contaminated by hazardous waste in a cost effective manner.</p></li>
                <li><p className="compostingContent">Compost can provide cost savings over conventional soil, water and air pollution remediation technologies, where applicable.</p></li>
                <li><p className="compostingContent">Compost enhances water retention in soils.</p></li>
                <li><p className="compostingContent">Compost provides carbon sequestration.</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Composting;

import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";
import History from "../History/History";
import Contact from "../Contact/Contact";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="subnav">
          <Link to="/about" className="subnav_links">
            <h3>About</h3>
          </Link>
          <Link to="/about/history" className="subnav_links">
            <h3>History</h3>
          </Link>
          <Link to="/about/contact" className="subnav_links">
            <h3>Contact</h3>
          </Link>
        </div>

        <div className="box">
          <Switch>
            <Route path="/about/history" component={History} />
            <Route path="/about/contact" component={Contact} />
            <Route
              path="/about"
              render={() => {
                return (
                  <div>
                    <h1 className="title">About WestSide University:</h1>
                    <p>
                      Chicken meatloaf filet mignon jowl shank cow, pork
                      burgdoggen. Tail bresaola ball tip, turkey pancetta corned
                      beef beef ribs swine sausage boudin shank. Pig salami ham,
                      sausage prosciutto spare ribs t-bone andouille alcatra.
                      Meatloaf short ribs ham hock pork frankfurter. Short ribs
                      porchetta hamburger pig chuck tongue rump. Drumstick
                      tenderloin landjaeger sirloin. Beef ribs leberkas meatball
                      jowl fatback, kevin ground round tenderloin pancetta spare
                      ribs flank alcatra. Ribeye cupim andouille short ribs
                      filet mignon jerky kevin. Jerky pork chislic short loin
                      jowl frankfurter. Bresaola pancetta frankfurter burgdoggen
                      tenderloin meatball. Buffalo pork loin salami cupim
                      pancetta. Bresaola turkey drumstick pork. Chislic
                      tenderloin pork belly shankle flank boudin fatback shank
                      ground round. Shankle burgdoggen pancetta frankfurter
                      drumstick strip steak. Brisket pastrami meatball, buffalo
                      corned beef jerky bacon prosciutto turkey capicola tongue
                      jowl bresaola strip steak.
                    </p>
                  </div>
                );
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

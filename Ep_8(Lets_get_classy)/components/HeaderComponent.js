import { LogoComponent } from "./LogoComponent";
import { NavItemsComponent } from "./NavItemsComponent";


HeaderComponent = () => (
    <div className="header">
      <LogoComponent />
      <NavItemsComponent />
    </div>
  );

const Element = {
    "abc" : "abc"
  }

const obj1 = {
    he:"he"
}

// console.log(obj1.he)

export {HeaderComponent as default ,Element as element ,obj1}
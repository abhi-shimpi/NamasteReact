import { LogoComponent } from "./LogoComponent";
import { NavItemsComponent } from "./NavItemsComponent";


HeaderComponent = () => (
    <div className="w-[100%]  bg-[#7aeff3] flex justify-between gap-4 p-4 items-center ">
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
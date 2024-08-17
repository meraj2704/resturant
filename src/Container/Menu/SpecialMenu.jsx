import "./SpecialMenu.css";
import SubHeading from "../../Components/SubHeading/SubHeading";
import data from "../../constants/data";
import MenuItem from "../../Components/Menuitem/MenuItem";
const menu = '/images/menu.png';
const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte"></SubHeading>
      <h1 className="headtext__cormorant">Today’s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Bear</p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem  key={index} title={wine.title} price={wine.price} tags={wine.tags}></MenuItem>
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={menu} alt="" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem  key={index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}></MenuItem>
          ))}
        </div>
      </div>
    </div>

    <div style={{marginTop:'15px'}}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;

import "../App.css";
import { useState } from "react";
const name = "Amol Barkale";
const city = "Jalgaon";
const business_idea = "Electrcity from highway traffic";

export const Form = () => {
  const [formData, setFormData] = useState({});
  const [usp, setmultipleUsp] = useState([]);
  const [reason_for_location, setlocationReasons] = useState([]);
  const [marketing_avenues, setmarketAvenues] = useState([]);
  const [scaleup_potential, setscalePotential] = useState([]);

  const hide = { display: "none" };
  const show = { display: "block" };

  const handleChange = ({ target }) => {
    const { type, value, name, checked } = target;
    if (type === "checkbox") {
      if (checked) {
        if (
          name === "frequency of customer visits" ||
          name === "robust value-chain of the business" ||
          name === "wide range of products/services" ||
          name === "abundant supply of raw materials (backward linkage)" ||
          name === "high demand in the target market (forward linkage)" ||
          name === "quality and affordable products/service" ||
          name === "superior customer support" ||
          name === "high growth potential" ||
          name === "high profit margin" ||
          name === "the entrepreneur's experience in this field" ||
          name === "innovative product/service"
        ) {
          setmultipleUsp([...usp, name]);
          console.log("usp:", usp);
        } else if (
          name === "Other such factors" ||
          name === "No rental overheads" ||
          name === "Affordability (rent)" ||
          name === "Nearness to suppliers" ||
          name === "Nearness to market" ||
          name === "Good footfall" ||
          name === "Nearness to source of raw materials" ||
          name === "Nearness to targeted customer demographics" ||
          name === "Lesser competition around" ||
          name === "Access to permit/license of operate"
        ) {
          setlocationReasons([...reason_for_location, name]);
          console.log("reason_for_location:", reason_for_location);
        } else if (
          name === "Digital Marketing" ||
          name === "Word of mouth" ||
          name === "Cross-promotion" ||
          name === "Distribution of marketing material (pamphlets/flyers)" ||
          name === "storefront/business branding" ||
          name === "Seasonal discounts and offers"
        ) {
          setmarketAvenues([...marketing_avenues, name]);
          console.log("marketing_avenues:", marketing_avenues);
        } else if (
          name === "other allied revenue streams" ||
          name === "building value-chain integrations" ||
          name === "growing the scale of operation" ||
          name === "opening more outlets" ||
          name === "increasing the variety of product/service offering" ||
          name === "expanding the current offering to other geographies"
        ) {
          setscalePotential([...scaleup_potential, name]);
        }
      }
      return;
    }
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <h1>User Application</h1>
      <div className="form_cont">
        <div className="form_input">
          <form>
            <section id="introduction">
              <label className="label">
                Stage of business:
                <select name="business_stage" onChange={handleChange}>
                  <option>Choose an option</option>
                  <option value="Start-up">Start-up</option>
                  <option value="Scale-up">Scale-up</option>
                </select>
                <br />
              </label>
              <br />
              <label className="label">
                Age of establishment (years) (Enter 0 if it is yet to start-up)
                :
                <br />
                <input
                  min="0"
                  max="100"
                  className="input"
                  onChange={handleChange}
                  type="range"
                  name="age_of_establishment"
                />
                <br />
              </label>
              <br />
              <label className="label">
                Primary Products/Services offfered: <br />
                <input
                  className="input"
                  onChange={handleChange}
                  type="text"
                  name="primary_product_service_offered"
                />
                <br />
              </label>
              <br />
              <label className="label">
                Offered to:
                <select name="offered_to" onChange={handleChange}>
                  <option>Choose an option</option>
                  <option value="End customers">End customers</option>
                  <option value="Wholesalers">Wholesalers</option>
                  <option value="Distributors">Distributors</option>
                  <option value="Retailers">Retailers</option>
                </select>
                <br />
              </label>
              <br />
              <label className="label">
                Secondary Products/Services offfered : <br />
                <input
                  className="input"
                  onChange={handleChange}
                  type="text"
                  name="secondary_product_service_offered"
                />
                <br />
              </label>
              <br />
              <label className="label">
                Processed products (Products you produce from the raw materials)
                :
                <br />
                <input
                  className="input"
                  onChange={handleChange}
                  type="text"
                  name="processed_products"
                />
                <br />
              </label>
              <br />
              <label className="label">
                Years of relevant experience in this field: <br />
                <input
                  className="input"
                  onChange={handleChange}
                  type="number"
                  name="relevant_experience"
                />
                <br />
              </label>
              <br />
              <label className="label">
                Skill training:
                <select name="skill_training" onChange={handleChange}>
                  <option>Choose an option</option>
                  <option value="No formal skill training">
                    No formal skill training
                  </option>
                  <option value="Has formal skill training and certificate">
                    Has formal skill training and certificate
                  </option>
                </select>
                <br />
              </label>
              <br />
              <label name="usp" className="label">
                Unique Selling Proposition: <br />
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="the entrepreneur's experience in this field"
                  />
                  the entrepreneur's experience in this field
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="innovative product/service"
                  />
                  innovative product/service
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="high profit margin"
                  />
                  high profit margin
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="high growth potential"
                  />
                  high growth potential
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="superior customer support"
                  />
                  superior customer support
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="quality and affordable products/service"
                  />
                  quality and affordable products/service
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="high demand in the target market (forward linkage)"
                  />
                  high demand in the target market (forward linkage)
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="abundant supply of raw materials (backward linkage)"
                  />
                  abundant supply of raw materials (backward linkage)
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="wide range of products/services"
                  />
                  wide range of products/services
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="robust value-chain of the business"
                  />
                  robust value-chain of the business
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="frequency of customer visits"
                  />
                  frequency of customer visits
                </label>
                <br />
              </label>
            </section>
            <br />
            <section id="location">
              <label>
                Establishment type:
                <select name="establishment_type" onChange={handleChange}>
                  <option>Choose an option</option>
                  <option value="Factory">Factory</option>
                  <option value="Mill">Mill</option>
                  <option value="Stall">Stall</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Boutique">Boutique</option>
                  <option value="Vehicle">Vehicle</option>
                  <option value="Centre">Centre</option>
                  <option value="Store">Store</option>
                  <option value="Farm">Farm</option>
                  <option value="Plant">Plant</option>
                  <option value="Processing Unit">Processing Unit</option>
                  <option value="Shop">Shop</option>
                  <option value="Vending cart">Vending cart</option>
                  <option value="Manufacturing unit">Manufacturing unit</option>
                </select>
                <br />
              </label>
              <br />
              <label className="label">
                Name of the area: <br />
                <input
                  className="input"
                  onChange={handleChange}
                  type="text"
                  name="business_area"
                />
                <br />
              </label>
              <br />
              <label className="label">
                Locality of business:
                <select name="business_locality" onChange={handleChange}>
                  <option>Choose an option</option>
                  <option value="Urban">Urban</option>
                  <option value="Rural">Rural</option>
                  <option value="Semi-urban">Semi-urban</option>
                  <option value="Slum">Slum</option>
                </select>
                <br />
              </label>
              <br />
              <label className="label">
                Ownership of infrastructure:
                <select name="infra_ownership" onChange={handleChange}>
                  <option>Choose an option</option>
                  <option value="Rented">Rented</option>
                  <option value="Leased">Leased</option>
                  <option value="Self-owned">Self-owned</option>
                </select>
                <br />
              </label>
              <br />
              <label className="label">
                Establishment area (in square feet) (Enter 0 if the
                establishment area is irrelevant): <br />
                <input
                  className="input"
                  onChange={handleChange}
                  type="number"
                  name="establishment_area"
                />
                <br />
              </label>
              <label className="label" name="reason_for_location">
                <br />
                Reason for selecting this location: <br />
                <label>
                  <br />
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="Nearness to market"
                  />
                  Nearness to market
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="Good footfall"
                  />
                  Good footfall
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="Nearness to source of raw materials"
                  />
                  Nearness to source of raw materials
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="Nearness to targeted customer demographics"
                  />
                  Nearness to targeted customer demographics
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="Lesser competition around"
                  />
                  Lesser competition around
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="Access to permit/license of operate"
                  />
                  Access to permit/license of operate
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="Nearness to suppliers"
                  />
                  Nearness to suppliers
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="Affordability (rent)"
                  />
                  Affordability (rent)
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="No rental overheads"
                  />
                  No rental overheads
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="Other such factors"
                  />
                  Other such factors
                </label>
                <br />
              </label>
              <br />
            </section>
            <section id="target_market">
              <label className="label">
                Market research:
                <select name="market_research" onChange={handleChange}>
                  <option>Choose an option</option>
                  <option value="Not conducted">Not conducted</option>
                  <option value="Market research has been conducted">
                    Market research has been conducted
                  </option>
                </select>
                <br />
              </label>
              <br />
              <label className="label">
                Primary market:
                <select name="primary_market" onChange={handleChange}>
                  <option>Choose an option</option>
                  <option value="Local">Local</option>
                  <option value="Regional">Regional</option>
                  <option value="National">National</option>
                  <option value="International">International</option>
                </select>
                <br />
              </label>
              <br />
              <label className="label">
                Customers:
                <select name="customers" onChange={handleChange}>
                  <option>Choose an option</option>
                  <option value="No similar goods/service provider in this locality">
                    No similar goods/service provider in this locality
                  </option>
                  <option value="Only a few similar goods/service providers in this locality">
                    Only a few similar goods/service providers in this locality
                  </option>
                  <option value=" Many similar goods/service providers in this locality">
                    Many similar goods/service providers in this locality
                  </option>
                </select>
                <br />
              </label>
              <br />
              <label className="label">
                Seasons of high sales:
                <select name="seasonality" onChange={handleChange}>
                  <option>Choose an option</option>

                  <option value="Consistent sales across all seasons ">
                    Consistent sales across all seasons
                  </option>
                  <option
                    value="Higher sales in festive
                seasons"
                  >
                    Higher sales in festive seasons
                  </option>
                  <option value="High sales in cropping/cultivation season">
                    High sales in cropping/cultivation season
                  </option>
                  <option value="High sales in peak seasons">
                    High sales in peak seasons
                  </option>
                </select>
                <br />
              </label>
              <br />
              <label className="label">
                Competition:
                <select name="competition" onChange={handleChange}>
                  <option>Choose an option</option>
                  <option value=" No similar goods/service provider in this locality">
                    No similar goods/service provider in this locality
                  </option>
                  <option
                    value="Only a few similar
                goods/service providers in this locality"
                  >
                    Only a few similar goods/service providers in this locality
                  </option>
                  <option
                    value=" Many similar goods/service
                providers in this locality"
                  >
                    Many similar goods/service providers in this locality
                  </option>
                </select>
                <br />
              </label>
              <br />
              <label className="label">
                List of Suppliers: <br />
                <input
                  className="input"
                  type="text"
                  name="suppliers"
                  onChange={handleChange}
                />
                <br />
              </label>
              <br />
              <label className="label" name="marketing_avenues">
                Marketing avenues: <br />
                <label>
                  <br />
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="Distribution of marketing material (pamphlets/flyers)"
                  />
                  Distribution of marketing material (pamphlets/flyers)
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="storefront/business branding"
                  />
                  storefront/business branding
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="Seasonal discounts and offers"
                  />
                  Seasonal discounts and offers
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="Cross-promotion"
                  />
                  Cross-promotion
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="Digital Marketing"
                  />
                  Digital Marketing
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="Word of mouth"
                  />
                  Word of mouth
                </label>
              </label>
            </section>
            <br />
            <section id="scale_potential">
              <label className="label" name="scaleup_potential">
                Avenues of scaling up in future: <br />
                <label>
                  <br />
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="increasing the variety of product/service offering"
                  />
                  increasing the variety of product/service offering
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="expanding the current offering to other geographies"
                  />
                  expanding the current offering to other geographies
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="opening more outlets"
                  />
                  opening more outlets
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="growing the scale of operation"
                  />
                  growing the scale of operation
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="building value-chain integrations"
                  />
                  building value-chain integrations
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    name="other allied revenue streams"
                  />
                  other allied revenue streams
                </label>
              </label>
            </section>
            <br />
          </form>
        </div>
        <div className="form_output">
          <ul>
            <li className="output_field">{`${name} is  looking for ${formData.business_stage} their business of ${business_idea}.`}</li>
            <br style={formData.age_of_establishment == "0" ? hide : show} />
            <li
              className="output_field"
              style={formData.age_of_establishment == "0" ? hide : show}
            >{`This enterprise has been operational since ${formData.age_of_establishment} years and has been serving its customers since then.`}</li>
            <br style={formData.age_of_establishment == "0" ? hide : show} />
            <li className="output_field">{`This establishment offers products/services like- ${formData.primary_product_service_offered} to ${formData.offered_to}.`}</li>
            <br />
            <li
              className="output_field"
              style={
                formData.secondary_product_service_offered == undefined ||
                "" ||
                null
                  ? hide
                  : show
              }
            >{`In addition, the enterprise shall also be involved in- ${formData.secondary_product_service_offered}.`}</li>
            <br
              style={
                formData.secondary_product_service_offered == undefined ||
                "" ||
                null
                  ? hide
                  : show
              }
            />
            <li
              className="output_field"
              style={
                formData.processed_products == undefined || "" || null || 0
                  ? hide
                  : show
              }
            >{`Other products of the enterprise shall include- ${formData.processed_products}`}</li>
            <br
              style={
                formData.processed_products == undefined || "" || null || 0
                  ? hide
                  : show
              }
            />
            <li
              className="output_field"
              style={
                formData.relevant_experience == undefined || "" || null || 0
                  ? hide
                  : show
              }
            >{`${name} has relevant experience of ${formData.relevant_experience} years in this field. `}</li>
            <br
              style={
                formData.skill_training == undefined || "" || null || 0
                  ? hide
                  : show
              }
            />
            <li
              className="output_field"
              style={
                formData.skill_training == undefined || "" || null || 0
                  ? hide
                  : show
              }
            >{`The entrepreneur ${formData.skill_training} in this field of work.`}</li>
            <br
              style={
                formData.skill_training == undefined || "" || null || 0
                  ? hide
                  : show
              }
            />
            <li className="output_field">
              {`The enterprise is uniquely positioned because of its- `}
              <ol>
                {Array.from(usp)?.map((el, idx) => (
                  <li key={idx}>{el}</li>
                ))}
              </ol>
            </li>
            <br />
            <li className="output_field">{`The ${formData.establishment_type} is located in ${formData.business_locality} area of ${city} in a ${formData.infra_ownership} property.`}</li>
            <br />
            <li className="output_field">{`The size of the establishment is ${formData.establishment_area} sq.ft.`}</li>
            <br />
            <li className="output_field">
              {`This locality is selected because of `}
              <ol>
                {Array.from(reason_for_location)?.map((el, idx) => (
                  <li key={idx}>{el}</li>
                ))}
              </ol>
              <br />
            </li>
            <li
              className="output_field"
              style={
                formData.market_research == undefined || "" || null
                  ? hide
                  : show
              }
            >{`${formData.market_research} and the range of products and target market has been identified after that.`}</li>
            <br
              style={
                formData.market_research == undefined || "" || null
                  ? hide
                  : show
              }
            />
            <li className="output_field">{`The enterprise shall focus on offering its products/services to ${formData.primary_market} markets.`}</li>
            <br />
            <li className="output_field">{`Our customers shall include- ${formData.customers}`}</li>
            <br />
            <li className="output_field">{`The nature of the business is such that we expect ${formData.seasonality}.`}</li>
            <br />
            <li className="output_field">{`Regarding competition, there are ${formData.competition}.`}</li>
            <br />
            <li className="output_field">{`The enterprise shall procure goods/raw materials from ${formData.suppliers}.`}</li>
            <br />
            <li className="output_field">
              {`Our marketing avenues to reach the targeted customers shall include- `}
              <ol>
                {Array.from(marketing_avenues)?.map((el, idx) => (
                  <li key={idx}>{el}</li>
                ))}
              </ol>
            </li>
            <br />
            <li className="output_field">
              {`The various foreseeable avenues of scaling up and growing the business in the foreseeable future include- `}
              <ol>
                {Array.from(scaleup_potential)?.map((el, idx) => (
                  <li key={idx}>{el}</li>
                ))}
              </ol>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

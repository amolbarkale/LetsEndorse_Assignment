import styled from "styled-components";
import chip from "./chip.jpg";
export const DesignCC = ({ holdercvv, holderey, holdernum, text }) => {
  return (
    <>
      <Div>
        <div className="shadow">
          <img src={chip} alt="" />
          <input type="text" value={text} />
          <div className="details">
            <div>
              <p>Card holder</p>
              <input type="text" value={holdernum} />
            </div>
            <duv>
              <p>Expires</p>
              <input type="text" value={holderey} />
            </duv>
            <duv>
              <p>CVV</p>
              <input className="ip3" type="text" value={holdercvv} />
            </duv>
          </div>
        </div>
      </Div>
    </>
  );
};
const Div = styled.div`
  width: 50%;
  height: 100vh;

  .shadow {
    width: 50%;
    height: 33vh;
    margin: 27% auto;
    border-radius: 15px;
    background-color: #303030;
    box-shadow: 25px 25px;
    display: flex;
    flex-direction: column;

    & img {
      width: 15%;
      margin-top: 70px;
      margin-left: 30px;
      border-radius: 5px;
      border-radius: 8px;
    }
    & input {
      width: 80%;
      height: 2rem;
      margin-left: 30px;
      margin-top: 20px;
      background-color: #303030;
      color: white;
      outline: none;
      border: none;
      font-size: 18px;
      font-family: ocr_a_std, sans-serif;
      text-shadow: -1px -1px 0px rgba(255, 255, 255, 0.3),
        1px 1px 0px rgba(0, 0, 0, 0.8);
    }

    .details {
      display: flex;
      flex-direction: row;
      margin-left: 30px;
      width: 100%;
      color: #dadada;
      text-shadow: -1px -1px 0px rgba(255, 255, 255, 0.3),
        1px 1px 0px rgba(0, 0, 0, 0.8);
      justify-content: space-between;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      .ip3 {
        width: 60%;
      }

      & input {
        margin-left: 0px;
        margin-top: -10px;
        margin-bottom: 50px;
        font-size: 16px;
        text-shadow: none;
        color: #dadada;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////////////////////////
// import styled from "styled-components";
// import { Custom } from "./components/CustomeNav";
// import {Form} from "./components/Form"
// import { Nav } from "./components/Nav";

// function App() {
   
//     return (
//      <>    * <Form>Click Me</Form> 
//             <Nav/> 
//            <Custom>
//                 <Head><header>Site name</header></Head>
//                <Div > <Tag>About Us</Tag>
//                 <Tag>Prices</Tag>
//                 <Tag>Start page</Tag>
//                 <Tag>Offer</Tag>
//                 <Tag>Contact</Tag></Div>
//             </Custom>
//     </>)
// }

// const Head = styled.div`
// width: 60%;
// font-weight: 700;
// margin-top: 20px;
// color: white;
// font-size: 38px;

// `
// const Div = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: space-evenly;
// width: 40%;
// `

// const Tag = styled.p`
// color: white;
// &:hover{
//     text-decoration: underline;
// }
// `;
// export default App;
/////////////////////////////////////////////////////////////////////////////////////////

import { DesignCC } from "./CC/DesignCC";
import { Form } from "./CC/FormCC";
import styled from "styled-components";
import { useState } from "react";
function App() {
const [text, setText] = useState("")
    const [holdernum, setholdernum] = useState("");
    const [holderey, setholderey] = useState("");
    const [holdercvv, setholdercvv] = useState("");

    const handleChange = ({ target }) => {
        setText(target.value)
    }
    const handleChange1 = ({ target }) => {
        setholdernum(target.value)
    }
    const handleChange2 = ({ target }) => {
        setholderey(target.value)
    }
  
    const handleChange4 = ({ target }) => {
        setholdercvv(target.value)
    }

    return <><Cont >
        <DesignCC holdercvv={holdercvv} holderey={holderey}
            holdernum={holdernum} text={text} />
        
        <Form text={text} handleChange={handleChange}
            handleChange1={handleChange1} handleChange2={handleChange2}
            handleChange4={handleChange4} />
    </Cont>
    </>
}

export default App;

const Cont = styled.div`
display: flex;
flex-direction: row;
`
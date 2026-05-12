// export default class App extends Component {
//   render() {
//     return (
//       <>
//         <h1>클래스형 컴포넌트</h1>
//       </>
//     );
//   }
// }

// export default function App() {
//   return (
//     <React.Fragment>
//       <h1>함수형 컴포넌트</h1>
//       <h1>함수형 컴포넌트</h1>
//     </React.Fragment>
//   );
// }

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

export default function App() {
  return (
    <>
      <h1>App Component</h1>
      <Header />
      <Home/>
      <Footer/>
    </>
  );
}

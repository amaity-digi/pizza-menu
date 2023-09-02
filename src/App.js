
//import './App.css';
import './index.css';

const PizzaData = [
  {
    name: "Focaccia",
    ingredients: "Breads with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false
  },
  {
    name: "Margherita",
    ingredients: "Tomato sauce, mozzarella cheese, fresh basil",
    price: 8,
    photoName: "pizzas/Margherita.jpg",
    soldOut: false
  },
  {
    name: "Pepperoni",
    ingredients: "Tomato sauce, mozzarella cheese, pepperoni slices",
    price: 10,
    photoName: "pizzas/pepperoni.jpg",
    soldOut: false
  },
  {
    name: "Hawaiian",
    ingredients: "Tomato sauce, mozzarella cheese, ham, pineapple",
    price: 9,
    photoName: "pizzas/hawaiian.jpg",
    soldOut: false
  },
  {
    name: "Mushroom Delight",
    ingredients: "Tomato sauce, mozzarella cheese, mushrooms, onions",
    price: 8,
    photoName: "pizzas/mushroom-delight.jpg",
    soldOut: true
  },
  {
    name: "Supreme",
    ingredients: "Tomato sauce, mozzarella cheese, pepperoni, sausage, bell peppers, onions, olives",
    price: 12,
    photoName: "pizzas/supreme.jpg",
    soldOut: false
  },
  {
    name: "Vegetarian",
    ingredients: "Tomato sauce, mozzarella cheese, bell peppers, onions, tomatoes, olives",
    price: 9,
    photoName: "pizzas/Vegetarian.webp",
    soldOut: false
  },
  {
    name: "BBQ Chicken",
    ingredients: "BBQ sauce, mozzarella cheese, grilled chicken, red onions, cilantro",
    price: 11,
    photoName: "pizzas/BBQ Chicken.jpg",
    soldOut: false
  }
]


function App() {

  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const styles = { color: "red", fontSize: "48px", textTransform: "uppercase" }
  const styles = {}

  return (
    <header className='header'>
      <h1 style={styles} className='header'>Fast React Pizza Co.</h1>
    </header>
  )

}

function Menu() {
   const pizzas = PizzaData;
  //const pizzas = [];
  const numberOfPizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our menu</h2>
      {numberOfPizzas > 0 ? (
        <>
        <p>
          Authentic italian cuisine. 8 createive dishes to choose from. All from our stone oven, all organic, all delicious.
        </p>
        <ul className='pizzas'>
          {pizzas.map((pizza) => (<Pizza pizzaObj={pizza} />))}
        </ul>
        </>
      ) : <p>We're still working on our menu. Please come back later :)</p>
      }

    </main>
  )

}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 10;
  const closeHour =18;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're currently open!")
  // } else {
  //   alert("Sorry we're closed!")
  // }
  return (<footer className='footer'>
    {isOpen ?
      (
         <Order closeHour={closeHour} openHour={openHour}/>
      ) : ( <p>We're happry to welcome you between {openHour}:00 and {closeHour}:00.</p>
   )}

  </footer>
  )
}


function Order(props){
  const {closeHour,openHour} = props;
  return(
    <div className='order'>
    <p>We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.</p>
    <button className='btn'>Order</button>
  </div>
  )
}

function Pizza({pizzaObj}) {
  // if(pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

export default App;

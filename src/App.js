
//import './App.css';
import './index.css';

function App() {

  const PizzaData = [
    {
      name: "Focaccia",
      ingredients: "Breads with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false
    },
    {
      name: "Margherita",
      ingredients: "Tomato sauce, mozzarella cheese, fresh basil",
      price: 8,
      photoName: "pizzas/margherita.jpg",
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
      soldOut: false
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
      photoName: "pizzas/vegetarian.jpg",
      soldOut: false
    },
    {
      name: "BBQ Chicken",
      ingredients: "BBQ sauce, mozzarella cheese, grilled chicken, red onions, cilantro",
      price: 11,
      photoName: "pizzas/bbq-chicken.jpg",
      soldOut: false
    }
  ]

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
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      <Pizza
        name='Pizza Spinaci'
        ingredients='BBQ sauce, mozzarella cheese, grilled chicken, red onions, cilantro'
        photoName='pizzas/spinaci.jpg'
        price={10}
      />

      <Pizza
        name='Vegetarian'
        ingredients='Tomato sauce, mozzarella cheese, bell peppers, onions, tomatoes, olives'
        photoName='pizzas/spinaci.jpg'
        price={12}
      />

    </main>
  )

}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're currently open!")
  // } else {
  //   alert("Sorry we're closed!")
  // }
  return <footer className='footer'>{new Date().toLocaleTimeString()} We're currently open</footer>
}


function Pizza(props) {
  console.log(props, 'props');
  return (
    <div className='pizza'>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

export default App;

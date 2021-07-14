import './App.css';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import AddInventory from './components/classComponent';
import AddProduct from './components/funcComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Inventory form </h1>
        <AddInventory/>
        
        
      </header>
    </div>
  );
}

export default App;

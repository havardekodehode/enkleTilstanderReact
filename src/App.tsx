import "./app.css";
import { Carousel } from "./components/Carousel/Carousel";
import { Counter } from "./components/Counter/Counter";
import { Form } from "./components/Form/Form";
import { Layout } from "./components/Layout/Layout";

function App() {
    return (
        <Layout>
            <Form></Form>
            <Counter />
            <Carousel />
        </Layout>
    );
}

export default App;

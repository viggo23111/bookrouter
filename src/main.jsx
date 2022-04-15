import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/Expenses";
import Invoices from "./routes/Invoices";
import Invoice from "./routes/invoice"
import Books from "./routes/Books"
import AddBook from "./routes/AddBook";
import FindBook from "./routes/findBook";
import NoMatch from "./routes/NoMatch";
import Details from "./routes/Details";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/books" element={<Books/>}>
                    <Route
                        index
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>Select an book</p>
                            </main>
                        }
                    />
                    <Route path=":bookID" element={<Details />} />
                </Route>
                <Route path="/add_book" element={<AddBook/>}/>
                <Route path="/find_book" element={<FindBook/>}/>
                <Route
                    path="*"
                    element={<NoMatch/>}
                />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);